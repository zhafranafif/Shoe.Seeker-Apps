import { useLazyQuery, useQuery } from '@apollo/client'
import React from 'react'
import { getAllProduct, getProductByName } from '../graphql/query'
import VansHeaderPage from '../assets/vans-header-page.png'
import ConverseHeaderPage from '../assets/converse-header-page.png'
import { Link } from 'react-router-dom'

const ProductPage = () => {
    const { data, loading, error } = useQuery(getAllProduct)
    const [getProduct, { data: productData, loading: productLoading, error: productError }] = useLazyQuery(getProductByName)
    

    if (loading && productLoading) {
        return (
          <h1>loading...</h1>
        )
      }
      if (error && productError) {
        console.log(error)
    }
    const onGetProductByName = () => {
        getProduct({
            variables: {
                product_name : productData 
            }
        })
    }
    return (
        <div className='product-container'>
            <div className='img-container d-flex justify-content-center pt-5 gap-5'>
            <img src={VansHeaderPage} alt="vans logo" style={{ width: "200px", height: "200px"}} />
            <img src={ConverseHeaderPage} alt="converse logo" style={{ width: "200px", height: "200px"}} />
            </div>
      <div className="d-flex justify-content-center gap-4 mb-5 flex-wrap" style={{width: "100%"}}>
                {data?.shoeseeker_v2_product.map((item) => (
                    <div className="card item-card card-block p-3 card-container" key={item.id} style={{ width: "285px", height: "485px" }}>
                        <div className='d-flex justify-content-between'>
                        <h5 className='text-start text-uppercase fw-light spac' style={{letterSpacing: "2px"}}>{item.product_type}</h5>
                        <h5 className=" text-end"><i className="bi bi-heart"></i></h5>
                        </div>
                        <img src={item.product_image} alt="shoes" style={{ width: "100%" }}></img>
                        <h5 className="item-card-title mt-3 mb-3 text-center">{item.product_name}</h5>
                        <span className='line'></span>
                        <p className="card-text text-center mt-2">{item.product_price}</p>
                        <div className='card-button'>
                            <Link to={`/product/${item.product_name}`}>
                                <button className='more-detail' onClick={onGetProductByName} style={{width:"100%"}}><i className="bi bi-arrow-bar-right"></i>More Detail</button>
                            </Link>
                        </div>
                    </div>
                ))}
      </div>
      </div>
  )
}

export default ProductPage