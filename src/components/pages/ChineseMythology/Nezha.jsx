import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'


import img1 from './ChineseMythologyImages/nezha1.avif'

import ContentComponent from '../../ContentComponent';
function Nezha() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Family' }, 
      { title: 'Mythology' },
      { title: 'Origins' },
      ]} />
      <div className='godTemplate'>
        <h2>Chinese God</h2>
        <h1>Nezha</h1>

        


        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<> <p>In Chinese mythology, Nezha (哪吒) is a precocious teenage deity who serves as a patron saint of young adults. After gestating in his mother’s womb for three years and six months, Nezha was born with superhuman strength and the ability to speak. His Chinese myth is based off of the Hindu god, Nalakuvara.</p> <p></p> <p></p> <p></p> <p></p> </>} />
        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<> <p>Nezha’s name was originally borrowed from the Hindu god, Nalakuvara, and transliterated in Chinese to Nàluójiūpóluó (那羅鳩婆羅.) Over the years, his name was eventually corrupted and shortened down to Nǎzhā (哪吒), and subsequently romanized to Nezha.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_2' >Attributes</h3>} text={<> <p>Nezha is always depicted as a teenage youth who wears his hair wrapped up in a warrior’s bun. He’s typically shown wielding a large spear while wearing the Wind Fire Wheels on his feet.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_3'>Family</h3>} text={<> <p>Nezha was born to a military commander named Li Jing (who’s also known as the “pagoda-wielding heavenly king”) and a woman called Lady Yin. Nezha has two older brothers named Jinzha and Muzha. The middle brother, Muzha, is eventually murdered by Nezha while trying to defend his father against his younger brother. His eldest brother, Jinzha, becomes a disciple of the bodhisattva Wenshu Guangfa Tianzun who would later stop Nezha from killing his father.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_4'>Mythology</h3>} text={<> <p>According to the Fengshen Yanyi, a historical text known as The Creation of The Gods, Nezha was born during the Shang Dynasty to a military commander and his wife. To say that Nezha had a complicated relationship with his parents would be an understatement.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_5'>Origins</h3>} text={<> <p>His mother, Lady Yin, was pregnant with Nezha for a startling three years and six months. When she gave birth, a meaty ball of flesh emerged from her body. Her husband, thinking that his wife had just given birth to a demon, slashed at the lump of flesh with his sword. A fully grown boy lept from the ball, bowed and greeted his parents.</p> <p>Shocked at what they had just witnessed, Nezha’s parents froze with fear. However, a Buddhist monk named Taiyi Zhenren who helped deliver Nezha told them not to worry and that they had been blessed with a boy who wielded godly powers. Taiyi Zhenren then decided to take Nezha under his wing as a disciple. Despite the monk’s kind words, Nezha’s parents would always be a little bit uncertain about their youngest son.</p> <p></p> <p></p> <p></p> </>} />


      </div>
    </div>
  )
}

export default Nezha

/* <TextSectionTemplate header={<h3></h3>} text={<> <p></p> <p></p> <p></p> <p></p> <p></p> </>} /> */