import React from 'react'
import "./MythologyTemplate.css";

function MythologyTemplateCard( { secondImageUrl, godsHeader, godText, godLiElements, header, headerText  } ) {
  return (
    <>
<div className="god-section-plus-image-wrapper">
      
      <div id='firstSubImage' style={{ background: `url(${secondImageUrl})` }} className='firstSubImage'></div>
     
      
      <div className="Gods-section">
      <header>{godsHeader}</header>
      {godText}
      <button>View Collection</button>
      <h2>Popular Resources</h2>
      {godLiElements}
      </div><h1 className='GodsLabel'>{headerText}</h1>
      
    </div>
    </>
  )
}

export default MythologyTemplateCard