import React from 'react';
import './index.css'




const About = () => {
    return (
        
            <section id="about" className='about'>
                <div className="about-container">
                    <div className='about-information'>
                        <h1 className="name">
                            Hi, I'm Salman.
                            <br className="" />I love to build amazing apps.
                        </h1>

                        <p className="" col="2">
                            I am an aspiring Full Stack Web stack developer with excellent Problem Solving Skills and ability to perform well in a team.
                            <br/>
                            Passionate about Coding and enjoy building Web Applications
                        </p>

                        </div>
                        
                        <div className='image-container'>

                            <img src='https://res.cloudinary.com/dqvaejele/image/upload/v1672930068/bjb_u2tsfn.jpg' alt='myimage' className='salman'/>

                        </div>

                </div>
            </section>
            
       
    );
};

export default About;