import React from 'react';
import '../home-style/Skills.css'

const Skills = () => {
    return (
        <div className='skills-container'>
            <div className='skill-text'>
                <h2> <span>||</span> Special Skills </h2>
                <h1> My Special Skill</h1>
                <h1> Field Here</h1>
                <button> Get Resume</button>
            </div>
            <div className='skill-part'>
                <div className='skills'>
                    <div className='skills-value'>
                    <p>Communication</p>
                    <p>75%</p>
                    </div>
                    <div className='skillbar'></div>
                </div>
                <div className='skills'>
                    <div className='skills-value'>
                    <p>Leadership</p>
                    <p>70%</p>
                    </div>
                    <div className='skillbar'></div>
                </div>
                <div className='skills'>
                    <div className='skills-value'>
                    <p>Teamwork</p>
                    <p>90%</p>
                    </div>
                    <div className='skillbar'></div>
                </div>
                <div className='skills'>
                    <div className='skills-value'>
                    <p>Flexibility</p>
                    <p>80%</p>
                    </div>
                    <div className='skillbar'></div>
                </div>

               
            </div>
        </div>
    );
};

export default Skills;