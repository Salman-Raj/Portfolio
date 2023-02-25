import React from 'react';
import './index.css'
// import { useState } from 'react';



const Header = () => {
    // const [Mode,setMode] = useState("light")


    // const toggleMode = () => {
    //     setMode(Mode === "light" ? "dark" : "light");
    //   };

    return (
        <header className="container" >
            <nav >   
            <a href='#about'><h2 className="logo">Salman<span> Raj</span></h2></a>
        <ul className="navbar">
            <li>
            <a href="#about" className="">
                About
            </a>
            </li>

            <li>
            <a href="#projects" className="">
                Projects
            </a>
            </li>

            <li>
            <a href="#qualifications" className="">
                Qualifications
            </a>
            </li>

            {/* <li>
            <a href="#skills" className="">
                Skills
            </a> 
            </li> */}

            <li>
            <a href="#contact">
                Contact
            </a>
            </li>
            {/* <button onClick={toggleMode}>Toggle Mode</button> */}
        </ul>
        </nav>
       
     
    </header>
    );
};

export default Header;