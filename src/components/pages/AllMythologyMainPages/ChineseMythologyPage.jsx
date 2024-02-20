import React from 'react'
import { Link } from 'react-router-dom'


import chineseMythology from '../../../components/pages/Mythologies/images/chineseMythology.jpg'

import chineseGodsImage from '../../../components/pages/Mythologies/images/chineseGodsImage.avif'
import MythologyTemplate from '../Mythologies/MythologyTemplate'


function ChineseMythologyPage() {
  return (
    <>
    <MythologyTemplate collection='/chineseGodsPage'
      imageUrl={chineseMythology} 
      secondImageUrl={chineseGodsImage}
      header={'Ultimate Guide to Chinese Mythology'} 
      topTextColor={'black'}
      firstText={<p>Chinese mythology encompasses a wide range of folklore, history, and religious belief across numerous time periods and peoples, including the present day. Many of these myths are intricately bound to philosophy, religion, tradition, and society.</p>} 
      godsHeader={'Chinese Gods'}
      godText={<p>The pantheon of Chinese gods and goddesses is extensive, spanning thousands of years as well as different ethnic groups and changing geographical boundaries. Some of the most enduring deities are Pangu, the Jade Emperor, Guanyin, Sun Wukong, and the Eight Immortals.</p>}
      godLiElements={<ul className="godsUl"><li><Link to="/chang'e" className="GodLink">Chang'e</Link></li><li><Link to="/nezha" className="GodLink">Nezha</Link></li><li><Link to="/fuxi" className="GodLink">Fuxi</Link></li><li><Link to="/jadeEmperor" className="GodLink">Jade Emperor</Link></li><li><Link to="/nuwa" className="GodLink">Nuwa</Link></li><li><Link to="/guanyin" className="GodLink">Guanyin</Link></li></ul>} />
    </>
  )
}

export default ChineseMythologyPage