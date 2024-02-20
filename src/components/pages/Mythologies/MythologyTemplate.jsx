import React from 'react'
import "./MythologyTemplate.css";
import MythologyTemplateCard from './MythologyTemplateCard';



function MythologyTemplate( { imageUrl, displayState, secondImageUrl,collection,  header, headerText, topTextColor,  firstText, godsHeader, godText, godLiElements } ) {
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
    
    
    <MythologyTemplateCard displayState={displayState} collection={collection} godLiElements={godLiElements} godText={godText} secondImageUrl={secondImageUrl} headerText={godsHeader} />

    
    
    
    
    </div>

    
   

    </>
  )
}

export default MythologyTemplate