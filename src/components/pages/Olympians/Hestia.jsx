import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'


import img1 from './OlympiansImages/hestia1.avif'
import img2 from './OlympiansImages/hestia2.avif'
import img3 from './OlympiansImages/hestia3.avif'
import img4 from './OlympiansImages/hestia4.avif'
import ContentComponent from '../../ContentComponent'


function Hestia() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'What were Hestia’s attributes?' }, 
      { title: 'How was Hestia worshipped?' }, 
      { title: 'Hestia and Priapus' }, 
      { title: 'Etymology' },
      { title: 'Epithets' },
      { title: 'Attributes' },
      { title: 'Family' },
      ]} />
        <div className='godTemplate'>
            <h2>Olympian Goddess</h2>
            <h1>Hestia</h1>




            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Hestia was the Greek goddess of the hearth and home and ruler of the domestic sphere. She was a child of the Titans Cronus and Rhea and thus the sister of Zeus, Hera, Poseidon, Demeter, and Hades. Like her siblings, she was sometimes worshipped as one of the Twelve Olympians.</p> <p>Hestia was symbolized by the hearth, which burned in every Greek home as well as in many public buildings. A dutiful and inconspicuous deity, she embodied the Greek ideal of feminine modesty.</p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_1'>What were Hestia’s attributes?</h3>} text={<><p>Hestia’s principal attribute was the hearth with which she was so intimately associated. The goddess herself was typically represented wearing a veil and robe. In some images, she held a flowering branch or kettle as well.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img1} text='Possible representation of Hestia on the Siphnian Treasury in Delphi (6th century BCE)' />
            <TextSectionTemplate header={<h3 id='content_2'>How was Hestia worshipped?</h3>} text={<><p>Hestia had very few temples in the ancient world. However, because she was the goddess of the hearth, every single hearth—both those in private homes and in public buildings—could be considered a sanctuary to Hestia.</p> <p>The cult of Hestia was closely associated with an eternal flame that was kept forever burning at a public sanctuary. (There was also an eternal flame in Rome at the temple of Vesta, Hestia’s Roman counterpart.)</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img2} text='Roman Fragments with Statue of Hestia by Georg Christoph Eimmart II (1675 or earlier)' />
            <TextSectionTemplate header={<h3 id='content_3'>Hestia and Priapus</h3>} text={<><p>Hestia had virtually no mythology of her own. However, the Roman poet Ovid recounted one story in which the vegetation god Priapus tried to rape the virgin Hestia. Finding Hestia sleeping in the woods, Priapus approached her stealthily with the intention of having his way with her. But a donkey suddenly brayed nearby, waking the goddess.</p> <p>When the other gods learned of Priapus’ intentions, they banished him from their gatherings. He was sent to live in the forest with the woodland gods, far from Mount Olympus.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img3} text='Autumn in the Guise of Priapus by Pietro Bernini assisted by Gian Lorenzo Bernini (1616–1617)' />
            <TextSectionTemplate header={<h3 id='content_4'>Etymology</h3>} text={<><p>The Greek word hestia means “hearth” or “fireplace.” As the central meeting place within the house, as well as the location of the sacrifices made in Hestia’s honor, the hearth was an apt symbol for the domestic goddess.</p> <p>The etymology of the word hestia remains somewhat obscure. Some have traced it to the Proto-Indo-European roots *wes (“burn”) and *h₂wes- (“dwell, pass the night, stay”).[1] Others have suggested connections between Hestia’s name and other words for “hearth,” including eschara in Greek and jestěja in Slavic, but these derivations are not generally accepted today.[2] According to Robert S. P. Beekes, the etymology of Hestia is most likely pre-Greek.</p> <p>It should be noted that the name “Vesta,” the virginal Roman goddess who served as Hestia’s mythological counterpart, is derived from the same etymological root. </p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_5'>Epithets</h3>} text={<><p>Hestia was not showered with as many epithets as the other Olympian gods. The Homeric epics, probably the best source for poetic epithets in Greek literature, do not contain any references to the goddess Hestia (and so obviously do not give us any epithets for her). In some later sources, Hestia did have a handful of epithets, among them basileia (“queen”), chloomorphos (“verdant”), and aidios (“eternal”).</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_6'>Attributes</h3>} text={<><p>Hestia was the goddess of the hearth and household. Revered in both the private and public spheres, she was symbolized in the hearth of each individual household but also at the community hearth located in the prytaneum, a public building found at the center of each Greek polis. </p> <p>Hestia was usually represented as a modestly veiled woman wearing a long robe. In art, she was sometimes shown holding a flowering branch or a kettle. Her chief attribute was the hearth or hearth fire for which she was named. In fact, she often appeared in these forms rather than as a human.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img4} text='5th century BCE kylix representing Hestia holding a flowering branch.' />
            <TextSectionTemplate header={<h3 id='content_7'>Family</h3>} text={<><p>Hestia was the firstborn child of the Titans Cronus and Rhea, rulers of the cosmos before the Olympians; her siblings included Demeter, Hera, Hades, Poseidon, and Zeus.</p> <p>Hestia was not only the eldest child but also the first to be swallowed by the tyrannical Cronus, who was convinced that his children would overthrow him. When Zeus forced his father to regurgitate his brothers and sisters, Hestia was the last to emerge, making her both the first to be born and the last to be reborn. </p> <p>As a virgin goddess, Hestia had no children.</p> <p></p> </>} />


        </div>
    </div>
  )
}

export default Hestia

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */