import React from 'react'
import hinduMythology from '../../../components/pages/Mythologies/images/hinduMythology.jpg'
import hinduGodsImage from '../../../components/pages/Mythologies/images/hinduGodsImage.avif'
import MythologyTemplate from '../Mythologies/MythologyTemplate'

function HinduMythologyPage() {
  return (
    <>
    <MythologyTemplate 
      imageUrl={hinduMythology} 
      secondImageUrl={hinduGodsImage}
      header={'Ultimate Guide to Hindu Mythology'} 
      topTextColor={'white'}
      firstText={<p>Hindu mythology comprises ancient Indian tales, including those from the Vedas, Mahabharata, Ramayana, and Puranas. These stories feature gods, heroes, and mystical beings, conveying philosophical ideas and moral lessons. Despite historical challenges, they've persisted through oral tradition and religious texts, with widespread documentation starting in the early medieval period.</p>} 
      godsHeader={'Hindu Gods'}
      godText={<p>Hinduism is a major world religion, with one of the longest-surviving pantheons in history. Within its rich mythology, elephant-headed gods clash with powerful demons and titans, preserver gods send out their avatars to restore the righteous order of the universe, and powerful sages challenge the gods themselves.</p>}
      godLiElements={<ul className="godsUl"><li>Shiva</li><li>Ganesha</li><li>Brahma</li><li>Vishnu</li><li>Parvati</li><li>Krishna</li></ul>} />
    </>
  )
}

export default HinduMythologyPage