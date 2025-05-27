import React from 'react';
import { useCart } from './context/CartContext';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';

const UserCart = () => {
  const { Cartitems, removefromCart, handleTotal,clearCart } = useCart();


  if (Cartitems.length === 0) {
    return (
      <div className='empty-cart'>
        <NavBar />
        <div className='cart-image-heading'>
          <img src="/images/cart symbol.png" alt="" />
        </div>
        <h2>Cart is Empty</h2>
        <Link to='/'>
          <button>Browse Products</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className='cart-image-heading'>
        <img src="/images/cart symbol.png" alt="" />
        <h3>Total items: {Cartitems.length}</h3>
      </div>
      {
        Cartitems.map((item) => {
          return (
            <div className="cart-section" key={item.id}>
              <div className="cart-image">
                <img src={item.image} alt="" />
              </div>
              <div className="cart-info">
                <h5>{item.company}</h5>
                <p>{item.model}</p>
                <h4>Price: ₹{item.price}</h4>
              </div>
              <div className="remove-button">
                <img onClick={() => removefromCart(item)} src="/images/delete symbol.png" alt="" />
              </div>
            </div>
          );
        })
      }
      <div className="total-cart-amount">
        <button onClick={()=> clearCart()}>Clear Cart</button>
        <h3><span>Total:</span> ₹{handleTotal()}</h3>
      </div>
      <div className='payment-button'>
        <button>₹ Go to Payment</button>
      </div>
    </div>
  );
};

export default UserCart;
