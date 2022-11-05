import React from 'react'
import AboutUsBanner from '../assets/aboutusbanner.jpg'
import SecondBanner from '../assets/secondbanner.jpg'

const AboutUsPage = () => {
  return (
    <div className='aboutus-section'>
      <h2 className='aboutus-title text-center mb-5'>ABOUT US</h2>
      <div className='aboutus-mainquote text-center'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className='aboutus-mainbanner'>
        <img src={AboutUsBanner} alt="Team Work" />
      </div>
      <div className='aboutus-bannerandquote d-flex my-5 justify-content-around'>
        <p style={{ maxWidth: '500px', fontSize: '24px', fontWeight: "bold" }}><i>"Sneakerhead. Sneaker addict. Sneaker Slave. Call it what you want; there's a certain thrill, like an itch only shoes
          can scratch, that sneakerheads feel for their passion"</i></p>
        <img src={SecondBanner} alt="Team Work" style={{width:'450px' , height:'300px', borderRadius:'3px'}}/>
      </div>
    </div>
  )
}

export default AboutUsPage