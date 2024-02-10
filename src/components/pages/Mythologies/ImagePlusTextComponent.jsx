import React from 'react';
import './GodTemplate.css';


function ImagePlusTextComponent({ image, text, boxShadow }) {
  return (
    <div className='imageWithTextWrapper'>
    
    <img style={{boxShadow:boxShadow}} className='imageWithText' src={image} alt="" />
      <p>{text}</p>
      </div>
  );
}

export default ImagePlusTextComponent;
