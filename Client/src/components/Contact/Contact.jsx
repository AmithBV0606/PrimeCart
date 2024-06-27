import React from 'react'
import "../Contact/Contact.scss"

// Icons 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>be in touch with us : </span>

            <div className="mail">
                <input type="text" name="" id="" placeholder='Enter your e-mail...'/>
                <button>Join us</button>
            </div>

            <div className="icons">
                <FacebookIcon />
                <InstagramIcon />
                <XIcon />
                <GoogleIcon />
            </div>
        </div>
    </div>
  )
}

export default Contact