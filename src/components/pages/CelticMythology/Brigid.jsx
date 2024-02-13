import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'


import img1 from './CelticMythologyImages/brigid1.avif'

import ContentComponent from '../../ContentComponent';
function Brigid() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Family' }, 
      { title: 'Mythology' },
      { title: 'OriginS' }
      ]} />
      <div className='godTemplate'>
        <h2>Celtic Goddess</h2>
        <h1>Brigid</h1>

        

        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<> <p>Brigid, or the Exalted One, was the Irish goddess of spring, fertility, and life. Beloved by poets, she was the master of both healing and smithing. Her holiday, Imbolc, was held on February 1st and marked the midpoint of winter. Many of Ireland’s wells and waterways were devoted to her.</p> <p>As a member of the Tuatha Dé Danann, Brigid was the wife of High King Bres and mother of Ruadán. She shares many similarities with the Catholic St. Brigid of Kildare, the patron saint of Ireland.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<> <p>Brigid has been Anglicized from the Old Irish Brid in multiple ways: Brigit, Brig, or Bride (from which the word bride is derived). Stemming from the Proto-Celtic word Briganti, meaning “the High One” or “the Exalted One,” Brigid is the origin of the popular name Bridget. The name likely refers to the goddess’s connection to sunlight and fire, but may also be related to dawn goddesses across the Indo-European world. Brigid is derived from the Proto-Indo-European root for “to rise” or “high”, as is the English word bright.</p> <p>Brigid was also known as the Goddess of the Wells, due to her connection to wells and waterways.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<> <p>Brigid was a goddess full of contradiction. She was a goddess of healing, fertility, and motherhood, but also of passion and fire. Further complicating matters, Brigid was a goddess of serenity and water as well. Evidence of her worship has been found throughout Ireland, reflecting her importance as a powerful, yet personal deity. When she was not protecting mothers and newborn children, Brigid inspired many of the writers and poets for which Ireland is internationally renowned.</p> <p>Brigid often appeared as a fiery-haired goddess wearing a cloak of sunbeam. She appears primarily in the form of a maiden or a mother, depending on the tale. These multiple forms may have been reflective of her status as a triple goddess.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_3'>Family</h3>} text={<> <p>Brigid’s father was the Dagda—the Great God—a chief of the Tuatha Dé Danann. It was through the Dagda that Brigid had many siblings, including her brothers Aengus and Midir. In some sources, her mother was Danu, a powerful river goddess and the namesake mother-goddess of the Tuatha Dé Danann (“Children of Danu”). Brigid married Bres, the High King of the Tuatha Dé Danann, and by him had a son, Ruadán.</p> <p>In another tale, Brigid was the wife of Tuireann, and mother of his three sons, Brian, Iuchar, and Irchaba. The Sons of Tuireann slew Cian, the father of Lugh of the Long-Arm, while he was transformed into a pig.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_4'>Mythology</h3>} text={<> <p>Brigid appeared in a number of Celtic myths and legends, often in roles that showcased her wide range of skills and vast knowledge.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_5'>Origins</h3>} text={<> <p>The Lebor Gabála Érenn established Brigid as the wife of Bres and daughter of the Dagda, placing her in a position of high esteem. She came to Ireland alongside the rest of the Tuatha Dé Danann. Shortly after their arrival, the tribe came into conflict with the Firbolg and the Formorians, prior settlers that controlled the majority of Ireland.</p> <p></p> <p></p> <p></p> <p></p> </>} />




      </div>
    </div>
  )
}

export default Brigid

/* <TextSectionTemplate header={<h3></h3>} text={<> <p></p> <p></p> <p></p> <p></p> <p></p> </>} /> */