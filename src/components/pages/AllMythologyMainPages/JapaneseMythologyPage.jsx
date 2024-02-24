import React from 'react'
import japaneseMythology from '../../../components/pages/Mythologies/images/japaneseMythology.jpg'
import japaneseGodsImage from '../../../components/pages/Mythologies/images/japaneseGodsImage.avif'
import MythologyTemplate from '../Mythologies/MythologyTemplate'
import transition from '../../../Transition/transition'

function JapaneseMythologyPage() {
  return (
    <>
    <MythologyTemplate collection='/japaneseGodsPage'
      imageUrl={japaneseMythology} 
      secondImageUrl={japaneseGodsImage}
      header={'Ultimate Guide to Japanese Mythology'} 
      topTextColor={'white'}
      firstText={<p>Japanese mythology is a combination of primarily Shinto and Buddhist traditions. In addition to the most powerful gods and goddesses, there are also millions of kami, or “holy powers,” associated with forces of nature, geographical features, and the spirits of the venerated dead.</p>} 
      godsHeader={'Japanese Gods'}
      godText={<p>Japanese gods and goddesses include everyone from powerful creator gods to minor, localized kami. Particularly notable is the sun goddess Amaterasu, held to be the divine ancestor of the first emperor of Japan, a lineage that remains unbroken into the current day.</p>}
      godLiElements={<ul className="godsUl"><li>Amaterasu</li><li>Susanoo</li><li>Ebisu</li><li>Tsukuyomi</li><li>Izanagi</li><li>Inari</li></ul>} />

      
    </>
  )
}

export default transition(JapaneseMythologyPage)