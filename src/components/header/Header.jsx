import React, { useState } from 'react'
import "./header.css"
import Hamburger from 'hamburger-react'

const Header = () => {

    const [isOpen, setOpen] = useState(false)
    const [isActive, setActive] = useState(false);

    const hamburgerMenuButtonHandler = () => {
        setActive(!isActive);
    }


  return (
    <nav className='header'>
        <h1 className='brand-name'> <span>Pet</span>Lover</h1>
        <div className={isActive ? "header-menu header-menu-show" : "header-menu"}>
            <ul>
                <li className='header-item '> About </li>
                <li className='header-item '> Service </li>
                <li className='header-item '> Price </li>
                <li className='header-item '> Booking </li>
                <li className='header-item '> Contact </li>
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