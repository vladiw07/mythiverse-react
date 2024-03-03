import React from 'react'
import { Link } from 'react-router-dom'
import '../CollectionComponents/H1PlusTextSection.css'

function HeroGodTemplate( { elementText, image, path } ) {
  return (
    <>
        <Link id='link' to={path}>
            <li>
                <img src={image} alt="" />
                
                <p>{elementText}</p>
            </li>
        </Link>
    

    </>
  )
}

export default HeroGodTemplate