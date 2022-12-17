import React from 'react';
import '../home-style/Exparince.css'
import image1 from '../../image/counterup-icon-1.webp'
import image2 from '../../image/counterup-icon-2.webp'
import image3 from '../../image/counterup-icon-3.webp'

const Exparince = () => {
    return (
        <div className='main-container'>
            <div className='exparince-container'>
                <div  className='image-container'>
                    <img src={image1} alt="" srcset="" />
                </div>
                <div className='data-container'>
                    <h1> 258+</h1>
                    <h4> Happy Clients</h4>
                </div>
            </div>
            <div className='exparince-container'>
                <div  className='image-container'>
                    <img src={image2} alt="" srcset="" />
                </div>
                <div className='data-container'>
                    <h1> 590K</h1>
                    <h4> Project Complete</h4>
                </div>
            </div>
            <div className='exparince-container'>
                <div className='image-container'>
                    <img src={image3} alt="" srcset="" />
                </div>
                <div className='data-container'>
                    <h1> 28+</h1>
                    <h4> Years of Experience</h4>
                </div>
            </div>

            
        </div>
    );
};

export default Exparince;