import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductByName} from '../graphql/query'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { AddProductToCart } from '../hooks/InsertToCart';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Loading from '../component/Loading';

const DetailPage = () => {
  const{ insertToCart } = AddProductToCart()
  const { product_name } = useParams()
    const { data : itsProductData, loading : itsProductLoading, error: itsProductError } = useQuery(getProductByName, {
        variables: {product_name}
    })
  
    if (itsProductLoading) {
        return (
          <div className='mt-5'>
          <Loading/>
      </div>
        )
      }
      if (itsProductError ) {
          console.log(itsProductError )
  }
  const notify = () => {
    toast.success("Product Added to Cart!", {
        position: toast.POSITION.TOP_CENTER
    });
}

  if (itsProductData) {
    return (
      itsProductData?.shoeseeker_v2_product.map((item) => (
        <div key={item.id}>
        <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={item.product_image} className="product-detail-image" alt='shoes'/>
          </div>
        </div>
      
        <div className="product-detail-desc">
                <h1>{item.product_name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h3>Details: </h3>
          <p>{item.product_desc}</p>
          <p className="price">{new Intl.NumberFormat('en-emodeng',{ style: 'currency', currency: 'USD' }).format(item.product_price)}</p>
              <div className="buttons">
                <button className="add-to-cart" onClick={() => {
                  insertToCart({
                    variables: {
                      id: item.id,
                      product_name: item.product_name,
                      product_image: item.product_image,
                      product_price: item.product_price,
                      product_qty: item.product_qty,
                      product_desc: item.product_desc,
                      product_type: item.product_type
                    }
                  }); notify()}}>Add to Cart</button>
                <ToastContainer/>
          </div>
        </div>
      </div>
        </div>
    )))
  } 
}

export default DetailPage