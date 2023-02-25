import React from 'react';
import './index.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faInstagram, faGithub ,faLinkedin} from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
    return (
        <section id="contact" className="contact">
               <div className='footer-container'>
                    <div className='mydetails'>
                        <h1 className='email'>Email</h1>
                        <a href='https://mail.google.com/mail/u/0/#inbox'>
                            <p className='mailid'>msraj9664@gmail.com</p>
                        </a>     
                    </div>

                    <div className='mydetails'>
                        <h1 className='phone'>Phone</h1>
                        <p className='number'>7287878768</p>
                             
                    </div>

                        <div className='social-icons'>
                            <a href="https://www.linkedin.com/in/makireddy-salman-raju-3a465021a/">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="linkedin-icon" />
                            </a>

                            <a href="https://github.com/Salman-Raj">
                                <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
                            </a>

                            <a href="https://www.instagram.com/makireddy.salman_raj/">
                                <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram-icon" />
                            </a>

                        </div>
               </div>
        </section>
    );
};

export default Contact;