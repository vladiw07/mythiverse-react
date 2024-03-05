import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'

import img1 from './OlympiansImages/coeus1.avif'


import ContentComponent from '../../ContentComponent'


function Coeus() {
  return (
    <div className='wrapper'>
        <ContentComponent contentLi={
            [{ title: 'Overview' },
             { title: 'Etymology' },
              { title: 'Attributes' },
               { title: 'Family' },
                { title: 'Mythology' },
                { title: 'Pop Culture' }]} />
        <div className='godTemplate'>
            <h2>Greek Titan</h2>
            <h1>Coeus</h1>


            <ImagePlusTextComponent image={img1} text='Defeat of the Titans by Philip van Gunst, after Giulio Romano (ca. 1685 - 1732).' />
            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Coeus, son of the primordial deities Gaia and Uranus, was one of the original twelve Titans of Greek mythology. With his sister and lover Phoebe, Coeus fathered the goddesses Asteria and Leto, both of whom were courted by Zeus. Leto went on to give birth (by Zeus) to the Olympians  Artemis and Apollo. Following the war between the Titans and the Olympians, Coeus and the other Titans were imprisoned in Tartarus.</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>The etymology of the name “Coeus” (Greek Κοῖος, translit. Koîos) is mysterious. In fact, he may have simply been an invention of early Greek poets who wanted to raise the number of Titans to twelve, the same as the total number of Olympians.</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<><p>Coeus’ attributes were never explicitly defined. However, like the other male Titans, he appears to have been viewed as fantastically strong and ruthless.</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_3'>Family</h3>} text={<><p>Coeus was the son of Gaia, the great earth mother, and Uranus, the father of the heavens.[2] His siblings included the other Titans—Crius, Cronus, Hyperion, Iapetus, Oceanus, Thea, Rhea, Themis, Mnemosyne, Phoebe, and Tethys—as well as the Cyclopes and the Hecatoncheires.</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_4'>Mythology</h3>} text={<><p>As with many secondary Titans, Coeus is rarely mentioned in Greek texts. In Hesiod’s Theogony, for example, he is named only twice: once as a child of Gaia and Uranus,[4] and again as Phoebe’s consort and the father of “dark-gowned” Leto and Asteria “of happy name.”[5] Elsewhere in Greek literature, Coeus appears almost exclusively in lists of Titans, with no particular myths of his own.</p> <p>While this unique excerpt offers a tantalizing glimpse into a forgotten mythological tradition, it may have been little more than a fantastical story—one created to fill the void in our understanding of Coeus and the Titans as a whole.</p> <p>Adding to the mystery, there were apparently traditions in antiquity in which Zeus eventually released the Titans (including Coeus), but those texts have been lost.[8] Ultimately, there is little information on the mythology of the Titans in our surviving sources for Greek mythology.</p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_5'>Pop Culture</h3>} text={<><p>Coeus makes an appearance in The House of Hades, the fourth book in Rick Riordan’s The Heroes of Olympus series. In this iteration, “Koios” is a Titan anxious to reclaim the cosmos from Zeus and the Olympians.</p> <p></p> <p></p> <p></p> </>} />

        </div>
    </div>
  )
}

export default Coeus

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */