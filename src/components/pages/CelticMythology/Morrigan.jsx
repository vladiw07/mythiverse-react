import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'


import img1 from './CelticMythologyImages/morrigan1.avif'

import ContentComponent from '../../ContentComponent';
function Morrigan() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Alternate Names' }, 
      { title: 'Attributes' }, 
      { title: 'Mythology' },
   
      ]} />
      <div className='godTemplate'>
        <h2>Celtic Goddess</h2>
        <h1>Morrigan</h1>

        
        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<> <p>Appearing before great battles as the goddess of war, death, and fate, the Morrígan offered prophecy and favor to heroes and gods alike. She was often depicted circling the battlefield in the form of a raven to carry away and eat carrion, though she could also appear as a beautiful woman to seduce powerful men. She was a cunning shapeshifter and a terrifying omen of death to the characters of Irish mythology.</p> <p>The Morrígan is also associated with several sacred and natural sites across Ireland.</p> <p></p> <p></p> <p></p> </>} />
        
        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<> <p>The name Morrígan appears in both Old Irish (Morrígan) and Middle Irish (Mórrígan). Scholars disagree on the exact etymology of this name, which has two different interpretations based on the first syllable of the word. Mor, from the Old Irish form of the name, can be interpreted as “phantom.”[2] According to linguist Whitley Stokes, it is a cognate of the Anglo-Saxon word maere, which still survives in the modern English nightmare.[3] However, mor is an otherwise unattested word in Old Irish. </p> <p>In the Middle Irish period the name was frequently spelled as Mór (with an accent over the “o”), which means “great.”[4] The second part of her name, rígan, means “queen”[5] and is a cognate of the Latin regina.[6] Thus, her name can be interpreted as either “Great Queen” or “Phantom Queen,” though “Great Queen” is preferred among scholars.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_2'>Alternate Names</h3>} text={<> <p>Morrígan was sometimes styled as Morrígu. Both Morrígan and its variants were occasionally used as a generic name for supernatural female figures.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_3'>Attributes</h3>} text={<> <p><h4>Tripartite Goddess</h4>One of the most prominent characteristics of the Morrígan is her tripartite nature. In many stories, she appears as both an individual and as three goddesses acting under a single name.</p> <p>The identities of the three goddesses vary depending on the source. In most cases, Badb, Macha, and Nemain are named as the Morrígan,[13] though sometimes it is given as Badb, Macha, and Dannan/Danu (or Anand/Anu).[14] Badb in particular is associated with the Morrígan’s appearance as a raven on the battlefield.[15] These goddesses are also sometimes listed as sisters of the Morrígan. The discrepancies of the members of the Morrígan are likely due to differences among local legends.</p> <p>The goddesses could also act independently of each other. In the Táin Bó Cúailgne, Nemain and Badb, two of the goddesses who make up the Morrígan, screech out to the men of Ireland under cover of night. The sound of their calls is so terrifying that 100 men die of fright.[16] The shriek of the Morrígan was a horrible omen of misfortune to come.</p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_4'>Mythology</h3>} text={<> <p><h4>Origins</h4>In Lebor Gabála Érenn, the Morrígan is named as a member of the Tuatha Dé Danann, a tribe of magical people. The tribe’s arrival in Ireland was met with resistance by earlier settler groups of the island, including the supernatural races of the Firbolg and the Fomorions. The Tuatha Dé quickly found themselves at war with the Firbolg, culminating in two fierce battles.</p> <p></p> <p></p> <p></p> <p></p> </>} />

      </div>
    </div>
  )
}

export default Morrigan

/* <TextSectionTemplate header={<h3></h3>} text={<> <p></p> <p></p> <p></p> <p></p> <p></p> </>} /> */