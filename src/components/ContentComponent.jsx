import React, { useState } from 'react';
import './ContentComponent.css';

function ContentComponent({ contentLi }) {
  const [contentVariable, setContentVariable] = useState(false);
  
  const toggleContent = () => {
    setContentVariable(!contentVariable);
    const h1Element = document.querySelector('h5');
    h1Element.classList.toggle('rotate'); 
  };

  const scrollToContent = (index) => {
    const contentElement = document.getElementById(`content_${index}`);
    const yOffset = -100;
    const y = contentElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <ul className='ContentUl'>
        <h5 onClick={toggleContent}>Contents</h5>
        {contentLi.map((item, index) => (
          <li key={index} className={contentVariable ? 'visible' : ''} onClick={() => scrollToContent(index)}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContentComponent;
