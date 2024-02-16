import React from 'react'
import "./MythologyTemplate.css";
import { Link } from 'react-router-dom';

function MythologyTemplateCard( {displayState, secondImageUrl, godsHeader, godText, godLiElements, header, headerText, collection  } ) {
  return (
    <>
<div className="god-section-plus-image-wrapper">
      
      <div id='firstSubImage' style={{ background: `url(${secondImageUrl})` }} className='firstSubImage'></div>
     
      
      <div className="Gods-section">
      <header>{godsHeader}</header>
      {godText}
      <Link style={{display: displayState}} to={collection}><button>View Collection</button></Link>
      <h2>Popular Resources</h2>
      {godLiElements}
      </div><h1 className='GodsLabel'>{headerText}</h1>
      
    </div>
    </>
  )
}

export default MythologyTemplateCard