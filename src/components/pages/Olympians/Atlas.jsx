import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'

import img1 from './OlympiansImages/atlas1.avif'
import img2 from './OlympiansImages/atlas2.avif'

import ContentComponent from '../../ContentComponent'


function Atlas() {
  return (
    <div className='wrapper'>
        <ContentComponent contentLi={
            [{ title: 'Overview' },
             { title: 'Etymology' },
              { title: 'Epithets' },
               { title: 'Attributes' },
                { title: 'Family' }]} />
        <div className='godTemplate'>
            <h2>Greek Titan</h2>
            <h1>Atlas</h1>



            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>The son of Iapetus and Clymene, Atlas was a Titan famed for his prodigious strength and intelligence. Having been defeated by the Olympians in the Titanomachy, Atlas was condemned to bear the weight of the celestial sphere for all eternity. He was a popular figure in Greek mythology, and appeared in the stories of heroes such as Heracles and Perseus. Closely associated with the earth and other heavenly bodies, Atlas was also a master of astronomy, geography, and navigation.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img1} />
            <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>The name “Atlas” was likely the result of joining the prefix a- with the ancient Greek word tlēnai, meaning “to bear.” The latter may have been used in reference to Atlas’ reputation as the bearer of the celestial sphere. Some modern scholars, however, insist that Atlas’ name is pre-Greek in origin.</p> <p>An alternative etymology suggests a North African origin for Atlas’ name, tying it to the Atlas Mountains in northwestern Africa. According to this theory, the Greek name “Atlas” was derived from adrar, the Berber word for the mountains that came to represent the doomed Titan (see below).</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img2} text='Atlas Mountains range, as seen in Morocco.' />
            <TextSectionTemplate header={<h3 id='content_2'>Epithets</h3>} text={<><p>Atlas was often given the epithet Telamōn (“enduring”), due to his toils as the bearer of heaven.</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_3'>Attributes</h3>} text={<><p>A figure of prodigious strength, Atlas famously bore the world on his shoulders and was renowned for his wit and wisdom. According to a number of ancient sources, such as Diodorus of Sicily’s Library of History, Atlas was a master philosopher, mathematician, astrologer and astronomer. Some sources have even described Atlas as the inventor of astronomy: “For Atlas had worked out the science of astrology to a degree surpassing others and had ingeniously discovered the spherical nature of the stars.”</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_4'>Family</h3>} text={<><p>Atlas had a large family with connections across Greek mythology. According to the best-known tradition, he was the son of the Titan Iapetus and the Oceanid Clymene,[4] though there was another version in which his mother was Asia (also an Oceanid).[5] Atlas had several brothers, including Prometheus, Epimetheus and Menoetius. Some sources named three additional brothers: Anchiale,[6] Buphagus,[7] and Dryas.</p> <p>Atlas had a number of lovers, including Hesperis, Pleione, and the Oceanid Aethra. With Hesperis,[9] Atlas sired the mysterious Hesperides, sometimes known as the Atlantides.[10] With either Pleione[11] or Aethra,[12] he had seven daughters known collectively as the Pleiades (Maia, Electra, Taygete, Alcyone, Celaeno, Sterope and Merope).[13] They achieved fame as the companions of Artemis and later transformed into stars to elude the amorous pursuits of the hunter Orion.</p> <p>Atlas's other daughters included Calypso,[14] an enchantress famed for her seven-year affair with Odysseus; Dione;[15] Maera;[16] and the Hyades, a group of nymphs known as rain-makers.[17] Finally, Atlas had a son named Hyas, an archer and hunter.</p> <p></p> </>} />

        
            

        </div>
    </div>
  )
}

export default Atlas

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */