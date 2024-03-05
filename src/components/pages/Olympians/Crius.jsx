import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'

import img1 from './OlympiansImages/crius1.avif'


import ContentComponent from '../../ContentComponent'


function Crius() {
  return (
    <div className='wrapper'>
        <ContentComponent contentLi={
            [{ title: 'Overview' },
             { title: 'Etymology' },
              { title: 'Attributes' },
               { title: 'Family' },
                { title: 'Mythology' }]} />
        <div className='godTemplate'>
            <h2>Titan</h2>
            <h1>Crius</h1>


            <ImagePlusTextComponent image={img1} text='Fall of the Titans by Peter Paul Rubens (ca. 1637-1638).' />
            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Crius was one of the first Titans in Greek mythology and the offspring of Gaia and Uranus. An obscure figure, he was best known for fathering the wind god Astraeus as well as the fiery and warlike brothers Pallas and Perses. Crius joined forces with the other Titans in the cataclysmic war against the Olympians known as the Titanomachy. Following their defeat, Crius and his brethren were consigned to the dark realm of Tartarus for all eternity.</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>The name “Crius” is the ancient Greek word for “ram” (krios). Scholars have suggested several possible etymologies for the name, including the Indo-European *kerh₂-s- (“horn"), the Germanic *kroi-no- (“reindeer”), and certain Balto-Slavic words meaning “curved” (the Lithuanian kredīvas or kraīvas, the Greek skolios, etc.).</p> <p></p> <p></p> <p></p> </>} />
            
            <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<><p>Crius’ association with the ram suggests a figure of masculine strength and virility. However, his relative absence from the Greek texts makes it difficult to confirm these attributes.</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_3'>Family</h3>} text={<><p>Crius was among the first generation of Titans—those born to mother Gaia, the personification of the earth, and father Uranus, the incarnation of the heavens. This primordial union brought forth not only Crius but also  Coeus, Cronus, Hyperion, Iapetus, Oceanus, Mnemosyne, Phoebe, Tethys, Thea, Themis, and Rhea. Crius has monstrous siblings as well, including the one-eyed Cyclopes and the Hecatoncheires, who had one-hundred hands each.</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_4'>Mythology</h3>} text={<><p>Crius was a mysterious figure rarely mentioned in Greek mythology. What few appearances he did have established him as the husband of the sea deity Eurybia and the father of Astraeus, Perses, and Pallas. As Hesiod writes in his Theogony: “And Eurybia, bright goddess, was joined in love to Crius and bare great Astraeus, and Pallas, and Perses who also was eminent among all men in wisdom.”C</p> <p></p> <p></p> <p></p> </>} />

        </div>
    </div>
  )
}

export default Crius

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */