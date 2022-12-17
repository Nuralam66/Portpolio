import React from 'react';
import image from '../../image/remove.png'
import '../home-style/Banner.css'

const Banner = () => {
    return (
     
          <div className='banner-container'>
           <div className='info-container'>
            <h2>Hello I'm</h2>
            <h1>Nur Alam</h1>
            <p>A Forntend Web Devloper in most popular frameWork React in Javascript</p>

            <button>Get Resume</button>
           </div>
           <div>
            <img src={image} alt="photos" srcset="" />
           </div>
        </div>
      
    );
};

export default Banner;