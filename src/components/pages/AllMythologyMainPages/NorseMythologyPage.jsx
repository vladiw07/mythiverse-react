import React from 'react'
import { Link } from 'react-router-dom'
import MythologyTemplate from '../Mythologies/MythologyTemplate'
import norseMythology from '../../../components/pages/Mythologies/images/norseMythology.jpg'

import secondNorseGodsImage from '../../../components/pages/Mythologies/images/norseGodsImage.avif'
import norseCosmologyImage from './images/norseCosmologyImage.avif'
import MythologyTemplateCard from '../Mythologies/MythologyTemplateCard'


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


        <MythologyTemplateCard displayState='none'
        godLiElements={<ul className="godsUl"><li><Link className="GodLink">Yggdrasil</Link></li><li><Link className="GodLink">Valhalla</Link></li><li><Link className="GodLink">Hlidskjalf</Link></li><li><Link className="GodLink">Nine Realms</Link></li><li><Link className="GodLink">Ginnungagap</Link></li><li><Link className="GodLink">Bifrost</Link></li></ul>} 
        secondImageUrl={norseCosmologyImage} 
        godText={<p>Norse cosmology focuses on how the Norse people perceived the cosmos and their place in it. It includes their creation myths, the nine realms of the universe, and their perception of the inevitable end of both humanity and the gods in the form of Ragnarok.</p>} 
        headerText='Norse Cosmology' />
    </>

    
  )
}

export default NorseMythologyPage