import React from 'react'
import { acdata } from '../products data/acdata'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
const AcPage = () => {
    return (
        <>
            <NavBar />
            <div className='heading-mobile'>
                <h2>AC</h2>
            </div>
            <div className='all-mobiles'>
                {
                    acdata.map((ele) => {
                        return (
                            <div className='all-mobiles-one'>
                                <Link to={`/ac/${ele.id}`}>
                                    <div className="image">
                                        <img src={ele.image} alt="" />
                                        <div className='details'>
                                            <h4>{ele.brand}</h4>
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

export default AcPage
