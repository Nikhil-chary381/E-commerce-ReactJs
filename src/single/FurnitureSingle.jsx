import React from 'react'
import { furnituredata } from '../products data/furnituredata'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useCart } from '../context/CartContext'

const FurnitureSingle = () => {
  const { id } = useParams()
  const {addtoCart}=useCart()
  const product = furnituredata.find((ele) => ele.id === id)
  return (
    <>
    <NavBar />
        <div className='single-mobile'>
          <img src={product.image} alt="" />
        <div className='single-mobile-details'>
          <p>About Furniture</p>
          <p>{product.model}</p>
          <p>Features: {product.features}</p>
          <p>Price:₹{product.price}</p>
          <button onClick={()=>addtoCart(product)}>Add to Cart</button>
        </div>
        </div>
    </>
  )
}

export default FurnitureSingle
