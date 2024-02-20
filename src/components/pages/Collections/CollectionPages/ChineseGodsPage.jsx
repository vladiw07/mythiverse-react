import React from 'react'
import HeroGodTemplate from './HeroGodTemplate'
import H1PlusTextSection from '../CollectionComponents/H1PlusTextSection'

import changEImage from "../CollectionImages/chang'eImage.jpg"
import dragonKingImage from "../CollectionImages/dragonKingImage.jpg"
import eightImmortalsImage from "../CollectionImages/eightImmortalsImage.jpg"
import fuxiImage from "../CollectionImages/fuxiImage.jpg"
import houYiImage from "../CollectionImages/houYiImage.jpg"
import jadeEmperorImage from "../CollectionImages/jadeEmperorImage.jpg"
import mazuImage from "../CollectionImages/mazuImage.jpg"
import nezhaImage from "../CollectionImages/nezhaImage.jpg"
import nuwaImage from "../CollectionImages/nuwaImage.jpg"
import panguImage from "../CollectionImages/panguImage.jpg"
import sunWukongImage from "../CollectionImages/sunWukongImage.jpg"
import xiwangmuImage from "../CollectionImages/xiwangmuImage.jpg"
import yanWangImage from "../CollectionImages/yanWangImage.jpg"
import zhongKuiImage from "../CollectionImages/zhongKuiImage.jpg"
import guanyinImage from "../CollectionImages/guanyinImage.jpg"


function ChineseGodsPage() {
  return (
    <div>
        <H1PlusTextSection title='Chinese Gods' />
        <ul className='elementsUl'>
        <HeroGodTemplate elementText='Chang’e' image={changEImage}  />
        <HeroGodTemplate elementText='Dragon King' image={dragonKingImage}  />
        <HeroGodTemplate elementText='Eight Immortals' image={eightImmortalsImage}  />
        <HeroGodTemplate elementText='Fuxi' image={fuxiImage}  />
        <HeroGodTemplate elementText='Guanyin' image={guanyinImage} />
        <HeroGodTemplate elementText='Hou Yi' image={houYiImage}  />
        <HeroGodTemplate elementText='Jade Emperor' image={jadeEmperorImage}  />
        <HeroGodTemplate elementText='Mazu' image={mazuImage}  />
        <HeroGodTemplate elementText='Nezha' image={nezhaImage}  />
        <HeroGodTemplate elementText='Nuwa' image={nuwaImage}  />
        <HeroGodTemplate elementText='Pangu' image={panguImage}  />
        <HeroGodTemplate elementText='Sun Wukong' image={sunWukongImage}  />
        <HeroGodTemplate elementText='Xiwangmu' image={xiwangmuImage}  />
        <HeroGodTemplate elementText='Yan Wang' image={yanWangImage}  />
        <HeroGodTemplate elementText='Zhong Kui' image={zhongKuiImage}  />
        
        </ul>
    </div>
  )
}

export default ChineseGodsPage