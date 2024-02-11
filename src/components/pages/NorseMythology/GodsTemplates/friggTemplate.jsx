import React from 'react'
import ImagePlusTextComponent from '../../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../../Mythologies/TextSectionTemplate'
import frig1 from './friggImages/frigg1.avif'

function FriggTemplate() {
  return (
    <div className='wrapper'>
      <div className='godTemplate'>
        <h2>Norse Goddess</h2>
        <h1>Frigg</h1>

        <TextSectionTemplate header={<h3>Overview</h3>} text={<><p>Best known as the wife of Odin, Frigg was a ruling member of the Aesir tribe and the queen of all Norse deities. Despite her leading status, Frigg’s place in Norse mythology remains uncertain. She was rarely discussed in primary sources, and her precise characteristics and personality remain unclear. Frigg held power over many areas of life, and was associated with fertility, marriage and the household, love and sexuality, and wisdom and prophecy.</p></>} />
        <ImagePlusTextComponent image={frig1} />
        <TextSectionTemplate header={<h3></h3>} text={<><p>Historically, most scholars considered Frigg to be an aspect of Freya, a goddess of the Vanir tribe, as her basic characteristics aligned closely with those of Frigg. Like Freya, Frigg was a völva, or practitioner of the magical art of seidr, and sought to divine or alter the future through ritual. While the two goddesses were often presented as separate deities, they likely evolved from a single deity whose personality oscillated violently enough to merit separate identities. Freya, for instance, was known for sexual indulgence and promiscuity; Frigg, meanwhile, was more conservative in her sexual morality.</p></>} />

        <TextSectionTemplate header={<h3>Etymology</h3>} text={<><p>The name “Frigg” was derived from the Proto-Germanic *frijaz, meaning “beloved, dear.” The English day of the week "Friday," may be related to the goddess by way of the Old English word Frīġedæġ, meaning “Frigg’s day.”</p></>} />

        <TextSectionTemplate header={<h3>Attributes</h3>} text={<><p>As wife of Odin, Frigg was the undisputed queen of the Norse gods. In art from the nineteenth and early twentieth centuries, Frigg was often depicted sitting on a throne or holding a commanding pose.</p> <p>Frigg dwelled in Fensalir, a watery realm that likely took the form of a bog, marsh, or wetlands. She owned an ashen box called an eski, which the goddess Fulla toted around for her; the box’s contents were unknown. She was also known to have a set of falcon plumes that the gods, notably Loki, used to shapeshift into bird form.</p></>} />

        <TextSectionTemplate header={<h3>Family</h3>} text={<><p>Frigg’s parentage remains unknown. Later in life, Frigg married Odin, with whom she had Hermod and Baldur, the shining deity known as the wisest of the Aesir gods.</p></>} />

        <TextSectionTemplate header={<h3>Mythology</h3>} text={<><p>Frigg played a prominent role in two Norse myths, featured in the Grímnismál of the Poetic Edda and the Gylfaginning of the Prose Edda, respectively. Both tales painted Frigg as both a maternal figure and a ruler in her own right.</p></>} />


      </div>
    </div>
  )
}

export default FriggTemplate


/* <TextSectionTemplate header={<h3></h3>} text={<><p></p></>} /> */