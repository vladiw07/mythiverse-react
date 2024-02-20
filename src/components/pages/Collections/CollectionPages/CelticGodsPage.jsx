import React from 'react'
import H1PlusTextSection from '../CollectionComponents/H1PlusTextSection'
import HeroGodTemplate from './HeroGodTemplate'

import aengusImage from '../CollectionImages/aengusImage.png'
import arawnImage from '../CollectionImages/arawnImage.jpg'
import badbImage from '../CollectionImages/badbImage.webp'
import brigidImage from '../CollectionImages/brigidImage.jpg'
import cailleachImage from '../CollectionImages/cailleachImage.jpg'
import ceridwenImage from '../CollectionImages/ceridwenImage.jpg'
import cernunnosImage from '../CollectionImages/cernunnosImage.jpg'
import dagdaImage from '../CollectionImages/dagdaImage.jpg'
import danuImage from '../CollectionImages/danuImage.jpg'
import herneTheHunterImage from '../CollectionImages/herneTheHunterImage.jpg'
import lughImage from '../CollectionImages/lughImage.jpg'
import morriganImage from '../CollectionImages/morriganImage.jpg'
import neitImage from '../CollectionImages/neitImage.jpg'
import nuadaImage from '../CollectionImages/nuadaImage.jpg'
import taranisImage from '../CollectionImages/taranisImage.jpg'


function CelticGodsPage() {
  return (
    <div>
        <H1PlusTextSection title='Celtic Gods' />
        <ul className='elementsUl'>
        

        <HeroGodTemplate elementText='Aengus' image={aengusImage}  />
        <HeroGodTemplate elementText='Arawn' image={arawnImage}  />
        <HeroGodTemplate elementText='Badb' image={badbImage}  />
        <HeroGodTemplate elementText='Brigid' image={brigidImage}  />
        <HeroGodTemplate elementText='Cailleach' image={cailleachImage}  />
        <HeroGodTemplate elementText='Ceridwen' image={ceridwenImage}  />
        <HeroGodTemplate elementText='Cernunnos' image={cernunnosImage}  />
        <HeroGodTemplate elementText='Dagda'  image={dagdaImage} />
        <HeroGodTemplate elementText='Danu'  image={danuImage} />
        <HeroGodTemplate elementText='Herne the Hunter' image={herneTheHunterImage}  />
        <HeroGodTemplate elementText='Lugh' image={lughImage}  />
        <HeroGodTemplate elementText='Morrigan' image={morriganImage}  />
        <HeroGodTemplate elementText='Neit'  image={neitImage} />
        <HeroGodTemplate elementText='Nuada'  image={nuadaImage} />
        <HeroGodTemplate elementText='Taranis' image={taranisImage}  />


        </ul>
    </div>
  )
}

export default CelticGodsPage