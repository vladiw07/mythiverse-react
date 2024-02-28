import React from 'react'
import H1PlusTextSection from '../CollectionComponents/H1PlusTextSection'
import HeroGodTemplate from './HeroGodTemplate'

import greekHeroesImage from '../CollectionImages/greekHeroesImage.jpeg'
import heraclesImage from '../CollectionImages/heraclesImage.jpg'
import atalantaImage from '../CollectionImages/atalantaImage.jpeg'
import odysseusImage from '../CollectionImages/odysseusImage.jpg'
import perseusImage from '../CollectionImages/perseusImage.jpg'
import achillesImage from '../CollectionImages/achillesImage.jpg'
import adonisImage from '../CollectionImages/adonisImage.jpg'
import acastusImage from '../CollectionImages/acastusImage.avif'
import achaeusImage from '../CollectionImages/achaeusImage.avif'
import cassandraImage from '../CollectionImages/cassandraImage.jpeg'
import andromacheImage from '../CollectionImages/andromacheImage.jpg'
import aeneasImage from '../CollectionImages/aeneasImage.jpg'


function GreekMortalsPage() {
  return (
    <div>


        <H1PlusTextSection title='Greek Mortals' collectionText='The mortals of Greek mythology included kings and queens, prophets, healers, warriors, and peasants. Unlike gods, all mortals were fated to eventually die, but many of them achieved great fame (or infamy) while they lived.' />
        <ul className='elementsUl'>
        <HeroGodTemplate elementText='Greek Heroes' image={greekHeroesImage} />
        <HeroGodTemplate elementText='Heracles' image={heraclesImage} />
        <HeroGodTemplate elementText='Atalanta' image={atalantaImage} />
        <HeroGodTemplate elementText='Odysseus' image={odysseusImage} />
        <HeroGodTemplate elementText='Perseus' image={perseusImage} />
        <HeroGodTemplate elementText='Achilles' image={achillesImage} />
        <HeroGodTemplate elementText='Adonis' image={adonisImage} />
        <HeroGodTemplate elementText='Acastus' image={acastusImage}  />
        <HeroGodTemplate elementText='Achaeus' image={achaeusImage}  />
        <HeroGodTemplate elementText='Cassandra' image={cassandraImage}  />
        <HeroGodTemplate elementText='Andromache' image={andromacheImage}  />
        <HeroGodTemplate elementText='Aeneas' image={aeneasImage}  />
        </ul>

        


    </div>
  )
}

export default GreekMortalsPage