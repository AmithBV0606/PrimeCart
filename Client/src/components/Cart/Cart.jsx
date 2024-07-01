import React from 'react'
import './Cart.scss'
import { useSelector, useDispatch } from "react-redux"
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest";

// Icons 
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
    const products = useSelector(state=>state.cart.products)
    const dispatch = useDispatch()

    const totalPrice = () => {
        let total = 0;

        products.forEach(item => {
            total += item.quantity * item.price
        });

        return total.toFixed(2)
    }

    const stripePromise = loadStripe(
        'pk_test_51PXMoMC9hYStAMMZZUuwdAkTZ4d9NsvzYnLKYgd22gQqgR4nOm0nq4m6pe6QdmKCjdccFyr0Nwqds1TMOc8LqNPW00LQzkEboq'
    );

    const handlePayments = async () => {
        try {
            const stripe = await stripePromise;

            const res = await makeRequest.post("/orders", {
                products,
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });

        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>

        {products?.map((item) => (
                <div className='Item' key={item.id}>
                    <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.img} alt="" />

                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 75)}</p>
                        <div className="price">
                            {item.quantity} X ${item.price}
                        </div>
                    </div>

                    <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
                </div>
        ))}

        <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>

        <button onClick={handlePayments}>PROCEED TO CHECKOUT</button>

        <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart