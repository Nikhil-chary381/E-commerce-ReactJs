import React from 'react';
import { womendata } from '../products data/womendata';
import { Link } from 'react-router-dom';

const WomenFashion = () => {
  const limit = womendata.slice(0, 5);

  return (
    <>
      <div className="header">
        <h3>Women Fashion</h3>
        <Link to="/womenwear">+View more...</Link>
      </div>
      <div className="image-section">
        {
          limit.map((ele) => (
            <div className='one-phone'>
              <Link to={`/womenwear/${ele.id}`}>
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

export default WomenFashion;
