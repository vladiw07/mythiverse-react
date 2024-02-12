import React, { useEffect } from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'

import image1 from './OlympiansImages/aphrodite1.avif'
import image2 from './OlympiansImages/aphrodite2.avif'
import image3 from './OlympiansImages/aphrodite3.avif'
import image4 from './OlympiansImages/aphrodite4.avif'
import ContentComponent from '../../ContentComponent'

function Aphrodite() {
  
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'What were Aphrodite’s attributes?' }, 
      { title: 'How was Aphrodite born?' }, 
      { title: 'Where was Aphrodite worshipped?' }, 
      { title: 'The Judgment of Paris' },
      { title: 'Etymology' }, 
      ]} />
      <div className='godTemplate'>
        <h2>Olympian Goddess</h2>
        <h1>Aphrodite</h1>

        
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Aphrodite was one of the Twelve Olympians and the Greek goddess of love, desire, and procreation. Both generously nurturing and passionately destructive, she embodied all the possibilities that love and passion had to offer.</p> <p>Aphrodite lived together with the other gods on Mount Olympus. She was married to Hephaestus, god of the forge and craftsmanship, though she often took other lovers—including her husband’s more handsome brother Ares, the god of war.</p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_1'>What were Aphrodite’s attributes?</h3>} text={<><p>Aphrodite was the goddess of love and beauty; unsurprisingly, then, she was imagined as exceedingly beautiful and youthful herself. She was often represented scantily clad (or even completely nude). </p> <p>Aphrodite’s attributes included her enchanted girdle and a mirror, while her favorite animals included birds such as the dove or swallow. She was often shown in the company of her son Eros, the personification of love.</p> <p></p> <p></p> </>} />
        <ImagePlusTextComponent image={image1} text='The "Venus de Milo," a marble statue of Aphrodite discovered on the island of Milos, attributed to Alexander of Antioch (between 150 and 125 BCE)' />
        <TextSectionTemplate header={<h3 id='content_2'>How was Aphrodite born?</h3>} text={<><p>There are different versions of Aphrodite’s birth. In one version, known from Homer’s epics, she was the daughter of Zeus, the supreme god of the Greeks, and the goddess Dione.</p> <p>But the best-known account of Aphrodite’s birth comes from Hesiod’s Theogony. According to this epic poem, Aphrodite emerged from the sea foam that bubbled up after Uranus’ severed genitals were thrown into the sea.</p> <p></p> <p></p> </>} />
        <ImagePlusTextComponent image={image2} text='The Birth of Venus by Alexandre Cabanel (1875)' />
        <TextSectionTemplate header={<h3 id='content_3'>Where was Aphrodite worshipped?</h3>} text={<><p>Aphrodite was worshipped throughout the ancient Greek world, but her most important cult centers were on the islands of Cyprus and Cythera. There she was honored with beautiful sanctuaries and temples, as well as festivals called Aphrodisia.</p> <p></p> <p></p> <p></p> </>} />
        <ImagePlusTextComponent image={image3} text='The remains of the sanctuary of Aphrodite at Paphos in Cyprus' />
        <TextSectionTemplate header={<h3 id='content_4'>The Judgment of Paris</h3>} text={<><p>As the symbol of all desire and longing, Aphrodite exerted an immense influence on mortal affairs. Perhaps most notably, she played a key role in provoking the Trojan War. </p> <p>According to this myth, Aphrodite became embroiled in a beauty contest with her fellow goddesses Hera and Athena. Each of the three goddesses claimed that she was the most beautiful and therefore deserved to win a golden apple inscribed with the words “to the fairest.”</p> <p>The gods chose the young Trojan prince Paris to be the judge of this contest. Each of the three goddesses tried to bribe Paris, but in the end it was Aphrodite who won him over by promising him the most beautiful woman in the world as his bride.</p> <p>After Paris chose in Aphrodite’s favor, she kept her promise and caused Helen of Sparta, the most beautiful woman in the world, to fall in love with Paris. But when the two lovers ran off, Helen’s husband Menelaus raised an army and sailed to Troy to retrieve his wife—thus sparking the Trojan War.</p> </>} />
        <ImagePlusTextComponent image={image4} text='Mosaic showing the Judgment of Paris from the triclinium of the Atrium House in Antioch-on-the-Orontes (ca. 115–150 CE)' />
        <TextSectionTemplate header={<h3 id='content_5'>Etymology</h3>} text={<><p>In ancient times, the Greeks believed the name “Aphrodite” derived from the Greek word aphros, meaning “sea foam.” In the Theogony, the poet Hesiod described how Aphrodite was born from the foam that bubbled up after Cronus severed the genitalia of his father Uranus and cast it into the sea. He thus interpreted Aphrodite’s name as meaning “born from sea foam.”</p> <p>Nowadays, most scholars regard this derivation as a folk etymology. Some have sought various Indo-European origins for the name, tracing it to words such as *abʰor- (“very”), *dʰei- (“to shine”), or *abrhá- (“cloud”).[2] Others, such as Martin West, have searched for a Semitic source.[3] Still others have turned to Etruscan for the name’s origin, comparing it to (e)prϑni, an Etruscan honorific meaning “lord” (in this case, Aphrodite’s name would mean “the lady”).</p> <p>In short, the etymology of the name “Aphrodite” is highly uncertain and likely originated from a non-Greek language.[5] TheThe Indeed, there is no evidence of the goddess during the earliest periods of Greek history (the Bronze Age or Mycenaean period, ca. 1600–1100 BCE); she may have originally been an Eastern goddess later adopted by the Greeks.</p> <p></p> </>} />






      </div>
    </div>
  )
}

export default Aphrodite

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */