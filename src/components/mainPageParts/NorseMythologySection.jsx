import React from 'react'
import './NorseMythologySection.css'
import { Link } from 'react-router-dom'

function NorseMythologySection() {
  return (
    <div>
        <ul className='norseMythologyUl'>

        <Link  to='/odin'><li id='norseGod1'>
            <header>Odin</header>
        </li></Link>
        

        <Link to='/loki'><li id='norseGod2'>
            <header>Loki</header>
        </li></Link>
        

        <Link to='/frigg'><li id='norseGod3'>
            <header>Frigg</header>
        </li></Link>
        

        <Link to='/freya'><li id='norseGod4'>
            <header>Freya</header>
        </li></Link>
        

        <Link to='/thor'><li id='norseGod5'>
            <header>Thor</header>
        </li></Link>

        <Link to='/baldur'><li id='norseGod6'>
            <header>Baldur</header>
        </li></Link>
        

        </ul>
    </div>
  )
}

export default NorseMythologySection