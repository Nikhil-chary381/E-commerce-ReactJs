import React from 'react'
import { womendata } from '../products data/womendata' 
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
const WomenFashionPage = () => { 
    return (
        <>
            <NavBar />
            <div className='heading-mobile'>
                <h2>Women Fashion</h2>
            </div>
            <div className='all-mobiles'>
                {
                    womendata.map((ele) => {
                        return (
                            <div className='all-mobiles-one'>
                                <Link to={`/womenwear/${ele.id}`}>
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

export default WomenFashionPage
