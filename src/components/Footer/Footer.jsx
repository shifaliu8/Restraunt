import React from 'react'
import './Footer.css'
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='f-wrapper'>
    <div className='flexCenter paddings innerWidth f-container'>
        <div className='f-left'>
            <div className='flexColStart f-title'>
                <h1 className='primaryText'>FOODIE</h1>
                <div className="f-icons">
                <FaTwitter className="icon" />
                <FaLinkedin className="icon" />
                <FaYoutube className="icon" />
                <FaFacebook className="icon" />
                </div>
            </div>
        </div>
        <div className='f-middle'>
            <a href='#'>Quality</a>
            <a href='#'>Help</a>
            <a href='#'>Careers</a>
            <a href='#'>Testimonial</a>
            <a href='#'>Support</a>
            <a href='#'>Work</a>
        </div>
        <div className='f-right1'>
            <a href='#'>+91 90876654332</a>
            <a href='#'>hellofood@gmail.com</a>
            <a href='#'>callfood@gmail.com</a>
            <a href='#'>foodie@gmail.com</a>
        </div>
        <div className='f-right2'>
            <a href='#'>Terms & Condition</a>
            <a href='#'>Privacy Policies</a>
        </div>
    </div>
    </section>
  )
}

export default Footer