import React from 'react'
import "./booking.css"
import { FaHouseUser, FaSeedling, FaHandScissors, FaTasks} from "react-icons/fa";


const Booking = () => {
  return (
    <div id='booking' className='booking'>
        
        <div className='booking-form'>
            <input  type={"text"} placeholder="Your Name" className='booking-input' />
            <input  type={"email"} placeholder="Your Email" className='booking-input' />
            <input  type={"date"} placeholder="Your Email" className='booking-input' />
            <select className='booking-input'>
                <option value="A">Selection A</option>
                <option value="B">Selection B</option>
                <option value="C">Selection C</option>
            </select>
            <button className='booking-button'> Book Now </button>
        </div>

        <div className='booking-info'>
            <h4 className='booking-info-secondary-title'> Going for a vacation? </h4>
            <h2 className='booking-info-title'> <span> Book For </span> Your Pet </h2>

            <p className='booking-info-text'>
                Labore vero lorem eos sed aliquy ipsum aliquy sed. 
                Vero dolore dolore takima ipsum lorem rebum
            </p>

            <div className='booking-properties'>
                <div className='booking-item'>
                    <FaHouseUser />
                    <label className='booking-properties-title'> Pet Boarding </label>
                    <p className='booking-properties-text'>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
                </div>
                <div className='booking-item'>
                    <FaSeedling />
                    <label className='booking-properties-title'> Pet Feeding </label>
                    <p className='booking-properties-text'>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
                </div>
                <div className='booking-item'>
                    <FaHandScissors />
                    <label className='booking-properties-title'> Pet Grooming </label>
                    <p className='booking-properties-text'>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
                </div>
                <div className='booking-item'>
                    <FaTasks />
                    <label className='booking-properties-title'> Pet Tranning </label>
                    <p className='booking-properties-text'>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Booking