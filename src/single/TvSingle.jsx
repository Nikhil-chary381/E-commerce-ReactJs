import React from 'react'
import { tvdata } from '../products data/tvdata'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useCart } from '../context/CartContext'


const TvSingle = () => {
  const { id } = useParams()
  const {addtoCart}=useCart()
  const product = tvdata.find((ele) => ele.id === id)
  return (
    <>
    <NavBar />
        <div className='single-mobile'>
          <img src={product.image} alt="" />
        <div className='single-mobile-details'>
          <p>About TV</p>
          <p>{product.model}</p>
          <p>Features: {product.features}</p>
          <p>Price:₹{product.price}</p>
          <button onClick={()=>addtoCart(product)}>Add to Cart</button>
        </div>
        </div>
    </>
  )
}

export default TvSingle
