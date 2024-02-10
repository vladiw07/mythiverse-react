import React from 'react'
import "./MythologyTemplate.css";



function MythologyTemplate( { imageUrl, secondImageUrl, header, topTextColor,  firstText, godsHeader, godText, godLiElements } ) {
  const scrollToContent = () => {
    const content = document.getElementById('firstSubImage'); 
    content.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <div>
    <div style={{ color:topTextColor, background: `url(${imageUrl})` }} className='imageStart'>
    <h1>{header}</h1>
    <div style={{ color:topTextColor}}>
        {firstText}
        </div>
        <button onClick={scrollToContent} className="discover-button">Discover More</button>
    </div>
    

    <div className="god-section-plus-image-wrapper">
      
      <div id='firstSubImage' style={{ background: `url(${secondImageUrl})` }} className='firstSubImage'></div>
     
      
    <div className="Gods-section">
      <header>{godsHeader}</header>
      {godText}
      <button>View Collection</button>
      <h2>Popular Resources</h2>
      {godLiElements}
      </div>
    </div>
    <div className="border-bottom-div">.</div>
    </div>
   
    
    
    </>
  )
}

export default MythologyTemplate