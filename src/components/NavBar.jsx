import React from 'react'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useCart } from '../context/CartContext';

const NavBar = () => {
  const {Cartitems}=useCart()
  return (
    <>
      <div className='navbar'>
        <h3>ShopZone</h3>
        <div className='search-bar'>
          <input type="text" className="searchinput" placeholder='Search...' />
          <i className="fas fa-search" style={{ color: '#888' }}></i>
        </div>
        <div className='nav-elements'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login-register">Login/Register</Link></li>
            <li><Link to="/cart">
              <img src="/images/cart symbol.png" alt="" />
              <sup>{Cartitems.length}</sup>
            </Link></li>
          </ul>
        </div>
      </div>
      <div className='categories'>
        <ul>
          <Link to='/mobiles'>
            <li>Mobiles</li>
          </Link>
          <Link to='/laptops'>
            <li>Laptops</li>
          </Link>
          <Link to='/watches'>
            <li>Watches</li>
          </Link>
          <Link to='/menwear'>
            <li>Mens Wear</li>
          </Link>
          <Link to='/womenwear'>
            <li>Womens wear</li>
          </Link>
          <Link to='/ac'>
            <li>AC</li>
          </Link>
          <Link to='/tv'>
            <li>Televison</li>
          </Link>
          <Link to='/furniture'>
            <li>Furniture</li>
          </Link>
        </ul>
      </div>
    </>

  )
}
export default NavBar;
