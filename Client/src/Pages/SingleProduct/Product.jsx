import React, { useState } from 'react'
import "../SingleProduct/Product.scss"

// Icons 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [seletedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://images.pexels.com/photos/792725/pexels-photo-792725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3579181/pexels-photo-3579181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ]
  return (
    <div className='product'>

      {/* Left Part : Images */}
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)}/>
        </div>

        <div className="mainImg">
          <img src={images[seletedImg]} alt="" />
        </div>
      </div>

      {/* Right Part : Product Information */}
      <div className="right">
        <h1>Title</h1>

        <span className='price'>$75</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus tempora minima eveniet dolores voluptatem aut corrupti expedita, porro debitis?
        </p>

        <div className="quantity">
          <button 
            onClick={() => setQuantity((prev) => (prev === 1 ? 1: prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity(prev=>prev+1)}>
            +
          </button>
        </div>

        <button className='add'>
          <AddShoppingCartIcon /> ADD TO CART
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>

          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type : Shirt</span>
          <span>Tag: Shirt, Women, Top</span>
        </div>

        <hr />

        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
          <hr />
        </div>
      </div>

    </div>
  )
}

export default Product