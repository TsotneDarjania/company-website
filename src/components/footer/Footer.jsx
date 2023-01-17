import React from 'react'
import "./footer.css"

import { FaMap, FaMobile, FaInbox} from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-item">
            <h4 className='footer-item-title'>Get In Touch</h4>
            <p className="footer-item-text"> <span>  <FaMap /></span> 123 Street, New York, USA</p>
            <p className="footer-item-text"> <span>  <FaMobile /></span> +012 345 67890</p>
            <p className="footer-item-text"> <span>  <FaInbox /></span> info@example.com</p>
        </div>
        <div className="footer-item">
            <h4 className='footer-item-title'>Newsletter</h4>
            <input  type={"text"} placeholder="Your Name" className='footer-item-input' />
            <input  type={"email"} placeholder="Your Email" className='footer-item-input' />
            <button className='submit-newsletter'> Submit Now </button>
        </div>
        <div className="footer-item pet-lover">
            <h4 className='footer-item-title'> PetLover </h4>
            <p className='footer-item-text pet-lover-text'>
                Ipsum amet sed vero et lorem stet eos ut, 
                labore sed sed stet sea est ipsum ut. Volup amet ea sanct ipsum, 
                dolore vero lorem no duo eirmod. Eirmod amet ipsum no ipsum lorem 
                clita ut. Ut sed sit lorem ea lorem sed, amet stet 
                sit sea ea diam tempor kasd kasd. Diam nonumy etsit tempor ut sed diam sed et ea
            </p>
        </div>

        <div className='bottom-text'> © Your Site Name. All Rights Reserved </div>
    </div>
  )
}

export default Footer