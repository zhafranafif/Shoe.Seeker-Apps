import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useQuery } from '@apollo/client';
import { getAllUpcomingShoes } from '../graphql/query';
import Loading from './Loading';

const Upcoming = () => {
    const {data, error, loading} = useQuery(getAllUpcomingShoes)
    const options = {
        loop: true,
        margin: 10,
        items: 4,
        autoplay: true,
        autoplayTimeout: 5000,
    }
    if (loading) {
        return (
    <div className='mt-5'>
          <Loading/>
      </div>
        )
    }
    if (error) {
        console.log(error)
    }
    console.log(data)
  return (
      <div className='upcoming-section'>
          <h2>Upcoming Sneakers Ahead!</h2>
          <div className='d-flex gap-3 my-5 p-5' style={{width: "100%"}}>
          <OwlCarousel className='owl-theme' {...options}>
          {data?.shoeseeker_upcoming_release.map((item) => (
              <div className="card release-card" style={{ width: "100%" }} key={item.id}>
              <img src={item.imagerelease} className="card-img-top" alt="shoes release"></img>
              <div className="card-body">
                      <h5 className="card-title">{item.shoesrelease}</h5>
              </div>
            </div>
                  ))}
          </OwlCarousel>
              </div>
      </div>
  )
}

export default Upcoming