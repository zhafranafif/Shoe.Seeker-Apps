import { useQuery } from '@apollo/client'
import React from 'react'
import { getCartProduct } from '../graphql/query'
import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { DeleteFromCart } from '../hooks/DeleteFromCart';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading';

const Cart = () => {
  const [counter, setcounter] = useState(1)
  const {deleteItem} = DeleteFromCart()
  const { data: itsProductCart, loading: itsProductLoading, error: itsProductError } = useQuery(getCartProduct)
  
  if (itsProductLoading) {
    return (
      <div className='mt-5'>
          <Loading/>
      </div>
    )
  }
  if (itsProductError) {
    console.log(itsProductError)
  }

  console.log(itsProductCart)

  const decrement = () => {
    setcounter(counter + 1)
  }

  const increment = () => {
    setcounter(counter - 1)

    if (counter <= 1) {
      setcounter(1)
    }
  }
  const notifyDelete = () => {
    toast.error("Product Deleted from Cart!", {
        position: toast.POSITION.TOP_CENTER
    });
}

  const subTotal = itsProductCart?.shoeseeker_v2_cart.reduce((a,b) => a += b.cart_product.product_price, 0)

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({itsProductCart?.shoeseeker_v2_cart.length} items)</span>
        </button>

        {itsProductCart?.shoeseeker_v2_cart.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link to="/product">
              <button
                type="button"
                
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {itsProductCart?.shoeseeker_v2_cart.length >= 1 && itsProductCart?.shoeseeker_v2_cart.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.cart_product.product_image} className="cart-product-image" alt='shoes' />
              <div className="item-desc">
                <div className="flex top">
                  <h5 className='me-3'>{item.cart_product.product_name}</h5>
                  <h4 style={{fontWeight: 'bolder'}}>${item.cart_product.product_price}</h4>
                </div>
                <div className="d-flex justify-content-between align-items-baseline mt-4">
                  <div>
                  <p className="quantity-desc ">
                    <span className="minus me-2" onClick={increment}>
                    <AiOutlineMinus />
                    </span>
                      <span className="num">{counter}</span>
                    <span className="plus ms-2" onClick={decrement}><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => {
                      deleteItem({
                        variables: {
                          id: item.id
                        }
                      }); notifyDelete()}}
                  >
                    <TiDeleteOutline />
                  </button>
                  <ToastContainer/>
                </div>
              </div>
            </div>
          ))}
        </div>
        {itsProductCart?.shoeseeker_v2_cart.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3 style={{color: "#f02d34", fontWeight: 'bolder'}}>{new Intl.NumberFormat('en-emodeng',{ style: 'currency', currency: 'USD' }).format(subTotal.toFixed(2))}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart