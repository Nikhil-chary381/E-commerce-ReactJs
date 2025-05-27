import React from 'react'
import { tvdata } from '../products data/tvdata'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
const TvPage = () => {
    return (
        <>
            <NavBar />
            <div className='heading-mobile'>
                <h2>Television</h2>
            </div>
            <div className='all-mobiles'>
                {
                    tvdata.map((ele) => {
                        return (
                            <div className='all-mobiles-one'>
                                <Link to={`/tv/${ele.id}`}>
                                    <div className="image">
                                        <img src={ele.image} alt="" />
                                        <div className='details'>
                                            <h4>{ele.company}</h4>
                                            <h5>{ele.model}</h5>
                                            <h2>₹{ele.price}</h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TvPage
