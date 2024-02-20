import React from 'react'
import H1PlusTextSection from '../CollectionComponents/H1PlusTextSection'
import HeroGodTemplate from './HeroGodTemplate'

import ChalchiuhtlicueImage from '../CollectionImages/ChalchiuhtlicueImage.jpg'
import coatlicueImage from '../CollectionImages/coatlicueImage.jpg'
import huitzilopochtliImage from '../CollectionImages/huitzilopochtliImage.jpg'
import mictlantecuhtliImage from '../CollectionImages/mictlantecuhtliImage.jpg'
import mixcoatlImage from '../CollectionImages/mixcoatlImage.jpg'
import ometeotlImage from '../CollectionImages/ometeotlImage.jpg'
import quetzalcoatlImage from '../CollectionImages/quetzalcoatlImage.jpg'
import tezcatlipocaImage from '../CollectionImages/tezcatlipocaImage.jpg'
import tlalocImage from '../CollectionImages/tlalocImage.jpg'
import tonatiuhImage from '../CollectionImages/tonatiuhImage.jpg'
import xipeTotecImage from '../CollectionImages/xipeTotecImage.jpg'
import xochiquetzalImage from '../CollectionImages/xochiquetzalImage.jpg'

function AztecGodsPage() {
  return (
    <div>
        <H1PlusTextSection title='Aztec Gods' />
        <ul className='elementsUl'>


        <HeroGodTemplate elementText='Chalchiuhtlicue' image={ChalchiuhtlicueImage}   />
        <HeroGodTemplate elementText='Coatlicue' image={coatlicueImage}   />
        <HeroGodTemplate elementText='Huitzilopochtli' image={huitzilopochtliImage}   />
        <HeroGodTemplate elementText='Mictlantecuhtli' image={mictlantecuhtliImage}  />
        <HeroGodTemplate elementText='Mixcoatl' image={mixcoatlImage}  />
        <HeroGodTemplate elementText='Ometeotl' image={ometeotlImage}  />
        <HeroGodTemplate elementText='Quetzalcoatl' image={quetzalcoatlImage}  />
        <HeroGodTemplate elementText='Tezcatlipoca' image={tezcatlipocaImage}  />
        <HeroGodTemplate elementText='Tlaloc'  image={tlalocImage} />
        <HeroGodTemplate elementText='Tonatiuh' image={tonatiuhImage}  />
        <HeroGodTemplate elementText='Xipe Totec' image={xipeTotecImage}  />
        <HeroGodTemplate elementText='Xochiquetzal' image={xochiquetzalImage}  />
        



        </ul>
    </div>
  )
}

export default AztecGodsPage