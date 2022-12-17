import React from 'react';
import image from '../../image/logo.webp'
import '../home-style/Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-text'>
                <h4> © 2021 <span>Lendex</span> Made with love by <span>HasThemes</span></h4>
            </div>
            <div className='footer-image'>
                <img src={image} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Footer;