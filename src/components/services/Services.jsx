import React from 'react'
import "./services.css"
import { FaHouseUser, FaSeedling,FaHandScissors,FaTasks,FaExclamation,FaTradeFederation} from "react-icons/fa";
import ServicesItem from './ServicesItem';

const Services = () => {
  return (
    <div id='services' className='services'>
        <h4 className='services-secondary-title'> Our Services </h4>
        <h2 className='services-title'>  <span> Premium  </span> Pet Services </h2>

        <div className='serivces-container'>
            <ServicesItem icon={FaHouseUser} title={"Pet Boarding"} text={"Diam amet eos at no eos sit lorem," + 
                "amet rebum ipsum clita stet, diam sea est magna diam eos," + 
                "rebum sit vero stet ipsum justo "}
            />
            <ServicesItem icon={FaSeedling} title={"Pet Feeding"} text={"Diam amet eos at no eos sit lorem," + 
                "amet rebum ipsum clita stet, diam sea est magna diam eos," + 
                "rebum sit vero stet ipsum justo "} 
            />
            <ServicesItem icon={FaHandScissors} title={"Pet Grooming"} text={"Diam amet eos at no eos sit lorem," + 
                "amet rebum ipsum clita stet, diam sea est magna diam eos," + 
                "rebum sit vero stet ipsum justo "} 
            />
            <ServicesItem icon={FaTasks} title={"Per Training"} text={"Diam amet eos at no eos sit lorem," + 
                "amet rebum ipsum clita stet, diam sea est magna diam eos," + 
                "rebum sit vero stet ipsum justo "} 
            />
            <ServicesItem icon={FaExclamation} title={"Pet Exercise"} text={"Diam amet eos at no eos sit lorem," + 
                "amet rebum ipsum clita stet, diam sea est magna diam eos," + 
                "rebum sit vero stet ipsum justo "} 
            />
            <ServicesItem icon={FaTradeFederation} title={"Pet Treatment"} text={"Diam amet eos at no eos sit lorem," + 
                "amet rebum ipsum clita stet, diam sea est magna diam eos," + 
                "rebum sit vero stet ipsum justo "} 
            />
        </div>
    </div>
  )
}

export default Services