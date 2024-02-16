import React from 'react'
import './H1PlusTextSection.css'

function H1PlusTextSection( { title, collectionText } ) {
  return (
    <div className='H1PlusTextSection'>
        <h1>{title}</h1>
        <p>{collectionText}</p>
    </div>
  )
}

export default H1PlusTextSection