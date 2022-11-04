import { useQuery } from '@apollo/client'
import React from 'react'
import { getCartProduct } from '../graphql/query'
import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { DeleteFromCart } from '../hooks/DeleteFromCart';
import { useState } from 'react';

const Cart = () => {
  const [counter, setcounter] = useState(1)
  const {deleteItem} = DeleteFromCart()
  const { data: itsProductCart, loading: itsProductLoading, error: itsProductError } = useQuery(getCartProduct)
  
  if (itsProductLoading) {
    return (
      <h1>Loading...</h1>
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
                  <h4>{item.cart_product.product_price}</h4>
                </div>
                <div className="d-flex justify-content-between align-items-baseline">
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
                    onClick={() => deleteItem({
                      variables: {
                        id : item.id
                      }
                    })}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {itsProductCart?.shoeseeker_v2_cart.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3></h3>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart