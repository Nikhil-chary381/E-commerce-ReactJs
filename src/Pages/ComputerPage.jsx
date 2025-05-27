import React from 'react'
import { laptopdata } from '../products data/laptopdata'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
const ComputerPage = () => {
    return (
        <>
            <NavBar />
            <div className='heading-mobile'>
                <h2>Laptops</h2>
            </div>
            <div className='all-mobiles'>
                {
                    laptopdata.map((ele) => {
                        return (
                            <div className='all-mobiles-one'>
                                <Link to={`/laptops/${ele.id}`}>
                                    <div className="image">
                                        <img src={ele.image} alt="" />
                                        <div className='details'>
                                            <h4>{ele.company}</h4>
                                            <h5>{ele.model}</h5>
                                            <h5>{ele.features}</h5>
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

export default ComputerPage
