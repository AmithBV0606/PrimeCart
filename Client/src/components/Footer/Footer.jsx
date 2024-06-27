import React from 'react'
import "../Footer/Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>

      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi neque alias nisi ea est aliquid necessitatibus sapiente. Tenetur esse porro inventore, fugit quaerat dolorem labore id perspiciatis fuga nisi modi?
          </span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi neque alias nisi ea est aliquid necessitatibus sapiente. Tenetur esse porro inventore, fugit quaerat dolorem labore id perspiciatis fuga nisi modi?
          </span>
        </div>
      </div>

      <div className="bottom">

        <div className="left">
          <span className="logo">PrimeCart</span>
          <span className="copyright">&copy; Copyright 2024. All Rights Reserved</span>
        </div>

        <div className="right">
          <img src="/src/assets/img/payment.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Footer