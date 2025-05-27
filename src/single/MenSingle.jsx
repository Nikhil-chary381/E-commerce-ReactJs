import React from 'react'
import { mendata } from '../products data/mendata'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useCart } from '../context/CartContext'


const MenSingle = () => {
  const { id } = useParams()
  const {addtoCart}=useCart()

  const product = mendata.find((ele) => ele.id === id)
  return (
    <>
    <NavBar />
        <div className='single-mobile'>
          <img src={product.image} alt="" />
        <div className='single-mobile-details'>
          <p>About product</p>
          <p>{product.company}</p>
          <p>Description: {product.model}</p>
          <p>Price:₹{product.price}</p>
          <button onClick={()=>addtoCart(product)}>Add to Cart</button>
        </div> 
        </div>
    </>
  )
}

export default MenSingle
