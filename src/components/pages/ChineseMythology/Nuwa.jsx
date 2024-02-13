import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'


import img1 from './ChineseMythologyImages/nuwa1.avif'

import ContentComponent from '../../ContentComponent';
function Nuwa() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Family' }, 
      { title: 'Mythology' }, 
      { title: 'Pop Culture' },
   
      ]} />
      <div className='godTemplate'>
        <h2>Chinese Goddess</h2>
        <h1>Nuwa</h1>

        


        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<> <p>In Chinese mythology, Nüwa (女媧) is considered to be the first being with the ability to procreate and is the creator of all mankind. Ancient Chinese society was fiercely matriarchal, so Nüwa, being the mother of all humans, was considered a very important deity. She has a hand in a number of stories but is most commonly associated with China’s creation myth and for saving humanity by mending a hole in the sky after a great flood. Today, Nüwa is still a popular deity and is usually prayed to by women who need divine assistance with marital affairs or fertility issues.</p> <p>In art, she’s usually depicted as a supernatural creature with a human face and a long serpentine body but is also sometimes simply drawn as a woman dressed in traditional Chinese hanfu.</p> <p></p> <p></p> <p></p> </>} />
        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<> <p>Nüwa’s name, 女媧, is made up of the Chinese character for woman, nǚ (女), and a character that is completely unique to her name, wā (媧). In other styles of romanization, her name is sometimes written as Nü Gua or Nü Kua. Nüwa is also sometimes referred to respectfully as wā huáng (媧皇) which translates literally as “Empress Huang.”</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_2'>Family</h3>} text={<> <p>Nüwa’s mother is the goddess Huaxu (华胥) who became suddenly pregnant when she was wandering the universe and stepped in a footprint left by the god of thunder, Leigong (雷公). Nüwa is married to her brother Fuxi (伏羲). In some versions of the creation myth, Fuxi is credited with creating mankind with Nüwa through their union. He’s seen as the inventor of hunting, cooking, and the Chinese writing system.</p> <p></p> <p></p> <p></p> <p></p> </>} />
        
        <TextSectionTemplate header={<h3 id='content_3'>Mythology</h3>} text={<> <p>There are two widely told versions of China’s creation story. The most commonly told one is where Nüwa crafts humanity from river clay.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_4'>Pop Culture</h3>} text={<> <p>Although China’s opinion on traditional religious beliefs went through massive changes during the Cultural Revolution, Nüwa is still an important figure in popular culture and is contemporarily regarded as something of a historical figure. Though many temples dedicated to Nüwa and her brother Fuxi can be found throughout the Chinese-speaking world, her most important temple is located in Hebei Province and is seen as the ancestral shrine of all humans.</p> <p></p> <p></p> <p></p> <p></p> </>} />

      </div>
    </div>
  )
}

export default Nuwa

/* <TextSectionTemplate header={<h3></h3>} text={<> <p></p> <p></p> <p></p> <p></p> <p></p> </>} /> */