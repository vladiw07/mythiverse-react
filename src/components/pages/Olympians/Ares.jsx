import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'


import img1 from './OlympiansImages/ares1.avif'
import img2 from './OlympiansImages/ares2.avif'
import img3 from './OlympiansImages/ares3.avif'
import ContentComponent from '../../ContentComponent'


function Ares() {
  return (
    <div className='wrapper'>
        <ContentComponent contentLi={[{ title: 'Overview' }, { title: 'Who were Ares’ parents?' }, { title: 'What were Ares’ attributes?' }, { title: 'Ares, Aphrodite, and Hephaestus' }, { title: 'Etymology' }]} />
        <div className='godTemplate'>
            <h2>Olympian God</h2>
            <h1>Ares</h1>


        
            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Ares, son of Zeus and Hera, was the god of the most brutal and unrestrained aspects of war. Though he was one of the Twelve Olympians, his fellow gods had little love for him. </p> <p>In myth, Ares was characterized by his cruelty and insatiable taste for bloodshed. He also created chaos and discord off the battlefield. In one myth, Ares was the lover of his brother Hephaestus’ wife Aphrodite—an affair that led to much animosity among the gods.</p> <p></p> <p></p> </>} />
            <TextSectionTemplate header={<h3 id='content_1'>Who were Ares’ parents?</h3>} text={<><p>Ares was the son of Zeus, the supreme god of the Greeks, and Hera, goddess of women and marriage. His siblings included Eileithyia, goddess of childbirth; Hebe, goddess of youth; and Hephaestus, god of the forge and craftsmanship.</p> <p>Though Ares was devoted to his mother Hera, there was no love lost between him and his father Zeus. Zeus scorned Ares for his violent and cruel nature, even telling him at one point that he was the most hateful of all the gods.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img1} text='The Council of the Gods by Cornelius van Poelenburgh (ca. 1630)' />
            <TextSectionTemplate header={<h3 id='content_2'>What were Ares’ attributes?</h3>} text={<><p>Ares was often represented as a warrior in armor, with helmet, shield, and spear. In battle, he was accompanied by several terrifying attendants, including Deimos and Phobos—the personifications of panic and fear, respectively—and the war goddess Enyo.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img2} text='The "Borghese Ares," a 2nd-century Roman sculpture after a Greek original' />
            <TextSectionTemplate header={<h3 id='content_3'>Ares, Aphrodite, and Hephaestus</h3>} text={<><p>Ares had a longstanding affair with Aphrodite, the goddess of love and sex, even though she was married to Ares’ brother Hephaestus. Upon learning of the affair, Hephaestus resolved to punish his wife and her lover. He fashioned a net so fine that it was invisible to the naked eye and laid it over his bed; the next time Ares and Aphrodite made love, they were caught fast in the trap.</p> <p>Hephaestus invited all the other gods to laugh at Ares and Aphrodite, helplessly ensnared in his net. When he finally let them go, Ares and Aphrodite slunk away, thoroughly humiliated.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img3} text='Vulcan Surprising Venus and Mars in Bed before an Assembly of the Gods by Johann Heiss (1679)' />
            <TextSectionTemplate header={<h3 id='content_4'>Etymology</h3>} text={<><p>The earliest reference to the name “Ares” dates back to the Mycenaean Period (ca. 1500–1200 BCE), where it shows up in the syllabic Linear B script as a-re. The origins of the name are disputed. The most straightforward etymology derives it from the word arē or ara, which in ancient Greek means “bane,” “ruin,” “curse” and/or “imprecation.” But the name Ares may also come from another Greek word, aros, which means “profit” or “help.”</p> <p>Modern scholars have increasingly searched beyond Greek for the origins of Ares’ name. Some, for example, have linked the name to Indo-European roots, such as yōris or yāris (a word connoting violence), as well as the Sanskrit word irasyā (meaning “malevolence”).</p> <p>Linguist Robert S. P. Beekes, meanwhile, questioned all previous etymologies and instead proposed a pre-Greek, non-Indo-European origin.</p> <p></p> </>} />


        </div>
    </div>
  )
}

export default Ares

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */