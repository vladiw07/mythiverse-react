import React from 'react'
import "./MythologyTemplate.css";



function MythologyTemplate( { imageUrl, header, firstText } ) {
  return (
    <>
    <div>
    <div style={{ background: `url(${imageUrl})` }} className='imageStart'>
    <h1>{header}</h1>
        {firstText}
    </div>
    </div>
    
    
    
    </>
  )
}

export default MythologyTemplate