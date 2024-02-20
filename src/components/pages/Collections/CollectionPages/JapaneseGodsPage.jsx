import React from 'react'
import H1PlusTextSection from '../CollectionComponents/H1PlusTextSection'
import HeroGodTemplate from './HeroGodTemplate'

import amaterasuImage from '../CollectionImages/amaterasuImage.jpg'
import ameNoUzumeImage from '../CollectionImages/ameNoUzumeImage.jpg'
import benzaitenImage from '../CollectionImages/benzaitenImage.jpg'
import bishamontenImage from '../CollectionImages/bishamontenImage.jpg'
import daikokutenImage from '../CollectionImages/daikokutenImage.webp'
import ebisuImage from '../CollectionImages/ebisuImage.jpg'
import fujinImage from '../CollectionImages/fujinImage.jpg'
import FukurokujuImage from '../CollectionImages/FukurokujuImage.png'
import hoderiImage from '../CollectionImages/hoderiImage.jpg'
import hoteiImage from '../CollectionImages/hoteiImage.jpg'
import inariImage from '../CollectionImages/inariImage.jpg'
import izanagiImage from '../CollectionImages/izanagiImage.jpg'
import jizoImage from '../CollectionImages/jizoImage.jpg'
import jurojinImage from '../CollectionImages/jurojinImage.jpg'
import kagutsuchiImage from '../CollectionImages/kagutsuchiImage.jpg'
import kannonImage from '../CollectionImages/kannonImage.jpg'
import kichijotenImage from '../CollectionImages/kichijotenImage.webp'
import ninigiImage from '../CollectionImages/ninigiImage.png'
import raijinImage from '../CollectionImages/raijinImage.jpg'
import susanooImage from '../CollectionImages/susanooImage.jpg'
import tsukuyomiImage from '../CollectionImages/tsukuyomiImage.jpg'



function JapaneseGodsPage() {
  return (
    <div>
        <H1PlusTextSection title='Japanese Gods' />
        <ul className='elementsUl'>


        <HeroGodTemplate elementText='Amaterasu' image={amaterasuImage} />
        <HeroGodTemplate elementText='Ame-no-Uzume' image={ameNoUzumeImage} />
        <HeroGodTemplate elementText='Benzaiten' image={benzaitenImage} />
        <HeroGodTemplate elementText='Bishamonten' image={bishamontenImage}/>
        <HeroGodTemplate elementText='Daikokuten' image={daikokutenImage}/>
        <HeroGodTemplate elementText='Ebisu' image={ebisuImage}/>
        <HeroGodTemplate elementText='Fujin' image={fujinImage}/>
        <HeroGodTemplate elementText='Fukurokuju' image={FukurokujuImage}/>
        <HeroGodTemplate elementText='Hoderi' image={hoderiImage}/>
        <HeroGodTemplate elementText='Hotei'  image={hoteiImage} />
        <HeroGodTemplate elementText='Inari' image={inariImage}/>
        <HeroGodTemplate elementText='Izanagi'image={izanagiImage} />
        <HeroGodTemplate elementText='Jizo' image={jizoImage}/>
        <HeroGodTemplate elementText='Jurojin' image={jurojinImage} />
        <HeroGodTemplate elementText='Kagutsuchi' image={kagutsuchiImage}/>
        <HeroGodTemplate elementText='Kannon' image={kannonImage}/>
        <HeroGodTemplate elementText='Kichijoten' image={kichijotenImage} />
        <HeroGodTemplate elementText='Ninigi' image={ninigiImage} />
        <HeroGodTemplate elementText='Raijin' image={raijinImage} />
        <HeroGodTemplate elementText='Susanoo' image={susanooImage}/>
        <HeroGodTemplate elementText='Tsukuyomi' image={tsukuyomiImage} />


        </ul>
    </div>
  )
}

export default JapaneseGodsPage