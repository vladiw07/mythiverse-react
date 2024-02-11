import React from 'react'
import './GreekOlympians.css'

function GreekOlympian( { title, text, image } ) {
  return (
    <>
            <olympian>
          <div className="first-olympian-flex-section">
          <header>{title}</header>
          <p>{text}</p>
          <button>View</button>
          
          </div>
          <div style={{background: image}} className="olympianImage"></div>
          
            </olympian>
            
    </>
  )
}

export default GreekOlympian