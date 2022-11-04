/* eslint-disable jsx-a11y/anchor-is-valid */
import { useQuery } from "@apollo/client"
import React from "react"
import { useState } from "react"
import { AiOutlineShopping } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { getQuantityLength } from "../graphql/query"


const Navbar = () => {
  const [showCart, setshowCart] = useState(false)

  const { data } = useQuery(getQuantityLength)
  console.log(data)

  const onHandleButton = () => {
    setshowCart(!showCart)
  }
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand">
              Shoe<span>.</span>seeker
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse  justify-content-lg-end me-lg-5"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item me-3">
                  <a className="nav-link" style={{ color: "black" }} href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "black" }} href="/aboutus">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "black" }} href="/product">
                    Product
                  </a>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse  justify-content-lg-end me-lg-5 person-cart">
            <a  className="cart-icon" >
        <BsFillPersonFill/>
              </a>
              <a href='/cart' className="cart-icon" onClick={() => onHandleButton} >
        <AiOutlineShopping />
                <span className="cart-item-qty">{data?.shoeseeker_v2_cart.length}</span>
                </a>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar