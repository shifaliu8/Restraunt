import React from 'react'
import { FaStar } from 'react-icons/fa';
import './Testimonials.css'

const Testimonial = () => {
  return (
    <section id="testimonial" className='t-wrapper'>
        < div className='Paddings innerWidth t-container'>
            <div className='flexCenter t-title'>
            <p className='orangeText'>Testimonial</p>
            </div>
            <div className='flexCenter t-heading'>
                <h1 className='primaryText'>What They Are saying</h1>
            </div>
            <div className='flexCenter t-des'>
                <p className='secondaryText'>Lorem ipsum dolor sit amet consectetur. Non tincidunt<br/>magna non et elit. Dolor  turpis molestie dui<br/>magnis facilisis at fringilla quam. </p>
            </div>
            <div className='t-cards'>
                <div className='t-card'>
            <img src="./Ellipse 1.png" alt="Step 1" width={100}/>
            <p className='secondaryText'>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum..</p>
            <div className='stars'>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> 
            </div>
            <h3 className='primaryText'>John Doe</h3>
            
            </div>
             </div>
             
            
            </div>
        </section>
  )
}

export default Testimonial