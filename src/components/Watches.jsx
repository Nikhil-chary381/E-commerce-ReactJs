import React from 'react';
import { watchesdata } from '../products data/watchesdata';
import { Link } from 'react-router-dom';

const Watches = () => {
  const limit = watchesdata.slice(0, 5);

  return (
    <>
      <div className="header">
        <h3>Watches</h3>
        <Link to="/watches">+View more...</Link>
      </div>
      <div className="image-section">
        {
          limit.map((ele) => (
            <div className='one-phone'>
              <Link to={`/watches/${ele.id}`}>
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

export default Watches;
