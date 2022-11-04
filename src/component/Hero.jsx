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
                <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, animi cum ex
            quisquam nostrum aperiam eum, laudantium ipsam repellat libero totam exercitationem commodi fuga temporibus, cupiditate est?Error, a dolores.           
                </p>
                <button type="button" className="btn btn-primary">Discover More<i className="bi bi-arrow-right ms-2"/></button>
              </div>
         </div>
      </>
  )
}

export default Hero