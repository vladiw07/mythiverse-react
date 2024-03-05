import React from 'react'
import H1PlusTextSection from '../CollectionComponents/H1PlusTextSection'
import HeroGodTemplate from './HeroGodTemplate'
import GreekOlympian from '../../Gods/greekMythology/GreekOlympian'
import '../../Gods/greekMythology/GreekOlympians.css'

import charybdisImage from '../CollectionImages/charybdisImage.jpg'
import cerberusImage from '../CollectionImages/cerberusImage.jpg'
import chimeraImage from '../CollectionImages/chimeraImage.jpg'
import cyclopesImage from '../CollectionImages/cyclopesImage.jpg'
import medusaImage from '../CollectionImages/medusaImage.jpg'
import hydraImage from '../CollectionImages/hydraImage.jpg'
import hecatoncheiresImage from '../CollectionImages/hecatoncheiresImage.webp'

import minotaurImage from '../CollectionImages/minotaurImage.jpg'
import pegasusImage from '../CollectionImages/pegasusImage.jpg'
import polyphemusImage from '../CollectionImages/polyphemusImage.avif'
import scyllaImage from '../CollectionImages/scyllaImage.webp'
import uranianCyclopesImage from '../CollectionImages/uranian CyclopesImage.avif'
import giantsImage from '../CollectionImages/giantsImage.jpg'
import mormoImage from '../CollectionImages/mormoImage.jpg'
import BaliusandXanthusImage from '../CollectionImages/Baliusand XanthusImage.jpg'
import CrommyoniaImage from '../CollectionImages/CrommyoniaImage.jpg'
import PanImage from '../CollectionImages/PanImage.jpg'
import GraeaeImage from '../CollectionImages/GraeaeImage.avif'
import CercopesImage from '../CollectionImages/CercopesImage.jpg'
import ArionImage from '../CollectionImages/ArionImage.jpg'
import PygmiesImage from '../CollectionImages/PygmiesImage.webp'
import GorgonsImage from '../CollectionImages/GorgonsImage.jpg'
import CretanBullImage from '../CollectionImages/CretanBullImage.jpg'
import stymphalianbirdsImage from '../CollectionImages/stymphalianbirdsImage.jpg'



function GreekCreatures() {
  return (
    <div className='greekOlympians'>


        <H1PlusTextSection title='Greek Creatures' collectionText='Greek mythology is full of strange and often terrifying creatures, some born at the very beginning of the cosmos. Many of these creatures terrorized mortals until they were slain by brave gods or heroes.' />

        

        <ul className='elementsUl'>
            
            <li> <HeroGodTemplate path='/cerberus' elementText='Cerberus' image={cerberusImage} /> </li>
            <li> <HeroGodTemplate path='/charybdis' elementText='Charybdis' image={charybdisImage}   /></li>
            <li> <HeroGodTemplate path='/chimera' elementText='Chimera' image={chimeraImage}   /></li>
            <li> <HeroGodTemplate path='/cyclopes' elementText='Cyclopes' image={cyclopesImage}  /></li>
            <li> <HeroGodTemplate path='/hecatoncheires' elementText='Hecatoncheires' image={hecatoncheiresImage}  /></li>
            <li> <HeroGodTemplate path='/hydra' elementText='Hydra' image={hydraImage}  /></li>
            <li> <HeroGodTemplate path='/medusa' elementText='Medusa' image={medusaImage}   /></li>
            <li> <HeroGodTemplate path='/minotaur' elementText='Minotaur' image={minotaurImage} /></li>
            <li> <HeroGodTemplate path='/pegasus' elementText='Pegasus' image={pegasusImage}  /></li>
            <li> <HeroGodTemplate path='/polyphemus' elementText='Polyphemus' image={polyphemusImage}/></li>
            <li> <HeroGodTemplate path='/scylla' elementText='Scylla' image={scyllaImage} /></li>
            <li> <HeroGodTemplate path='/uranianCyclopes' elementText='Uranian Cyclopes' image={uranianCyclopesImage} /></li>
            <li> <HeroGodTemplate path='/giants' elementText='Giants' image={giantsImage}  /></li>
            <li> <HeroGodTemplate path='/mormo' elementText='Mormo' image={mormoImage} /></li>
            <li> <HeroGodTemplate path='/baliusAndXanthus' elementText='Balius and Xanthus' image={BaliusandXanthusImage} /></li>
            <li> <HeroGodTemplate path='/crommyonianSow' elementText='Crommyonian Sow' image={CrommyoniaImage} /></li>
            <li> <HeroGodTemplate path='/pan' elementText='Pan' image={PanImage} /></li>
            <li> <HeroGodTemplate path='/graeae' elementText='Graeae' image={GraeaeImage} /></li>
            <li> <HeroGodTemplate path='/cercopes' elementText='Cercopes' image={CercopesImage} /></li>
            <li> <HeroGodTemplate path='/arion' elementText='Arion' image={ArionImage} /></li>
            <li> <HeroGodTemplate path='/pygmies' elementText='Pygmies' image={PygmiesImage} /></li>
            <li> <HeroGodTemplate path='/gorgons' elementText='Gorgons' image={GorgonsImage} /></li>
            <li> <HeroGodTemplate path='/cretanBull' elementText='Cretan Bull' image={CretanBullImage}/></li>
            <li> <HeroGodTemplate path='/stymphalianBirds' elementText='Stymphalian Birds' image={stymphalianbirdsImage} /></li>
            </ul>
        


    </div>
  )
}

export default GreekCreatures