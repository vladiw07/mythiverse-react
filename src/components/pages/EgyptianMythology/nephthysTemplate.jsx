import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import nephthys1 from './egyptianGodSectionImages/nephthys1.avif'
import nephthys2 from './egyptianGodSectionImages/nephthys2.avif'
import ContentComponent from '../../ContentComponent'

function NephthysTemplate() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Family' }, 
      { title: 'Mythology' },
      ]} />
      <div className='godTemplate'>
        <h2>Egyptian Goddess</h2>
        <h1>Nephthys</h1>



        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Nephthys was the youngest child of the sky goddess Nut and earth god Geb. Unlike her brothers and sister, she was a relatively minor deity in the Egyptian pantheon. Though Nephthys was married to Set, her relationship with him was distant at best. Her relationship with Osiris, however, was both more intimate and significant. Nephthys seduced him and subsequently gave birth to Anubis, who would ultimately be raised by her sister Isis. Nephthys was also a key figure in Egyptian funeral rites.</p></>} />
        <ImagePlusTextComponent image={nephthys1} text='This silver statuette of Nephthys (715–650 BCE) was likely worn as an amulet in temples to invoke the protection of the goddess.' />
        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>Nephthys’s name meant “Lady of the Mansion,” or “Lady of the House.” [1] In this context, the word “house” meant the portion of the sky in which the sun god Horus resided; as such, the name likely referred to priesthood rather than homemaking.</p></>} />

        <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<><p>In art, Nephthys was usually depicted as a woman bearing the sign of her name atop her head. Like her sister Isis, she was sometimes shown as a kite (a small bird of prey).</p> <p>Nephthys and her sister Isis were commonly sights in tombs, as both goddesses attended the mummification of Osiris and served as protectors of the dead. The two goddesses were often depicted as identical, save for the symbols atop their heads. This detail proved to be significant during Nephthys’s seduction of Osiris, in which she deceived him into believing that she was, in fact, Isis.</p></>} />
        <ImagePlusTextComponent image={nephthys2} text='The interior of the coffin of Imenemipet (1069-945 BCE). Nephthys appears on the left, while Isis appears on the right; a cartouche bearing Osiris’s name lies between them. The kite forms of each goddess can be seen behind their respective human forms.' />
        <TextSectionTemplate header={<h3></h3>} text={<><p>Nephthys was one of several Egyptian weaving gods, and the bandages Osiris was wrapped in were sometimes referred to as the “tresses of Nephthys.”</p></>} />

        <TextSectionTemplate header={<h3 id='content_3'>Family</h3>} text={<><p>Nephthys was the youngest child of the gods Nut and Geb. Her siblings included Osiris, Horus the Elder, Isis and Set. It’s important to note that Horus the Elder was found exclusively in Greek sources; non-Greek sources did not include him amongst Nut and Geb’s offspring.</p> <p>Like Isis and Osiris, Nephthys and Set were married before birth.[5] Though the marriage of Isis and Osiris was full of love, Nephthys and Set’s relationship was not. In later myths, Nephthys had an affair with Osiris and gave birth to his son Anubis. Fearing that Set would discover her infidelity, Nephthys discarded her child in the wilderness. Anubis was ultimately rescued and raised by Isis.</p></>} />

        <TextSectionTemplate header={<h3 id='content_4'>Mythology</h3>} text={<><p>Despite having the same lofty origins as her brothers and sisters, Nephthys was only ever a supporting character in Egyptian mythology. Though her siblings developed cults of worship, Nephthys had no such cult. She was, however, a common figure on amulets made during the Late Period (664–332BCE).</p> <p>With few exceptions, Nephthys always appeared in myths alongside her sister Isis. Together, the two sisters represented the “wailing women” that were an integral part of the Egyptian funerary rites.</p></>} />




      </div>
    </div>
  )
}

export default NephthysTemplate

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p></>} /> */