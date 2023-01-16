import React from 'react'
import "./servicesItem.css";

const ServicesItem = (props) => {

    const {icon,title,text} = props;

  return (
    <div className="services-container-item">
        {icon()}
        <h2 className='services-container-item-title'> {title} </h2>
        <p className='services-container-item-text'> 
            {text}
        </p>
        <div className='read-more'> read more </div>
    </div>
  )
}

export default ServicesItem