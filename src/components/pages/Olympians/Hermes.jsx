import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'

import image1 from './OlympiansImages/hermes1.avif'
import image2 from './OlympiansImages/hermes2.avif'
import image3 from './OlympiansImages/hermes3.avif'
import ContentComponent from '../../ContentComponent'

function Hermes() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'What were Hermes’ attributes?' }, 
      { title: 'Who were Hermes’ parents?' }, 
      { title: 'Hermes Slays Argus Panoptes' }, 
      { title: 'Etymology' },
      
      ]} />
        <div className='godTemplate'>
            <h2>Olympian God</h2>
            <h1>Hermes</h1>

        
            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Hermes was one of the Twelve Olympians and the god who watched over messengers and heralds. He was also connected with travelers, thieves, shepherds, and mystery cults. It was Hermes who conveyed the souls of the dead to the Underworld.</p> <p>As herald and messenger of the gods, Hermes delivered the news, advice, and commands that maintained order and sustained the gods’ fragile relationships. In myth, he was usually presented as a mischievous but benign figure—an intermediary between mortals and the gods who ruled them.</p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_1'>What were Hermes’ attributes?</h3>} text={<><p>Hermes was usually represented as a beardless youth wearing a cap and winged sandals. He sometimes carried additional attributes, such as his special snake-entwined staff—the caduceus.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={image1} text='Attic red-figure stamnos attributed to the Berlin Painter (ca. 480–470 BCE) showing Zeus (center) sending out Iris (right) and Hermes (left), now in the Louvre Museum. Illustration by François Lenormant.' />
            <TextSectionTemplate header={<h3 id='content_2'>Who were Hermes’ parents?</h3>} text={<><p>Hermes was the son of Zeus, the supreme god of the Greek pantheon, and Maia, a daughter of Atlas. In most accounts, Maia bore and raised Hermes on Mount Cyllene, in the region of Arcadia.</p> <p>Hermes’ mischievousness was evident from the start; in one myth, while he was still an infant, he managed to steal the cattle of his elder half-brother Apollo. Eventually Hermes ascended to Olympus, where he became the messenger of the gods.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={image2} text='Souls on the Banks of the Acheron by Adolf Hirémy-Hirschl (1898)' />
            <TextSectionTemplate header={<h3 id='content_3'>Hermes Slays Argus Panoptes</h3>} text={<><p>In one well-known myth, Zeus sent Hermes to free his lover Io from the clutches of Argus Panoptes—a monster whose defining quality was his many unsleeping eyes. Zeus’ jealous wife Hera had placed Io under the custody of the ever-watchful Argus to prevent Zeus from sleeping with the girl.</p> <p>In the familiar version of the myth, Hermes cleverly lulled Argus to sleep with soothing music. When the last of Argus’ many eyes had finally shut, he killed the monster and set Io free.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={image3} text='Mercury, Argus and Io by Abraham Bloemaert (ca. 1592).' />
            <TextSectionTemplate header={<h3 id='content_4'>Etymology</h3>} text={<><p>The name “Hermes” seems to have originated in the Mycenaean period, the earliest period of Greek history (ca. 1600–1100 BCE). It was first written as e-ma-ha in the syllabic Linear B script used before the invention of the Greek alphabet.</p> <p>Hermes’ name may have been related to the ancient Greek herma, a cairn or heap of stones used to indicate the boundaries of something. Indeed, many of these “herms” were dedicated to Hermes. But it is not clear where the word herma comes from or how exactly it is linguistically related to the name “Hermes.” Scholars today generally agree that Hermes’ name is pre-Greek in origin.</p> <p></p> <p></p> </>} />





        </div>
    </div>
  )
}

export default Hermes

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */