import React from 'react'
import './work.css'

const Work = () => {
  return (
    <section id="Work" className='w-wrapper'>
        <div className='Paddings innerWidth w-container'>
            <div className='flexCenter w-title'>
            <p className='orangeText'>Work</p>
            </div>
            <div className='flexCenter w-heading'>
                <h1 className='primaryText'>How It Works</h1>
            </div>
            <div className='flexCenter w-des'>
                <p className='secondaryText'>Lorem ipsum dolor sit amet consectetur. Non tincidunt<br/>magna non et elit. Dolor  turpis molestie dui<br/>magnis facilisis at fringilla quam. </p>
            </div>
            <div className='flexCenter  w-cards'>
            <div className='w-card'>
            <img src="./icon1.png" alt="Step 1" width={90}/>
            <h3 className='primaryText'>Pick A meal</h3>
            <p className='secondaryText'>Lorem ipsum dolor sit amet<br/> consectetur. Maecenas orci et<br/> sagittis duis elementum<br/> interdum facilisi bibendum..</p>
             </div>
             <div className='w-card'>
            <img src="./icon3.png" alt="Step 2" width={90} />
            <h3 className='primaryText'>Choose How often</h3>
            <p className='secondaryText'>Lorem ipsum dolor sit amet<br/> consectetur. Maecenas orci et<br/> sagittis duis elementum<br/> interdum facilisi bibendum..</p>
             </div>
             <div className='w-card'>
            <img src="./icon2.png" alt="Step 3" width={90} />
            <h3 className='primaryText'>Fast Deliveries</h3>
            <p className='secondaryText'>Lorem ipsum dolor sit amet<br/> consectetur. Maecenas orci et<br/> sagittis duis elementum<br/> interdum facilisi bibendum..</p>
             </div>

            </div>
            </div>
        </section>
    
  )
}

export default Work