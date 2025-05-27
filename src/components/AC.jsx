import React from 'react';
import { acdata } from '../products data/acdata';
import { Link } from 'react-router-dom';

const AC = () => {
  const limit = acdata.slice(0, 5);

  return (
    <>
      <div className="header">
        <h3>AC</h3>
        <Link to="/ac">+View more...</Link>
      </div>  
      <div className="image-section-ac">
        {
          limit.map((ele) => (
            <div className='one-phone'>
              <Link to={`/ac/${ele.id}`}>
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

export default AC;
