import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'


import img1 from './images/charybdis1.avif'
import img2 from './images/charybdis2.avif'

import ContentComponent from '../../ContentComponent'


function Charybdis() {
  return (
    <div className='wrapper'>
        <ContentComponent contentLi={
            [{ title: 'Overview' },
             { title: 'Etymology' },
              { title: 'Attributes' },
               { title: 'Mythology' },
                ]} />
        <div className='godTemplate'>
            <h2>Greek Creature</h2>
            <h1>Charybdis</h1>
            

            <ImagePlusTextComponent image={img1} text='Charybdis and Scylla by Ary Ernest Renan (1894).' />
            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Charybdis was a monster of obscure origins who manifested as a giant whirlpool. Every day, she swallowed up the waters of the sea three times, only to regurgitate them. Charybdis shared a narrow strait with the monster Scylla. Those who attempted to traverse the strait rarely lived to tell the tale: what Scylla did not pick off with her many heads, Charybdis would swallow up with her whirlpool.</p> <p>Together with Scylla, Charybdis faced off against various heroes, including Jason, Aeneas, and (most famously) Odysseus. In the myth of the wanderings of Odysseus, it was Charybdis who destroyed his last ship, leaving Odysseus himself as the only survivor.</p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>The etymology of the name “Charybdis” is unknown.</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<><p><h4>Locale</h4>Charybdis lived deep in the ocean, beneath a fig tree growing from a small rock in a narrow strait. Her fellow monster, the many-headed Scylla, inhabited a larger rock directly opposite. The two creatures were within bowshot of one another; thus, ships and sea creatures passing through the strait could not avoid one without approaching the other.</p> <p>Early sources, such as Homer, did not specify the exact location of the strait in which Scylla and Charybdis resided. They probably imagined it in some obscure and largely unexplored part of the world. But by the Classical period (490–323 BCE), Scylla and Charybdis were generally said to have lived in the Strait of Messina, which separates the island of Sicily from the boot of Italy.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img2} text='A map of the wanderings of Aeneas, showing the locations of Charybdis and Scylla (underlined in red). From an edition of The Aeneid of Virgil: Book III, edited by Philip Sandford (London: Blackie & Son, 1900). ' />
            <TextSectionTemplate header={<h3 id='content_3'>Mythology</h3>} text={<><p><h4>Origins</h4>Though the earliest authors revealed nothing about Charybdis’ parentage or where she came from, later authors did relay an origin story for the horrific creature. In his commentary on Virgil’s Aeneid, Servius wrote that Charybdis was a daughter of Poseidon and Gaia known for her voracious appetite. When Heracles captured the cattle of Geryon as his tenth labor, Charybdis tried to steal the cattle from him. As punishment, Zeus cast her down to the bottom of the sea. There, her nature served her well as she swallowed and subsequently threw up the waters of the sea three times each day.</p> <p></p> <p></p> <p></p> </>} />

            


            
        </div>
    </div>
  )
}

export default Charybdis

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */