import React from 'react'
import './GreekOlympians.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function GreekOlympian( { title, text, image, path, display, textAlign, margin,  } ) {
  return (
    <>
            
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>    
            <olympian>
          <div style={{margin: `${margin}`, textAlign: `${textAlign}`}} className="first-olympian-flex-section">
          <header id='olympianHeaderName'>{title}</header>
          <p style={{textAlign: `${textAlign}`}}>{text}</p>
            
              <Link style={{margin: margin}} className='buttonLink' to={path}><button>View</button></Link>
            
          </div>
          <div style={{background: image, display: `${display}`} } className="olympianImage"></div>
          
            </olympian>
            </motion.div>
    </>
  )
}

export default GreekOlympian