import React from 'react';
import { tvdata } from '../products data/tvdata';
import { Link } from 'react-router-dom';

const TV = () => {
  const limit = tvdata.slice(0, 5);

  return (
    <>
      <div className="header">
        <h3>Television</h3>
        <Link to="/tv">+View more...</Link>
      </div>
      <div className="image-section-tv">
        {
          limit.map((ele) => (
            <div className='one-phone'>
              <Link to={`/tv/${ele.id}`}>
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

export default TV;
