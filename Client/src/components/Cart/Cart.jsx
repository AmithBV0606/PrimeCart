import React from 'react'
import '../Cart/Cart.scss'

// Icons 
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
    const data = [
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=100",
            title:"Long Sleev Graphic T-shirt",
            isNew: true,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, hic.",
            oldPrice: 10,
            price:8
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=100",
            title:"Long Sleev Graphic T-shirt",
            isNew: true,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, hic.",
            oldPrice: 10,
            price:8
        },
    ]

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>

        {data.map((item) => (
                <div className='Item' key={item.id}>
                    <img src={item.img} alt="" />

                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 75)}</p>
                        <div className="price">
                            1 X ${item.price}
                        </div>
                    </div>

                    <DeleteOutlinedIcon className='delete' />
                </div>
        ))}

        <div className="total">
            <span>SUBTOTAL</span>
            <span>$80</span>
        </div>

        <button>PROCEED TO CHECKOUT</button>

        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart