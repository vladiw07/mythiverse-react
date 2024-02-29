import React from 'react'
import "./AllMythologiesSection.css"


function AllMythologiesSection() {
  return (
    <>
    <div id='headers'>
    <h2>Spotlight</h2>
    <h1>Meet the Greeks</h1>
    <hr />
    </div>
      <ul className='mythologiesUl'>
        <li>
        <div className="img"></div>
        <p id='collectiontext'>collection</p>
        <header>Greek Olympians</header>
        <p>The primary deities of the Greek pantheon, who ruled from Mount Olympus</p>
        <button>View</button>
        <hr />
        <p className="featuredP">featured</p>
        </li>
        
        <li>
        <div className="img"></div>
        <p id='collectiontext'>collection</p>
        <header>Greek Heroes</header>
        <p>Notable or superhuman mortals from Greek mythology</p>
        <button>View</button>
        <hr />
        <p className="featuredP">featured</p>
        </li>
        
        <li>
        <div className="img"></div>
        <p id='collectiontext'>collection</p>
        <header>Greek Creatures</header>
        <p>Legendary beasts, animals, and humanoids of ancient Greek mythology</p>
        <button>View</button>
        <hr />
        <p className="featuredP">featured</p>
        </li>

        <li>
        <div className="img"></div>
        <p id='collectiontext'>collection</p>
        <header>Greek Titans</header>
        <p>The generation of Greek gods who directly preceded the Olympians</p>
        <button>View</button>
        <hr />
        <p className="featuredP">featured</p>
        </li>
       
        

      </ul>
    </>
  )
}

export default AllMythologiesSection