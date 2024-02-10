import React from 'react'
import './GodTemplate.css'


function TextSectionTemplate( { header, text }) {
  return (
    <div>
        <h3>{header}</h3>
        <p>{text}</p>
    </div>
  )
}

export default TextSectionTemplate