import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'


import img1 from './ChineseMythologyImages/fuxi1.avif'

import ContentComponent from '../../ContentComponent';
function Fuxi() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Family' }, 
      { title: 'The Creation of Mankind' }, 
      { title: 'Pop Culture' }, 
      
      ]} />
      <div className='godTemplate'>
        <h2>Chinese God</h2>
        <h1>Fuxi</h1>

        

        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<> <p>In Chinese mythology, Fuxi is seen as mankind’s first male ancestor, a cultural hero, and one of the most benevolent gods in Ancient China. Fuxi is credited with creating several innovations that benefited humanity like the invention of the writing system, fishing, and the domestication of animals.</p> <p>Fuxi is often portrayed in art as having the head of a human and the body of a snake—like his sister, Nüwa. He’s also sometimes simply drawn as a wise, sage-like man dressed in animal skins or long yellow robes.</p> <p></p> <p></p> <p></p> </>} />
        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_1'>Family</h3>} text={<> <p>Fuxi is married to his sister Nüwa. Their mother is the goddess, Huaxu, who suddenly became pregnant with twins after stepping in a footprint left by the thunder god, Leigong.</p> <p>In one version of the creation myth, Fuxi created humanity with his sister, Nüwa through their marriage. Nüwa is considered to be the original mother goddess in Chinese mythology.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_2'>The Creation of Mankind</h3>} text={<> <p>Fuxi is also said to have played a role in mankind's creation. In one version of the myth, Fuxi and his sister, Nüwa, married and produced the human race through their union. In another, Fuxi helped Nüwa make humanity from clay and helped her patch up the sky after the battle between Zhurong (祝融) and Gonggong (龔工). However, his role in creating humanity and subsequently saving them from the great flood is considered to be a lot less significant than his sister's contribution. Since Ancient Chinese society was largely matriarchal, he's usually described as an "assistant" whenever he's mentioned alongside Nüwa.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_3'>Pop Culture</h3>} text={<> <p>A month-long festival is held from February 2 to March 3 of the lunar calendar to honor Fuxi at his temple in Tianshui City. His birthday, the 16th day of the lunar calendar, is especially important. People from neighboring provinces make the journey to light incense, pray, and pay their respects to Fuxi. People often call upon to Fuxi to improve their health, the state of their financial affairs, or to simply thank their original ancestor.</p> <p>Fuxi has been featured as a character in the video games Dynasty Warriors and Age of Mythology. In Marvel's first Chinese-centric comic, Warriors of Three Sovereigns, the character Lin Lie wields a weapon called the "Fuxi sword" and is said to be the last descendant of Fuxi.</p> <p></p> <p></p> <p></p> </>} />

      </div>
    </div>
  )
}

export default Fuxi

/* <TextSectionTemplate header={<h3></h3>} text={<> <p></p> <p></p> <p></p> <p></p> <p></p> </>} /> */