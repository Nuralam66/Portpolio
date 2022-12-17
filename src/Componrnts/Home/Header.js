import React from 'react';
import img from '../../image/logo.webp';
import '../home-style/Header.css'

const Header = () => {
    return (
      <div className='main'>
          <div className='header-container'>
             <div className='img-container'>
                 <img src={img} alt="logo" srcset="" />
             </div>
            <div>
                <nav>
                    <ul>
                        <li> <a href="/#">Home</a> </li>
                        <li> <a href="/"> Service</a></li>
                        <li> <a href="/">Blog</a></li>
                        <li> <a href="/">Page</a></li>
                        <li> <a href="/">Content</a></li>
                    </ul>
                </nav>
            </div>
              <div>
                <button className="btn">Hire Me</button>
             </div>
         </div>
      </div>
    );
};

export default Header;