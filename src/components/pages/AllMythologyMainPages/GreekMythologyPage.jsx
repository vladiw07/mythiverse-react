import React from 'react'
import { Link } from 'react-router-dom'
import MythologyTemplate from '../Mythologies/MythologyTemplate'
import greekMythology from '../../../components/pages/Mythologies/images/greekMythology.jpg'
import secondGreekGodsImage from '../../../components/pages/Mythologies/images/greekGodsImage.jpg'
import MythologyTemplateCard from '../Mythologies/MythologyTemplateCard'

import greekOlympiansImage from './images/GreekOlympiansImage.avif'
import greekMortalsImage from './images/GreekMortalsImage.avif'
import greekCreaturesImage from './images/GreekCreaturesImage.avif'

function GreekMythologyPage() {
  return (
    <>
    <MythologyTemplate displayState='none'
      imageUrl={greekMythology}
      secondImageUrl={secondGreekGodsImage}
      header={'Ultimate Guide to Greek Mythology'} 
      
      topTextColor={'white'}
      firstText={<p>Greek mythology is the body of work detailing the origins of the ancient Hellenic world and the many deities who ruled over it.It includes the histories of gods and goddesses, heroes and monsters, as well as explanations for many important religious rituals.</p>} 
      godsHeader={'Greek Gods'} godText={<p>The Greek gods ruled over every aspect of Hellenic existence—from war to love, from childbirth to the afterlife. Commonly depicted in human form, they were capricious deities who demanded worship and sacrifice  to stave off misfortune and ruin.</p>} 
      godLiElements={<ul className="godsUl"><li><Link className="GodLink" to="/greekOlympians">Greek Olympians</Link></li><li><Link className="GodLink" to="/athena">Athena</Link></li><li><Link className="GodLink" to="/poseidon">Poseidon</Link></li><li><Link className="GodLink" to="/greekTitans">Greek Titans</Link></li><li><Link className="GodLink" to="/zeus">Zeus</Link></li><li><Link className="GodLink" to="/prometheus">Prometheus</Link></li></ul>} 
      /> 
      
      <MythologyTemplateCard collection='/greekOlympians'
        godLiElements={<ul className="godsUl"><li><Link className="GodLink" to='/athena'>Athena</Link></li><li><Link className="GodLink" to='/poseidon'>Poseidon</Link></li><li><Link className="GodLink" to='/aphrodite'>Aphrodite</Link></li><li><Link className="GodLink" to='/zeus'>Zeus</Link></li><li><Link className="GodLink" to='/artemis'>Artemis</Link></li></ul>} 
       secondImageUrl={greekOlympiansImage} 
       godText={<p>The twelve Olympians consist of most of the major gods and goddesses of the Greek pantheon. Immortals who ruled their human subjects from on high, they were constantly fighting, fooling, and having affairs with each other, often with dire consequences.</p>} 
       headerText='Greek Olympians' />

        <MythologyTemplateCard collection='/greekMortalsPage'
        godLiElements={<ul className="godsUl"><li><Link className="GodLink">Greek Heroes</Link></li><li><Link className="GodLink">Atalanta</Link></li><li><Link className="GodLink">Perseus</Link></li><li><Link className="GodLink">Heracles</Link></li><li><Link className="GodLink">Achilles</Link></li><li><Link className="GodLink">Odysseus</Link></li></ul>} 
        secondImageUrl={greekMortalsImage} 
        godText={<p>The mortals of Greek mythology included kings and queens, prophets, healers, warriors, and peasants. Unlike gods, all mortals were fated to eventually die, but many of them achieved great fame (or infamy) while they lived.</p>} 
        headerText='Greek Mortals' />

      <MythologyTemplateCard collection='/greekCreaturesPage'
        godLiElements={<ul className="godsUl"><li><Link className="GodLink">Medusa</Link></li><li><Link className="GodLink">Cerberus</Link></li><li><Link className="GodLink">Pegasus</Link></li><li><Link className="GodLink">Hydra</Link></li><li><Link className="GodLink">Minotaur</Link></li><li><Link className="GodLink">Chimera</Link></li></ul>} 
        secondImageUrl={greekCreaturesImage} 
        godText={<p>Greek mythology is full of strange and often terrifying creatures, some born at the very beginning of the cosmos. Many of these creatures terrorized mortals until they were slain by brave gods or heroes.</p>} 
        headerText='Greek Creatures' />
       
    </>

    
  )
}

export default GreekMythologyPage