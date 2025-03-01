import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className='a-wrapper'>
        <div className='a-background'></div>
        <div className='a-container'>

            <div className='a-left'>
                <img src="./About us.png" alt="about" />
            </div>

            <div className='a-right'>
                <div className='a-title'>
                    <p>About</p>
                    <h1>Food Is An Important<br/> Part Of A Balanced<br/> Diet</h1>
                </div>
                <div className='a-des'>
                    <p className='a-des1'>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
                    <p className='a-des2'>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui.</p>
                </div>
                <div className='Button'>Learn More</div>
            </div>

        </div>
    </section>
  );
};

export default About;
