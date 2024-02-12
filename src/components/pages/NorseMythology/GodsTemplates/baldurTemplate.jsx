import React from 'react'
import ImagePlusTextComponent from '../../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../../Mythologies/TextSectionTemplate'
import baldur1 from './baldurImages/baldur1.avif'
import baldur2 from './baldurImages/baldur2.webp'

import ContentComponent from '../../../ContentComponent'
function BaldurTemplate() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Family' }, 
      
      ]} />
      <div className='godTemplate'>
        <h2>Norse God</h2>
        <h1>Baldur</h1>

        <ImagePlusTextComponent image={baldur1} />
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Shining Baldur of the Aesir tribe was the loveliest and most beloved of all the gods of the Norse pantheon. Baldur exuded charm, and was so physically beautiful that he gave off light. He was also described as the wisest of all the gods. As an arbiter of disputes, he settled feuds among gods and men.</p> <p>Baldur’s death as a result of Loki’s treachery was one of the central stories of Norse mythology. Universally lamented by the gods and by (most of) humanity, Baldur’s demise precipitated Loki’s imprisonment and helped set in motion the events of Ragnarök, the end of days.</p></>} />

        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>“Baldur” was originally thought to come from an Old Norse word, baldr, meaning “bold,” or “brave.” It could be, however, that the descriptor baldr was named after the god, rather than the god being named after it. Modern scholars have suggested that the name was rooted in the proto Indo-European word bhel-, meaning “white.” Words for “white” were commonly used to describe Baldur and other Norse deities. Such words were often translated as “bright” or “shining,”as their meaning referred not only to the color, but to the god’s associated qualities—brilliance, beauty, and clarity—as well.</p></>} />
        <ImagePlusTextComponent boxShadow={'none'} image={baldur2} />
        <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<><p>Baldur’s chief attributes were his fairness, beauty, and likeability. He possessed a great ship called Hringhorni (meaning “ship with a circle on its stem,”) which was said to be the greatest ship ever constructed. Upon Baldur’s death, the ship was turned into a massive funeral pyre for his body and set to drift downriver.</p> <p></p></>} />

        <TextSectionTemplate header={<h3 id='content_3'>Family</h3>} text={<><p>Baldur was the son of Odin, chief of the Aesir and highest of all gods, and Frigg, a goddess of wisdom with the power of foresight. He had a brother, Hodr, as well as several half-brothers by way of Odin. These half-brothers included Thor, Vidarr, Tyr, Heimdall, Hermod, and Bragi. Another half-brother, Váli, was conceived by Odin and the giantess Rindr after Baldur’s death in order to avenge him.</p> <p>Baldur married the goddess Nanna, and together they had a son named, Forseti, a god associated with peace and justice. Once grown, Forseti established a hall for himself called Glitnir, where he, like his father, settled grievances and reconciled foes.</p></>} />
      </div>
    </div>
  )
}

export default BaldurTemplate

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p></>} /> */