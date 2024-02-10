import React from 'react';
import './GodTemplate.css';


function ImagePlusTextComponent({ image, text }) {
  return (
    <div className='imageWithTextWrapper'>
    
    <img className='imageWithText' src={image} alt="" />
      <p>{text}</p>
      </div>
  );
}

export default ImagePlusTextComponent;
