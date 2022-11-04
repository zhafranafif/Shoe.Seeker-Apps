import React from 'react'
import VansTittle from '../assets/vans-title.png'
import ConverseTittle from '../assets/Converse-title.png'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className="category-section">
      <h1>
        DISCOVER LIMITED SNEAKER <br />
        THAT FIT FOR YOU!
      </h1>
      <div className="category-card">
      <Link to='/product'>
        <div className="card-vans">
          <div className="card-content">
            <img src={VansTittle} alt="" style={{width: '150px', height: "170px"}}/>
          </div>
        </div>
        </Link>
        <Link to='/product'>
        <div className="card-converse">
          <div className="card-content">
            <img src={ConverseTittle} alt="" style={{width: '150px', height: "170px"}}/>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Category