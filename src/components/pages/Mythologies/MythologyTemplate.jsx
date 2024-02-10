import React from 'react'
import "./MythologyTemplate.css";



function MythologyTemplate( { imageUrl, secondImageUrl, header, firstText, godsHeader, godText, godLiElements } ) {
  return (
    <>
    <div>
    <div style={{ background: `url(${imageUrl})` }} className='imageStart'>
    <h1>{header}</h1>
        {firstText}
        <button className="discover-button">Discover More</button>
    </div>
    

    <div className="god-section-plus-image-wrapper">
      
      <div style={{ background: `url(${secondImageUrl})` }} className='firstSubImage'></div>
     
      
    <div className="Gods-section">
      <header>{godsHeader}</header>
      {godText}
      <button>View Collection</button>
      <h2>Popular Resources</h2>
      {godLiElements}
      </div>
    </div>
    </div>
   
    
    
    </>
  )
}

export default MythologyTemplate