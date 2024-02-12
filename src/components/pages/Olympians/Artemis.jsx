import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'


import img1 from './OlympiansImages/artemis1.avif'
import img2 from './OlympiansImages/artemis2.avif'
import img3 from './OlympiansImages/artemis3.avif'
import img4 from './OlympiansImages/artemis4.avif'
import ContentComponent from '../../ContentComponent'


function Artemis() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Who were Artemis’ parents?' }, 
      { title: 'What were Artemis’ attributes?' }, 
      { title: 'The Bath of Artemis' }, 
      { title: 'Etymology' },
      
      ]} />
        <div className='godTemplate'>
            <h2>Olympian Goddess</h2>
            <h1>Artemis</h1>

            <ImagePlusTextComponent image={img1} text='Tondo of an Attic red-figure cup by the Brygos Painter showing Apollo (left) and his sister Artemis (right) (ca. 470 BCE)' />
            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Artemis was the Greek goddess of the hunt, nature, and wild animals. She was typically regarded as one of the major Olympians, numbered among the so-called “Twelve Gods.”</p> <p>In art and literature, Artemis was often imagined hunting in the forest with her bow. While her twin brother Apollo represented reason and order, Artemis signified the wilder and more untamed aspects of human and natural life.</p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_1'>Who were Artemis’ parents?</h3>} text={<><p>Artemis, like her twin brother Apollo, was born from the union of the supreme god Zeus and the goddess Leto. She was most likely born on the island of Delos (though some sources placed her birth on a different island nearby). Delos later became the site of one of Apollo’s most important sanctuaries.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img2} text='Latona and Her Children by William Henry Rinehart (1874). ' />
            <TextSectionTemplate header={<h3 id='content_2'>What were Artemis’ attributes?</h3>} text={<><p>Artemis’ most recognizable attribute was probably her bow, though she was sometimes shown with other weapons as well. She was generally depicted clad in a short hunter’s tunic. Artemis’ entourage included nymphs and woodland animals such as deer and bears.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img3} text='Statue of Artemis killing a deer from Delos (ca. 125–100 BCE)' />
            <TextSectionTemplate header={<h3 id='content_3'>The Bath of Artemis</h3>} text={<><p>Artemis was notoriously protective of her chastity. One well-known myth told of how the Theban prince Actaeon was out hunting in the woods when he stumbled upon Artemis bathing in a stream. Horrified that a mortal man had seen her naked, Artemis transformed the unfortunate Actaeon into a deer. Actaeon’s hunting dogs promptly turned on him and, failing to recognize their master, tore him apart.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img4} text='Diana and Actaeon by Giuseppe Cesari (1602–1603)' />
            <TextSectionTemplate header={<h3 id='content_4'>Etymology</h3>} text={<><p>Speculation over the etymology of the name “Artemis” began in antiquity. In Cratylus, Plato traced the name’s origins to the Greek word artemēs, meaning “pure” or “unblemished.”[1] Though this is a tempting theory—the words are similar, and the quality of purity nicely captures Artemis’ nature—it is most likely too neat to be true. Most scholars and linguists today regard Plato’s interpretation as a folk etymology.</p> <p>The search for the origins of Artemis’ name are made even more difficult by the fact that there is no clear consensus on how old it is. Some scholars have suggested that the name “Artemis” appears in the first Greek texts, equating the goddess of the hunt with a-te-mi-to or a-te-mi-te in the Linear B script (the writing system in use ca. 1600–1100 BCE, prior to the development of the Greek alphabet). If this is correct, it would mean that Artemis was known and worshipped in Greece from the earliest times. However, it is still disputed whether Artemis and a-te-mi-to/a-te-mi-te refer to the same entity.</p> <p>While there is no widely agreed-upon etymology for “Artemis,” several hypotheses have nevertheless gained popularity. According to some, Artemis’ name is related to the Greek word arktos, meaning “bear” (from the Proto-Indo-European *h₂ŕ̥tḱos). Indeed, Artemis was closely associated with a bear cult in Attica and was often depicted alongside bears (as well as a number of other animals, such as deer, boars, and hunting dogs).</p> <p></p> </>} />




        
        </div>
    </div>
  )
}

export default Artemis

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */