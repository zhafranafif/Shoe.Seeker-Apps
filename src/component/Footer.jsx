/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
  return (
      <div className='footer-section'>
          <div className='footer-container__header'>
              <div className='footer-socmed ms-2'>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-instagram ms-3"></i>
                  <i className="bi bi-github ms-3"></i>
              </div>
              <div className='footer-brand'>
                  <h3>Shoe.seeker</h3>
              </div>
              <div className='footer-payment me-2'>
                  <i className="bi bi-paypal me-3"></i>
                  <i className="bi bi-cc-circle me-3"></i>
                  <i className="bi bi-credit-card-2-front-fill"></i>
              </div>
          </div>
          <span></span>
          <div className='footer-container__link mb-4'>  
                  <a className="nav-link__footer" style={{ color: 'white' }} href="#">
                    Home
                  </a>
                
                
                  <a className="nav-link__footer" style={{ color: 'white' }} href="#">
                    Product
                  </a>
                
                  <a className="nav-link__footer" style={{ color: 'white' }} href="#">
                    About Us
                  </a>
          </div>
          <div className='footer-copyright'>
              <p>&#169; Shoe.seeker {new Date().getFullYear()}</p>
              <p>All Right Reserved</p>
          </div>
    </div>
  )
}

export default Footer