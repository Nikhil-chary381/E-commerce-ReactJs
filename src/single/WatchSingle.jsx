import React from 'react'
import { watchesdata } from '../products data/watchesdata'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useCart } from '../context/CartContext'


const WatchSingle = () => {
  const { id } = useParams()
  const {addtoCart}=useCart()
  const product = watchesdata.find((ele) => ele.id === id)
  return (
    <>
    <NavBar />
        <div className='single-mobile'>
          <img src={product.image} alt="" />
        <div className='single-mobile-details'>
          <p>About Watch</p>
          <p>{product.company}</p>
          <p>Model: {product.model}</p>
          <p>Price:₹{product.price}</p>
          <button onClick={()=>addtoCart(product)}>Add to Cart</button>
        </div>
        </div>
    </>
  )
}

export default WatchSingle
