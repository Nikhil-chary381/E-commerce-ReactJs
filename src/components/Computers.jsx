import React from 'react';
import { laptopdata } from '../products data/laptopdata';
import { Link } from 'react-router-dom';

const Computers = () => {
  const limit = laptopdata.slice(0, 5);

  return (
    <>
      <div className="header">
        <h3>Laptops</h3>
        <Link to="/laptops">+View more...</Link>
      </div>
      <div className="image-section">
        {
          limit.map((ele) => (
            <div className='one-phone'>
              <Link to={`/laptops/${ele.id}`}>
              <div className="image">
                <img src={ele.image} alt="" />
                 </div>
                <div className='details'>
                  <h4>{ele.company}</h4>
                  <h5>{ele.model}</h5>
                  <h2>₹{ele.price}</h2>
              </div>
            </Link>
            </div>

          ))
        }
      </div>
    </>
  );
}

export default Computers;
