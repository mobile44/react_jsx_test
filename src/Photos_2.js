import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import Data from './Data';

const Photos = ({id, image, name, imageIndex, index}) => {
    
    let position = "nextSlide";
    if(imageIndex === index){
        position = 'activeSlide'
    }
    if(imageIndex === index - 1 || (index === 0 && imageIndex === Data.length - 1)){
        position = 'lastSlide'
    }
    return(
        <article className={position} key={id}>
                <img src={image} alt={name} className="photoImg" />
                <h4>{name}</h4>
                <FaQuoteRight className="icon" />
        </article>
        )
}



export default Photos;