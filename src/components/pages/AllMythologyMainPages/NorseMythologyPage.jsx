import React from 'react'
import { Link } from 'react-router-dom'
import MythologyTemplate from '../Mythologies/MythologyTemplate'
import norseMythology from '../../../components/pages/Mythologies/images/norseMythology.jpg'

import secondNorseGodsImage from '../../../components/pages/Mythologies/images/norseGodsImage.avif'


function NorseMythologyPage() {
  return (
    <>
    <MythologyTemplate 
      imageUrl={norseMythology} 
      secondImageUrl={secondNorseGodsImage}
      header={'Ultimate Guide to Norse Mythology'} 
      topTextColor={'white'}
      firstText={<p>Norse mythology is the compilation of the stories, religious practices, and myths of the ancient Nordic people. These texts span a period of time beginning in Norse paganism and continuing through the medieval era, during which most of Scandinavia converted to Christianity.</p>} 
      godsHeader={'Norse Gods'}
      godText={<p>The Norse gods and goddesses are the array of deities honored by ancient Nordic worshipers. They primarily came from two different tribes, the Aesir and the Vanir, but were united in their efforts to fight the jötnar, a tribe of giants dwelling in another realm of the world tree Yggdrasil.</p>}
      godLiElements={<ul className="godsUl"><li><Link to='/odin' className="GodLink">Odin</Link></li><li><Link to='/loki' className="GodLink">Loki</Link></li><li><Link to='/frigg' className="GodLink">Frigg</Link></li><li><Link to='/freya' className="GodLink">Freya</Link></li><li><Link to='/thor' className="GodLink">Thor</Link></li><li><Link to='/baldur' className="GodLink">Baldur</Link></li></ul>} />
    </>
  )
}

export default NorseMythologyPage