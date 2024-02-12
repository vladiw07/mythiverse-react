import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'


import img1 from './OlympiansImages/apollo1.avif'
import img2 from './OlympiansImages/apollo2.avif'
import img3 from './OlympiansImages/apollo3.avif'
import img4 from './OlympiansImages/apollo4.avif'
import ContentComponent from '../../ContentComponent'

function Apollo() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Who were Apollo’s parents?' }, 
      { title: 'What were Apollo’s attributes?' }, 
      { title: 'How was Apollo worshipped?' }, 
      { title: 'Apollo and Python' },
      { title: 'Etymology' }, 
      { title: 'Other Names' }, 
      
      ]} />
        <div className='godTemplate'>
            <h2>Olympian God</h2>
            <h1>Apollo</h1>

            
            <ImagePlusTextComponent image={img1} text='The Birth of Apollo and Diana by Marcantonio Franceschini (ca. 1692–1709)' />
            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Apollo was a powerful Greek god and one of the Twelve Olympians. He served as the divine patron of prophecy, healing, art, and culture, as well as the embodiment of masculine beauty.</p> <p>Apollo belonged to the second generation of Olympians, along with his twin sister Artemis, goddess of the wild and hunting. He was commonly represented as a kouros—that is, as a young, beardless male. In ancient art, he could be seen carrying a lyre or a bow and arrow.</p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_1'>Who were Apollo’s parents?</h3>} text={<><p>Apollo was the son of Zeus, the supreme god of the Greek pantheon, and Leto, a descendant of the Titans. In myth, he and his twin sister Artemis were born on the island of Delos, the only place on earth that would give Leto shelter when Hera, Zeus’ jealous wife, sought to prevent her from giving birth. Apollo rewarded the island by making it one of the centers of his worship.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img2} text='The Apollo Belvedere (ca. 120–140 CE)' />
            <TextSectionTemplate header={<h3 id='content_2'>What were Apollo’s attributes?</h3>} text={<><p>Apollo was usually viewed as the prototypical beautiful young man (kouros in Greek). He was distinguished by various symbols of his roles and powers, including the bow, lyre, and cithara, and was often depicted wearing a laurel wreath. Apollo’s sacred animals included the raven and the wolf.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img3} text='The "Terrace of the Lions" at Delos, a gift from the Naxians (ca. 620–600 BCE)' />
            <TextSectionTemplate header={<h3 id='content_3'>How was Apollo worshipped?</h3>} text={<><p>Apollo was widely worshipped with sanctuaries and festivals. His oracle at Delphi was one of the most influential in the Greek world. Apollo also had a major sanctuary on the tiny island of Delos, where he was said to have been born.</p> <p>Like the other Olympian gods, Apollo had a rich temple cult and was honored with regular festivals throughout the Greek world, including the Pythian Games at Delphi. He was also worshipped in connection with aspects of everyday life, such as health and medicine. Ritual invocations called paeans were sung to Apollo in various contexts.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img4} text='Apollo Killing the Python by Hendrik Goltzius (published 1589)' />
            <TextSectionTemplate header={<h3 id='content_4'>Apollo and Python</h3>} text={<><p>According to one myth, while the young Apollo was establishing his oracle at Delphi, he encountered a monstrous serpent or dragon called Python. After a violent battle, Apollo won the upper hand and slew Python with his arrows. He then built his oracle over the corpse of his defeated enemy. Henceforth, the priestess of Apollo at Delphi was known as the “Pythia” to commemorate the god’s victory.</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_5'>Etymology</h3>} text={<><p>As with most Greek deities, the etymology of the name “Apollo” has mysterious origins. It does not appear in the Linear B tablets, the earliest surviving texts of Greek civilization, written in a syllabic script during the Greek Bronze Age (ca. 1600–1100 BCE). However, this does not necessarily mean that Apollo was a late addition to the Greek pantheon: the name Paean, one of Apollo’s most common alternate names, does show up in Linear B.</p> <p>Some scholars have posited that the name “Apollo” is a derivation from apella, a word in the Doric dialect of ancient Greek that means “public assembly.” Indeed, the Doric form of the god’s name is “Apellon.” In this interpretation, "Apollo” translates to “he who assembles” or “he of the assembly,” possibly referring to his reputation as the bringer of civilized order and the source of civil constitutions.</p> <p>Gregory Nagy, on the other hand, has argued that “Apollo” was derived from the words apeilē, a noun meaning “promise, boast, or threat,” and apeilein, a verb meaning “to make a promise, boast, or threat.” Such an etymology would render Apollo “the god of authoritative speech, the one who presides over all manner of speech-acts, including the realms of songmaking in general and poetry in particular.”</p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_6'>Other Names</h3>} text={<><p>Apollo was often called “Paean,” a name that emphasized his ritual function as a god of healing and protection. This was a very ancient name—perhaps even more ancient than the name Apollo.</p> <p>Another alternative name for Apollo was Phoebus, one of the god’s most popular epithets. Many ancient sources call the god “Phoebus Apollo” or even just “Phoebus.” The Romans, for example, referred to the god as “Phoebus” at least as often as they referred to him as “Apollo.”</p> <p>Other names commonly used to identify Apollo include “Loxias” (referring to the god’s ambiguous oracles, called loxia) and “Lyceus” (a word that simultaneously evokes light, wolves, and the region of Lycia). </p> <p></p> </>} />


        </div>
    </div>
  )
}

export default Apollo

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */