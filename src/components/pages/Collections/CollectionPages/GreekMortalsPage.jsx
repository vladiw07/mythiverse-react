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

        <ul id='basicTextUl'>
        <li><strong>Greek Heroes</strong><p>Greek heroes are legendary figures renowned for their extraordinary feats and valor in ancient Greek mythology.</p></li>
        <li><strong>Heracles</strong><p>Heracles, known for his extraordinary strength, was a demi-god famous for completing the Twelve Labors assigned to him by King Eurystheus. Despite facing numerous challenges, he proved his valor and became a symbol of courage and perseverance.</p></li>
        <li><strong>Atalanta</strong><p>Atalanta, a skilled huntress and swift runner, was raised by bears and later became a renowned heroine. She played a significant role in many myths, including the Calydonian Boar Hunt and the quest for the Golden Fleece.</p></li>
        <li><strong>Odysseus</strong><p>Odysseus, the cunning hero of Homer's epic poem "The Odyssey," endured a long and arduous journey home from the Trojan War. His intelligence and resourcefulness, as well as his struggles against monsters and gods, make him one of the most celebrated figures in Greek mythology.</p></li>
        <li><strong>Perseus</strong><p>Perseus, the legendary slayer of Medusa, embarked on heroic quests guided by the gods. With the help of divine gifts such as the winged sandals and a mirrored shield, he defeated formidable foes and rescued Andromeda, earning his place among the greatest Greek heroes.</p></li>
        <li><strong>Achilles</strong><p>Achilles, the central character of Homer's "Iliad," was a formidable warrior and the greatest hero of the Trojan War. He was invulnerable except for his heel, which became his fatal weakness. Despite his short life, Achilles achieved eternal glory through his heroic deeds and tragic fate.</p></li>
        <li><strong>Adonis</strong><p>Adonis was a handsome youth loved by the goddess Aphrodite. His tragic death led to the establishment of the Adonia festival, commemorating his beauty and the cycle of life and death.</p></li>
        <li><strong>Acastus</strong><p>Acastus was a king in Greek mythology, known for his role in the story of Jason and the Argonauts. He hosted the Argonauts during their journey and played a part in the quest for the Golden Fleece.</p></li>
        <li><strong>Achaeus</strong><p>Achaeus was a legendary figure in Greek mythology, often associated with the founding of the Achaean League. He was considered an ancestor of the Achaeans, a group of ancient Greeks.</p></li>
        <li><strong>Cassandra</strong><p>Cassandra was a daughter of King Priam and Queen Hecuba of Troy, gifted with the ability to see the future. However, her prophecies were cursed to never be believed, leading to her tragic fate during the fall of Troy.</p></li>
        <li><strong>Andromache</strong><p>Andromache was the wife of Hector, the greatest Trojan warrior, in Greek mythology. After Hector's death, she became a slave to Achilles' son Neoptolemus. Her story is one of grief and resilience amidst the horrors of war.</p></li>
        <li><strong>Aeneas</strong><p>Aeneas was a Trojan hero and the son of the goddess Aphrodite. He played a crucial role in the Trojan War and later embarked on a journey to found the city of Rome, as depicted in Virgil's epic poem, the "Aeneid."</p></li>

      </ul>


    </div>
  )
}

export default GreekMortalsPage