import React from 'react'
import './GreekOlympians.css'
import { Link } from 'react-router-dom'

function GreekOlympian( { title, text, image, path, display, textAlign, margin, } ) {
  return (
    <>
            <olympian>
          <div style={{margin: `${margin}`, textAlign: `${textAlign}`}} className="first-olympian-flex-section">
          <header id='olympianHeaderName'>{title}</header>
          <p style={{textAlign: `${textAlign}`}}>{text}</p>
            
              <Link style={{margin: margin}} className='buttonLink' to={path}><button>View</button></Link>
            
          </div>
          <div style={{background: image, display: `${display}`} } className="olympianImage"></div>
          
            </olympian>
            
    </>
  )
}

export default GreekOlympian