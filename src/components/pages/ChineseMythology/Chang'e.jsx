import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'


import img1 from './ChineseMythologyImages/change1.avif'

import ContentComponent from '../../ContentComponent';
function ChangE() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Family' }, 
      { title: 'Mythology' },
      
      ]} />
      <div className='godTemplate'>
        <h2>Chinese Goddess</h2>
        <h1>Chang’e</h1>

        


        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<> <p>In Chinese mythology, Chang’e (嫦娥) is best known for stealing an elixir of immortality from her husband, the legendary archer Hou Yi (后羿), and escaping to become the goddess of the moon. One of the most important and popular stories in the Chinese canon, the tale of Chang’e plays a central role in the annual Mid-Autumn Festival.</p> <p> </p> <p> </p> <p> </p> <p> </p> </>} />
        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<> <p>The goddess Chang’e’s name is comprised of cháng (嫦), a character completely unique to her name, and é (娥), meaning “pretty, young woman”. In other styles of romanization, Chang’e (嫦娥) is sometimes referred to as Chang’o.</p> <p>Chang’e was once known as Heng’e (姮娥). Her original name was changed, however, because the emperor Liu Heng (劉恆) used a similar character in his name. An emperor’s name was supposed to be unique, and having a name so similar to another Chinese cultural figure would have been considered very taboo. Thus, the name “Heng’e” was changed to “Chang’e.”</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<> <p>Prior to becoming the spirit of the moon, Chang’e was a woman renowned throughout China for her beauty. She had pale, milky skin, hair as black as night, and lips like cherry blossoms.</p> <p>In art, Chang’e is consistently depicted as a graceful young lady wearing stylish hair ornaments and long, flowing robes. She is sometimes shown holding an elegant white rabbit. Occasionally, Chang’e may be depicted as an ugly toad.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_3'>Family</h3>} text={<> <p>Chang’e is married to the legendary archer hero Hou Yi. Little is known about Chang’e’s family. In some versions of her myth, Chang’e served the Jade Emperor before being condemned to live as a mortal for accidentally breaking a porcelain pot.</p> <p>Chang’e is often confused with the less popular lunar goddess, Changxi, who gave birth to twelve moons. Some historians believe that Chang’e may be Changxi’s mother due to their similar names and status as moon goddesses.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_4'>Mythology</h3>} text={<> <p>While Chang’e is associated with a number of different myths, she is best known for stealing the elixir of immortality. This is a myth that features a few variations. In some retellings, Chang’e is forced to drink the elixir when her husband’s apprentice tries to steal it for himself. In others, Chang’e is simply a greedy women who steals the elixir out of selfishness. In all versions, however, Chang’e drinks the potion, becomes immortal, and flees to the moon.</p> <p>One of Chang’e’s earliest appearances is in the ancient divination text the Gui Cang (歸藏). This text recounts her deeds as such: “In the past Chang’e took the Western Queen Mother’s medicine of immortality and ate it, and subsequently fled to the moon, becoming the essence of the moon.”</p> <p></p> <p></p> <p></p> </>} />






      </div>
    </div>
  )
}

export default ChangE

/* <TextSectionTemplate header={<h3></h3>} text={<> <p></p> <p></p> <p></p> <p></p> <p></p> </>} /> */