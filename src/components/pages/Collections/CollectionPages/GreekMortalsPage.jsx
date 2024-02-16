import React from 'react'
import H1PlusTextSection from '../CollectionComponents/H1PlusTextSection'
import HeroGodTemplate from './HeroGodTemplate'

import greekHeroesImage from '../CollectionImages/greekHeroesImage.jpeg'
import heraclesImage from '../CollectionImages/heraclesImage.jpg'
import atalantaImage from '../CollectionImages/atalantaImage.jpeg'
import odysseusImage from '../CollectionImages/odysseusImage.jpg'
import perseusImage from '../CollectionImages/perseusImage.jpg'
import achillesImage from '../CollectionImages/achillesImage.jpg'


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
        </ul>

        <ul id='basicTextUl'>
      <li><strong>Hera</strong><p>Hera, the queen of the gods, was worshipped as the goddess of marriage, women, childbirth, and family.</p></li>
      <li><strong>Athena</strong><p>Athena, the goddess of wisdom and warfare, was revered as a protector of cities and a patron of arts and crafts.</p></li>
      <li><strong>Zeus</strong><p>Zeus, the king of the gods, ruled over the sky and thunder and was known for his many love affairs and exploits.</p></li>
      <li><strong>Poseidon</strong><p>Poseidon, the god of the sea, earthquakes, and horses, wielded a trident and was worshipped as the earth-shaker.</p></li>
      <li><strong>Hades</strong><p>Hades, the ruler of the underworld, presided over the realm of the dead and was often depicted as dark and brooding.</p></li>
      </ul>


    </div>
  )
}

export default GreekMortalsPage