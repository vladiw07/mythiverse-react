import React from 'react'
import { Link } from 'react-router-dom'
import MythologyTemplate from '../Mythologies/MythologyTemplate'

import egyptianMythology from '../../../components/pages/Mythologies/images/egyptianMythology.jpg'

import egyptianGodsImage from '../../../components/pages/Mythologies/images/egyptianGodsImage.avif'
import transition from '../../../Transition/transition'


function EgyptianMythologyPage() {
  return (
    <>
    <MythologyTemplate collection='/egyptianGodsPage'
      imageUrl={egyptianMythology} 
      secondImageUrl={egyptianGodsImage}
      header={'Ultimate Guide to Egyptian Mythology'} 
      topTextColor={'black'}
      firstText={<p>Egyptian mythology focuses on the fundamental order of the universe, explaining the patterns of the natural world through divine actions. Of particular importance are the creation myths, the constant struggle against disorder, and the cycles of death and rebirth.</p>} 
      godsHeader={'Egyptian Gods'}
      godText={<p>Egyptian gods and goddesses were incarnations of both natural phenomena, such as the sun, and social phenomena, like knowledge. Egypt itself was ruled by a pharaoh who claimed to be the gods’ representative on earth, and who acted as a mediator between mankind and the divine.</p>}
      godLiElements={<ul className="godsUl"><li><Link to='/anubis' className="GodLink">Anubis</Link></li><li><Link to='/ra' className="GodLink">Ra</Link></li><li><Link to='/nephthys' className="GodLink">Nephthys</Link></li><li><Link to='/osiris' className="GodLink">Osiris</Link></li><li><Link to='/isis' className="GodLink">Isis</Link></li><li><Link to='/horus' className="GodLink">Horus</Link></li></ul>} />
    </>
  )
}

export default transition(EgyptianMythologyPage)