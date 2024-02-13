import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'


import img1 from './ChineseMythologyImages/JadeEmperor1.avif'

import ContentComponent from '../../ContentComponent';
function JadeEmperor() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Family' }, 
      { title: 'Mythology' },
      ]} />
      <div className='godTemplate'>
        <h2>Chinese God</h2>
        <h1>Jade Emperor</h1>

        

        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<> <p>One of the most important and popular figures in Chinese mythology, the Jade Emperor (玉皇) is the supreme ruler of Heaven and the first emperor of China. He is also considered to be an especially important Taoist deity. With all of its specialized roles and social hierarchies, the Jade Emperor’s court parallels the structure of ancient Chinese monarchies. The emperor’s fairness, benevolence, and mercy were traits that real Chinese emperors sought to emulate.</p> <p>Even today, the Jade Emperor plays a significant role in Chinese life, especially around Chinese New Year. During the New Year, the Jade Emperor is said to judge the character of each individual over the past year and punish or reward them accordingly.</p> <p></p> <p></p> <p></p> </>} />
        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<> <p>The Jade Emperor’s name consists of the Chinese characters yù (玉), meaning “jade,” and dì (皇), meaning “emperor.” However, the Jade Emperor has many other names and titles as well. His full title, written as yǜ huáng shàng dì ( 玉皇上帝), means the “Pure August Emperor on High,” though this is seldom used. The Jade Emperor is more commonly referred to as tiān gōng (天公), or “heavenly grandfather.”</p> <p></p> <p></p> <p></p> <p></p> </>} />
        
        <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<> <p>In art and cinema, the Jade Emperor is usually depicted as a middle-aged man sporting a thin mustache and a long, sagely goatee. He typically appears wearing long, flowing robes and sitting on a royal throne, though he is also sometimes depicted wearing full battle armor and wielding a large sword.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_3'>Family</h3>} text={<> <p>The Jade Emperor is married to the Celestial Queen Mother, Xiwangmu (西王母). The couple are said to have had an enormous amount of children together, and three of their daughters hold important places in Chinese mythology.</p> <p>Zhu niang-niang is a fertility goddess that helps couples in need of children, and Yen-kuang nian-niang is the protector of the blind who can grant the power of eyesight to those in need. Perhaps their most famous daughter, Zhinü is famous not for her role as a goddess but for her actions: she infamously fell in love with a human and suffered as a result.</p> <p></p> <p></p> <p></p> </>} />
        
        <TextSectionTemplate header={<h3 id='content_4'>Mythology</h3>} text={<> <p><h4>Origins</h4>In some versions of his origin story, the Jade Emperor came into existence when the universe was created by Pangu (盤古). In most popular myths, he is commonly described as having been a mortal man prior to becoming a god.</p> <p><h4>The Origin of the Jade Emperor as a Soldier</h4>The Jade Emperor was said to have been a soldier named Zhang Denglai who fought in a bloody civil war during the Zhou Dynasty. In the midst of a particularly vicious battle, Denglai and his entire battalion were wiped out. When Denglai woke up in the afterlife, he found his commander handing out honorary positions in the celestial court to each of the other soldiers.</p> <p>Gradually, all of the men were awarded positions in the court except for the commander and Denglai. His commander was secretly scheming to save the highest ranking position of Jade Emperor for himself. Just as he was about to declare himself emperor, however, he paused and said “děng lái,” meaning “wait a moment.” In those days, it was customary for high officials and royals to pause before accepting a promotion and reflect on the great responsibilities they would be taking on. Seeing a huge opportunity, Denglai feigned ignorance of this tradition and acted as if he had heard his name. Thus, Denglai stepped forward and accepted the role of the Jade Emperor.</p> <p></p> <p></p> </>} />

        

      </div>
    </div>
  )
}

export default JadeEmperor

/* <TextSectionTemplate header={<h3></h3>} text={<> <p></p> <p></p> <p></p> <p></p> <p></p> </>} /> */