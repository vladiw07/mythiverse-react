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
            
            <li> <HeroGodTemplate elementText='Cerberus' image={cerberusImage} /> </li>
            <li> <HeroGodTemplate elementText='Charybdis' image={charybdisImage}   /></li>
            <li> <HeroGodTemplate elementText='Chimera' image={chimeraImage}   /></li>
            <li> <HeroGodTemplate elementText='Cyclopes' image={cyclopesImage}  /></li>
            <li> <HeroGodTemplate elementText='Hecatoncheires' image={hecatoncheiresImage}  /></li>
            <li> <HeroGodTemplate elementText='Hydra' image={hydraImage}  /></li>
            <li> <HeroGodTemplate elementText='Medusa' image={medusaImage}   /></li>
            <li> <HeroGodTemplate elementText='Minotaur' image={minotaurImage} /></li>
            <li> <HeroGodTemplate elementText='Pegasus' image={pegasusImage}  /></li>
            <li> <HeroGodTemplate elementText='Polyphemus' image={polyphemusImage}/></li>
            <li> <HeroGodTemplate elementText='Scylla' image={scyllaImage} /></li>
            <li> <HeroGodTemplate elementText='Uranian Cyclopes' image={uranianCyclopesImage} /></li>
            <li> <HeroGodTemplate elementText='Giants' image={giantsImage}  /></li>
            <li> <HeroGodTemplate elementText='Mormo' image={mormoImage} /></li>
            <li> <HeroGodTemplate elementText='Balius and Xanthus' image={BaliusandXanthusImage} /></li>
            <li> <HeroGodTemplate elementText='Crommyonian Sow' image={CrommyoniaImage} /></li>
            <li> <HeroGodTemplate elementText='Pan' image={PanImage} /></li>
            <li> <HeroGodTemplate elementText='Graeae' image={GraeaeImage} /></li>
            <li> <HeroGodTemplate elementText='Cercopes' image={CercopesImage} /></li>
            <li> <HeroGodTemplate elementText='Arion' image={ArionImage} /></li>
            <li> <HeroGodTemplate elementText='Pygmies' image={PygmiesImage} /></li>
            <li> <HeroGodTemplate elementText='Gorgons' image={GorgonsImage} /></li>
            <li> <HeroGodTemplate elementText='Cretan Bull' image={CretanBullImage}/></li>
            <li> <HeroGodTemplate elementText='Stymphalian Birds' image={stymphalianbirdsImage} /></li>
            </ul>
        


    </div>
  )
}

export default GreekCreatures