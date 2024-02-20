import React from 'react'
import { Link } from 'react-router-dom'
import celticMythology from '../../../components/pages/Mythologies/images/celticMythology.jpg'
import celticGodsImage from '../../../components/pages/Mythologies/images/celticGodsImage.avif'
import MythologyTemplate from '../Mythologies/MythologyTemplate'

function CelticMythologyPage() {
  return (
    <>
    <MythologyTemplate
      collection='/celticGodsPage'
      imageUrl={celticMythology} 
      secondImageUrl={celticGodsImage}
      header={'Ultimate Guide to Celtic Mythology'} 
      topTextColor={'white'}
      firstText={<p>Celtic mythology is the collection of stories and folklore from various ancient Celtic cultures like the Irish, the Welsh, and the Gauls. Many of these myths were suppressed by Roman conquerors, with their first widespread recordings dating from the early medieval period.</p>} 
      godsHeader={'Celtic Gods'}
      godText={<p>The Celtic gods and goddesses are a vast group of deities who were worshipped by the ancient Celtic tribes. Their names and attributes varied between languages and locations, with some deities worshipped by all tribes while others were specific to a particular region or people.</p>}
      godLiElements={<ul className="godsUl"><li><Link to="/morrigan" className="GodLink">Morrigan</Link></li><li><Link to="/cuChulainn" className="GodLink">Cu Chulainn</Link></li><li><Link to="/brigid" className="GodLink">Brigid</Link></li><li><Link to="/dagda" className="GodLink">Dagda</Link></li><li><Link to="/lugh" className="GodLink">Lugh</Link></li><li><Link to="/cernunnos" className="GodLink">Cernunnos</Link></li></ul>} />
    </>
  )
}

export default CelticMythologyPage