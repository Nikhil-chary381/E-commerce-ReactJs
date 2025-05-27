import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
  return (
    <div className='footer'>
      <h4>About us</h4>
      <p>Shopzone is your one-stop destination for quality products at unbeatable prices. We deliver convenience, variety, and great customer service.</p>
      <h4>Contact Info</h4>
      <Link to=''><p>Email: support@shopzone.com</p></Link>
      <p>Phone: +91-9876543210 </p>
      <p>Address: Hyderabad, Telangana, India</p>
      <div className='social-media-logos'>
        <Link to='https://www.youtube.com/'>
          <img className='youtube' src="https://logolook.net/wp-content/uploads/2021/06/Symbol-Youtube.png" alt="" />
        </Link>
        <Link to='https://www.facebook.com/'>
          <img src="https://clipart.info/images/ccovers/1509135366facebook-symbol-png-logo.png" alt="" /></Link>
        <Link to='https://www.instagram.com/'>
          <img src="https://www.adverthia.com/wp-content/uploads/2020/02/instagram-logo-png-transparent-background-1024x1024-1.png" alt="" />
        </Link>

      </div>
    </div>
  )
}

export default Footer
