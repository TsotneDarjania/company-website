import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <nav className='header'>
        <h1 className='brand-name'> <span>Pet</span>Lover</h1>
        <div className='header-menu'>
            <ul>
                <li className='header-item '> About </li>
                <li className='header-item '> Service </li>
                <li className='header-item '> Price </li>
                <li className='header-item '> Booking </li>
                <li className='header-item '> Contact </li>
            </ul>
            <button className='header-button'> Get Quote </button>
        </div>
    </nav>
  )
}

export default Header