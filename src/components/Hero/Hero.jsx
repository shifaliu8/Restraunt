import React from 'react';
import './Hero.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Hero = () => {
  return (
    <section id="home" className='hero-wrapper'>
        <div className='hero-container'>
            
            <div className='hero-left'>
                <div className='hero-title'>
                    <h1>Your Favourite Food<br/>Delivered Hot &<br/>Fresh</h1>
                </div>
                <div className='hero-des'>
                    <h3>Healthy switcher chefs do all the prep work, like <br/>peeling, chopping & marinating, so you can cook<br/>a fresh food.</h3>
                </div>
                <div className='Button'>Order Now <AiOutlineArrowRight size={20} color="white" /></div>
            </div>

            
            <div className='hero-right'>
                <div className='image-container'>
                    <img src="./Hero.png" alt="Food Image" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
