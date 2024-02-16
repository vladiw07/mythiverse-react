import React from 'react'
import { Link } from 'react-router-dom'

function HeroGodTemplate( { elementText, image } ) {
  return (
    <>
        <Link id='link'>
            <li>
                <img src={image} alt="" />
                
                <p>{elementText}</p>
            </li>
        </Link>
    

    </>
  )
}

export default HeroGodTemplate