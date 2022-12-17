import React from 'react';
import '../home-style/Service.css'
import img1 from '../../image/service-icon-1.webp'
import img2 from '../../image/service-icon-2.webp'
import img3 from '../../image/service-icon-3.webp'

const Searvice = () => {
    return (
        <div className='service-container'>
            <div className='text-container'>
            <h2> <span>||</span> My Service</h2>
                <h1> Service Provide For My Clients.</h1>
            </div>
            <div className='card-container'>
                <div className='card'>
                 <div>
                    <img src={img1} alt="" srcset="" />
                 </div>
                 <h2> UI/UX Design</h2>
                 <p>Landing Page</p>
                 <p>User Flow</p>
                 <p> Wireframing</p>
                 <p>Prototyping</p>
                 <p>Mobile App Design</p>
                </div>
                <div className='card'>
                    <div>
                        <img src={img2} alt="" srcset="" />
                    </div>
                    <h2> Development</h2>
                    <p>HTML/CSS</p>
                    <p>Javascript</p>
                    <p>Animation</p>
                    <p>WordPress</p>
                    <p>React</p>
                </div>
                <div className='card'>
                    <div>
                        <img src={img3} alt="" srcset="" />
                    </div>
                    <h2> Illustration</h2>
                    <p>Character Design</p>
                    <p> Icon Set</p>
                    <p>Illustration Guide</p>
                    <p>Illustration Set</p>
                    <p> Motion Graphic</p>
                </div>
            </div>

               
            
        </div>
    );
};

export default Searvice;