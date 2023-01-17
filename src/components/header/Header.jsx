import React, { useState,useEffect } from 'react'
import "./header.css"
import Hamburger from 'hamburger-react'


const Header = () => {

    const [isOpen, setOpen] = useState(false)
    const [isActive, setActive] = useState(false);
    const [headerClass, setHeaderClass] = useState("header")

    const hamburgerMenuButtonHandler = () => {
        setActive(!isActive);
    }


    useEffect(() => {
        // function to run on scroll
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            scrollY > 0 ? setHeaderClass("expand") : setHeaderClass(" ")
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, []);


  return (
    <nav className={"header " +headerClass}>
        <h1 className='brand-name'> 
            <a href="#">  <span>Pet</span>Lover </a>
        </h1>
        <div className={isActive ? "header-menu header-menu-show" : "header-menu"}>
            <ul>
                <li className='header-item '> 
                    <a href="#booking"> Booking  </a>
                </li>
                <li className='header-item '> 
                   <a href="#services"> Service </a> 
                </li>
                <li className='header-item '> 
                    <a href="#team"> Our Team </a>
                </li>
            </ul>
            <button type='button' className='header-button'> Get Quote </button>
        </div>
        <div onClick={hamburgerMenuButtonHandler} className="hamburger-menu-button">
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
    </nav>
  )
}

export default Header