import React from 'react'
import aztecMythology from '../../../components/pages/Mythologies/images/aztecMythology.png'
import aztecGodsImage from '../../../components/pages/Mythologies/images/aztecGodsImage.avif'
import MythologyTemplate from '../Mythologies/MythologyTemplate'

function AztecMythologyPage() {
  return (
    <>
    <MythologyTemplate collection='/aztecGodsPage'
      imageUrl={aztecMythology} 
      secondImageUrl={aztecGodsImage}
      header={'Ultimate Guide to Aztec Mythology'} 
      topTextColor={'white'}
      firstText={<p>Aztec mythology is the collected myths and legends of the Aztec people. One of their best-known myths is the founding of the city Tenochtitlan, built on the spot where the travelers saw an eagle perched on a cactus and holding a rattlesnake, an image which endures on the Mexican flag today.</p>} 
      godsHeader={'Aztec Gods'}
      godText={<p>The Aztec gods and goddesses were a bloodthirsty group whose constant warring with each other led to a cycle of death and rebirth for all humanity. Each of the first four ages was ruled by a different deity, or “sun,” and each age ended in violence before a new sun was chosen.</p>}
      godLiElements={<ul className="godsUl"><li>Quetzalcoatl</li><li>Mictlantecuhtli</li><li>Tezcatlipoca</li><li>Huitzilopochtli</li><li>Ometeotl</li><li>Mixcoatl</li></ul>} />
    </>
  )
}

export default AztecMythologyPage