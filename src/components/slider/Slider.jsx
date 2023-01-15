import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./slider.css";



import carousel_image_1 from "../images/sliderImages/carousel-1.jpg"
import carousel_image_2 from "../images/sliderImages/carousel-2.jpg"
import carousel_image_3 from "../images/sliderImages/carousel-3.jpg"



const Slider = () => {

    const imageClasses = {
        left : "slider-item-left",
        center : "slider-item-center",
        right : "slider-item-right",
    }

    const [sliderIndex,setSlierIndex] = useState(1)

    
    function getSliderImages(index){

        let leftIndex = index - 1 < 0 ? 2 : index - 1;
        if(leftIndex > 2) leftIndex  = 0;

        let rightInex = index + 1 > 2 ? 0 : index + 1;
        if(rightInex < 0) rightInex = 2

        return [
            <div key={"left"} className={"slider-item "+Object.values(imageClasses)[leftIndex]}>
                <img src={carousel_image_1} alt="" className='slider-image' />,
                <h2 className='slider-title'> Maine Coon Cat. Photo: Skeeze, Pixabay </h2>
                <p className='slider-text'> 
                    The Siamese cat is the pinnacle of sophistication as they 
                    look like they are all dressed up for a masquerade ball. 
                    If you live in an apartment or house that doesn’t allow 
                    for pets good luck trying to hide a 
                    Siamese as they are very talkative and opinionated
                </p>
            </div>,
            <div key={"center"} className={"slider-item "+Object.values(imageClasses)[index]}>
                <img src={carousel_image_2} alt="" className='slider-image' />,
                <h2 className='slider-title'> 20 most popular cat </h2>
                <p className='slider-text'> 
                    To give an insight into people’s 
                    personal preference we have come up with the 20 most popular cat breeds. 
                    The information to form this list came from many different vet clinics and 
                    their numbers for the amount of cats 
                    that were taken in to either be adopted or registered. 
                </p>
            </div>,
            <div key={"right"} className={"slider-item "+Object.values(imageClasses)[rightInex]}>
                <img src={carousel_image_3} alt="" className='slider-image' />,
                <h2 className='slider-title'> Abyssinian Cats. Photo: Tsapenkodg, Pixabay </h2>
                <p className='slider-text'> 
                    While most cats love to sleep and laze around, the Abyssinian lives 
                    life to the max. They climb higher, 
                    jump further and play harder than their other brethren
                </p>
            </div>,
        ]
    }
    
  return (
    <div className='slider'>

        {getSliderImages(sliderIndex)}

        <div className="slider-buttons">
            <div onClick={() => { setSlierIndex((sliderIndex + (-1) + 3) % 3) }}  className="slider-arrow-button"> 
                <FaArrowLeft />
            </div>
            <div onClick={ () => { setSlierIndex((sliderIndex + (+1) + 3) % 3) }} className="slider-arrow-button"> 
                <FaArrowRight />
            </div>
        </div>
    </div>
  )
}

export default Slider

