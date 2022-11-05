import React from 'react'
import HeroImage from '../assets/hero.jpg'

const Hero = () => {
  return (
      <>
          <div className="hero-container position-relative">
            <img src={HeroImage} alt="hero banner" />
              <div className='hero-main__content'>
                <h2>
                  A Special Apps
                  Made to Sneaker Hunter All
                  Over The World!
                </h2>
                <p style={{fontSize: "24px"}}>
                The secret sauce to happiness is finding both comfort and good looks in your sneakers!           
                </p>
                <button type="button" className="btn btn-primary">Discover More<i className="bi bi-arrow-right ms-2"/></button>
              </div>
         </div>
      </>
  )
}

export default Hero