import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'


import img1 from './OlympiansImages/Hephaestus1.avif'
import img2 from './OlympiansImages/Hephaestus2.avif'
import img3 from './OlympiansImages/Hephaestus3.avif'
import ContentComponent from '../../ContentComponent'


function Hephaestus() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'What were Hephaestus’ attributes?' }, 
      { title: 'How was Hephaestus worshipped?' }, 
      { title: 'Hephaestus’ Exile from Olympus' }, 
      { title: 'Etymology' },
      
      ]} />
        <div className='godTemplate'>
            <h2>Olympian God</h2>
            <h1>Hephaestus</h1>


            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Hephaestus was one of the Twelve Olympians and the god of fire and the forge. Though lame from birth, he was a master craftsman, fashioning magnificent weapons, talismen, machines, and buildings for gods and mortals alike.</p> <p>The crippled Hephaestus was always something of an outsider. He was married to the beautiful Aphrodite, goddess of love, though she took many illicit lovers (among them the war god Ares). While Olympus was usually named as Hephaestus’ home, the god was most closely associated with the islands of Lemnos and Sicily—the sites of his mythical workshops.</p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_1'>What were Hephaestus’ attributes?</h3>} text={<><p>Hephaestus was usually imagined as a heavily muscled and bearded figure. He was famously lame, and some sources represented him as rather unattractive, in contrast to the other Olympian gods. He tended to be shown with smithing tools in hand, such as a hammer, ax, or tongs.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img1} text='Vulcan Forging the Thunderbolts of Jupiter by Peter Paul Rubens (between ca. 1636 and 1638)' />
            <TextSectionTemplate header={<h3 id='content_2'>How was Hephaestus worshipped?</h3>} text={<><p>Hephaestus was not worshipped as extensively as some of the other Olympians. He did, however, have important cults in Athens (where he was one of the city’s patron gods) and on the island of Lemnos.</p> <p>Like the other Olympians, Hephaestus was worshipped with sanctuaries, offerings, and festivals. The temples at his cult centers of Athens and Lemnos were especially impressive, though Hephaestus had sanctuaries elsewhere in the Greek world, too.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img2} text='Photo of the Temple of Hephaestus at Acragas (modern Agrigento)' />
            <TextSectionTemplate header={<h3 id='content_3'>Hephaestus’ Exile from Olympus</h3>} text={<><p>The lame Hephaestus lacked the physical perfection associated with the other major Greek gods. Because of this, he was often mistreated, ridiculed, or rejected by his fellow deities. In one myth, his mother Hera was so disgusted by his misshapen appearance that she cast him from Olympus as soon as he was born (though in other traditions, it was Zeus who exiled Hephaestus).</p> <p>Hephaestus eventually came back home—where, according to some accounts, he took revenge on his mother by building a chair that trapped her as soon as she sat in it. Understandably, it took a great deal of effort to persuade Hephaestus to release Hera.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img3} text='Zeus with Hera Expelling Hephaestus by Gaetano Gandolfi (1761–1769)' />
            <TextSectionTemplate header={<h3 id='content_4'>Etymology</h3>} text={<><p>As with many Greek deities, there is no reliable etymology for the name “Hephaestus.” The first known recording of the name (or a form of it) is in an inscription on the palace at Knossos on Crete, where it appears as a-pa-i-ti-jo in the syllabic Linear B script used in Bronze Age Greece (ca. 1600–1100 BCE). </p> <p>The palace at Knossos was a relic of the Minoan people who lived more than a thousand years before the Greek classical period (490–323 BCE), indicating that the word was present in early Greek society. However, scholars have generally interpreted the name that appears on this inscription as theophoric—that is, as a name that contains the name of the god, rather than the name of the god itself (similar to later Greek names such as Hephaestion).</p> <p>Today, the etymology of Hephaestus’ name is usually thought to have been pre-Greek.</p> <p></p> </>} />



        </div>
    </div>
  )
}

export default Hephaestus

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */