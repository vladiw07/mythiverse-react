import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'

import ra1 from './egyptianGodSectionImages/ra1.avif'
import ra2 from './egyptianGodSectionImages/ra2.avif'

function RaTemplate() {
  return (
    <div className='wrapper'>
      <div className='godTemplate'>
        <h2>Egyptian God</h2>
        <h1>Ra</h1>

        
        <TextSectionTemplate header={<h3>Overview</h3>} text={<><p>As creator and sun god, Ra was a vital part of the Egyptian pantheon. Throughout countless dynasties, Ra was a constant figure of worship whose role shifted as newer gods were incorporated into the state religion.</p></>} />
        <ImagePlusTextComponent image={ra1} text='This falcon-headed statuette of Ra-Horakhty (c. 1069–525 BCE) combines the attributes of Ra with those of Horus.' />
        <TextSectionTemplate header={<h3></h3>} text={<><p>Ra had a number of origin stories. He was either self-created, or one step removed from the creation of the universe. No matter the origin story, Egyptian lore held that most of the major Egyptian gods were direct descendants of Ra. The Pharaohs also claimed direct descent from Ra, and used it to justify their rule.</p></>} />

        <TextSectionTemplate header={<h3>Etymology</h3>} text={<><p>In ancient Egyptian, Ra’s name simply meant “sun.” As with many mythologies, Egyptian gods had a multiplicity of names. Ra had many other names, and was sometimes called Re, Amun-Re, Khepri, Ra-Horakhty, and Atum.</p> <p>Each of these names was typically associated with a different aspect of Ra’s being. Such names often emerged as the Egyptians assimilated new deities and religions into their own.</p> <p>His worship likely originated in a town the Egyptians called Iunu. The Greeks referred to this place as Heliopolis, or “city of the sun god.” This ancient city was located in what is now a northern suburb of Cairo.</p></>} />

        <TextSectionTemplate header={<h3>Attributes</h3>} text={<><p>While Ra was most famous as the Egyptian creator deity, he fulfilled other roles as well. His other titles included god of the sun, god of kings, and god of order.</p> <p>Ra could be depicted in a variety of ways. He most commonly appeared as a solar disk—a circle drawn over the head of various sun deities. Ra was also frequently represented as a man with the head of a falcon.</p> <p>Imagery of Ra often depicted him wielding both a scepter and an ankh.</p></>} />
        <ImagePlusTextComponent image={ra2} text='This small figure (4th century BCE) depicts a crouching Ra with a solar disk upon his head. It once held a scepter in its hand.' />
        <TextSectionTemplate header={<h3></h3>} text={<><p>Ra, particularly in his morning iteration Khepri, was sometimes depicted as a scarab beetle. The Egyptians would observe the beetle pushing a ball of dung across the sands and burying it before newborn beetles emerged from the earth. This process mirrored the sun’s journey as it traveled across the sky, only to be reborn the next day.</p> <p>Ra was thought to travel across the sky in his solar barque (boat), which was called Atet.</p></>} />

        <TextSectionTemplate header={<h3>Family</h3>} text={<><p>In an act of auto-procreation, Ra created his children Shu and Tefnut. Shu was the god of the air, while Tefnut was the goddess of mists.</p> <p>As the god of kings and order, Ra had a special connection to maat, a key mythological concept. Maat was both the Egyptian word for “truth, justice, righteousness, order, balance, and cosmic law,” and the goddess who personified these ideals.[3] The goddess Maat was believed to have been Ra’s favorite daughter.[4] Ultimately, Egyptian rulers were expected to be champions of Maat (both the concept and the goddess), and upon death were judged on how well they had supported her.</p> <p>Though some tales held that Ra created himself (or was created by Amun and Ptah), he did have a mother. Neith, whose name meant “the terrifying one,” was a creator goddess as well as the goddess of weaving.</p></>} />

        <TextSectionTemplate header={<h3>Mythology</h3>} text={<><p>Deciphering Ancient Egyptian mythology has been described as “trying to piece together a jigsaw puzzle when the majority of the pieces are missing and someone has thrown away the box.”</p> <p>Egyptian religion endured for nearly 3,000 years. As various elements rose and fell during this time, many important myths were merged, edited, and replaced.</p> <p>While Ra became a pivotal figure in the Egyptian pantheon early on, over time his mythology began to merge with those of other gods, such as Atun, Amun, and Horus.</p></>} />




      </div>
    </div>
  )
}

export default RaTemplate

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p></>} /> */