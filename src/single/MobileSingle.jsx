import React from 'react'
import { mobiledata } from '../products data/mobiledata'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useCart } from '../context/CartContext'


const MobileSingle = () => {
  const { id } = useParams()
  const {addtoCart}=useCart()

  const product = mobiledata.find((ele) => ele.id === id)
  return (
    <>
    <NavBar />
        <div className='single-mobile'>
          <img src={product.image} alt="" />
        <div className='single-mobile-details'>
          <p>About Mobile</p>
          <p>{product.model}</p>
          <p>Features: {product.features}</p>
          <p>Description: {product.description}</p>
          <p>Price:₹{product.price}</p>
          <button onClick={()=>addtoCart(product)}>Add to Cart</button>
        </div> 
        </div>
    </>
  )
}

export default MobileSingle
