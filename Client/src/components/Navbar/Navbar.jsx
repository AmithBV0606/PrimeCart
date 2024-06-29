import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Icons 
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// CSS Files Import
import "../Navbar/Navbar.scss"
import Cart from '../Cart/Cart.jsx';

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className="wrapper">

        <div className="left">
          <div className="item">
            <Link to="/">
              <img src="/src/assets/img/primecart-high-resolution-logo-transparent.png" alt="" />
            </Link>
          </div>

          {/* <div className="item">
            <span>USD</span>
            <KeyboardArrowDownOutlinedIcon />
          </div> */}

          <div className="item">
            <Link className='link' to="/products/7">Men</Link>
          </div>

          <div className="item">
            <Link className='link' to="/products/8">Women</Link>
          </div>

          <div className="item">
            <Link className='link' to="/products/9">Children</Link>
          </div>
        </div>

        <div className="center">
          <Link className='link' to='/'>PrimeCart</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className='link' to='/'>Home</Link>
          </div>

          <div className="item">
            <Link className='link' to='/'>About</Link>
          </div>

          <div className="item">
            <Link className='link' to='/'>Contact</Link>
          </div>

          <div className="item">
            <Link className='link' to='/'>Stores</Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />

            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>

      </div>

      {open && <Cart />}
    </div>
  )
}

export default Navbar