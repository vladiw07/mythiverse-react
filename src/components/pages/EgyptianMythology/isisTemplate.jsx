import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'

import isis1 from './egyptianGodSectionImages/isis1.avif'
import isis2 from './egyptianGodSectionImages/isis2.avif'



function IsisTemplate() {
  return (
    <div className='wrapper'>
      <div className='godTemplate'>
        <h2>Egyptian Goddess</h2>
        <h1>Isis</h1>




        <TextSectionTemplate header={<h3>Overview</h3>} text={<><p>One of the best-known goddesses in the Egyptian pantheon, Isis was the granddaughter of Ra, wife of Osiris, and mother of Horus. While she was best known as a powerful sorceress and healer, she was also a fiercely protective mother and loyal wife. Her acts of healing and compassion were renowned throughout the land; those who threatened her loved ones, however, did so at their own peril.</p> <p></p> <p></p> <p></p> </>} />
        
        <TextSectionTemplate header={<h3>Etymology</h3>} text={<><p>The etymology of the Egyptian gods’ names have largely been lost to time and translation. Nevertheless, some information relating to Isis’s etymology has been discovered. Isis was generally depicted wearing a crown resembling the hieroglyph for “throne.” Her name—as written in Ancient Egyptian—incorporated this glyph as well. Thus, Isis’s name was commonly understood to mean “throne goddess.”</p> <p></p> <p></p> <p></p> </>} />
        <ImagePlusTextComponent image={isis1} text='This statuette of Isis (611–594 BCE) once nursed a baby Horus figure (now missing). Her headdress of cow horns and a solar disk is in line with common depictions of the goddess in Late Period Egypt. This headdress was also associated with the goddess Hathor, whose mythology often coverged with that of Isis.' />
        <TextSectionTemplate header={<h3>Attributes</h3>} text={<><p>Isis was a goddess of contradictions. While she could be bloodthirsty and ruthless, she was also compassionate and loyal. She was known for her acts of healing, but her grief could also cause the death of innocents. Isis happily extorted her grandfather Ra so that her unborn son Horus could lay claim to the throne. Later, when Horus was engaged in a competition with his uncle Set, Isis cheated on her son’s behalf. On yet another occasion, she released a captured Set out of familial obligation.</p> <p>She was an immensely powerful sorceress known for her wondrous healing spells.</p> <p>Isis was usually depicted in human form, and could sometimes be seen carrying a sistrum (an ancient percussion instrument). The myths and imagery surrounding Isis and another goddess, Hathor, were sometimes conflated. Isis would, at times, bear the cow horns and solar disk more commonly associated with Hathor.</p> <p></p> </>} />

        <ImagePlusTextComponent image={isis2} text='In this ancient Roman statue, Isis holds a sistrum, or rattle-like percussion instrument, in her right hand.' />
        <TextSectionTemplate header={<h3>Family</h3>} text={<><p>Isis was the fourth child born to the gods Nut and Geb. Her older siblings included Osiris, Horus the Elder[3] and Set; she also had a younger sister named Nephthys.</p> <p>Isis conceived her son, Horus the Younger, with her deceased brother/husband Osiris. Isis’s relationship with Osiris was somewhat peculiar: the two began their relationship in the womb and thus were born as husband and wife.</p> <p>She raised Anubis, the bastard child of Osiris and Nephthys, as her own after his mother abandoned him.</p> <p></p> </>} />

        <TextSectionTemplate header={<h3>Mythology</h3>} text={<><p>Isis was an extremely complex goddess, which may explain the longevity of her cult.</p> <p>While other Egyptian gods were replaced or discarded, Isis continued to be worshipped long into the Greek and Roman periods. For a time, the prevailing thought in Greco-Roman culture was that Isis had created the world, and that all of the other gods were simply alternative names for Isis.[5] Isis’s cult remains active to this day, as the goddess has become a part of modern paganism.</p> <p></p> <p></p> </>} />




      </div>
    </div>
  )
}

export default IsisTemplate

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */