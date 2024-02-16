import React from 'react'
import ContentComponent from '../../ContentComponent'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import Table from '../../Tables'

import img1 from './HinduMythologyIMages/Parvati1.avif'

function Parvati() {
  return (
    <div className='wrapper'>
        
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Pronunciation' }, 
      { title: 'Attributes' }, 
      { title: 'Domains' },
      { title: 'Family' },
      
      ]} />
      <div className='godTemplate'>
        <h2>Hindu Goddess</h2>
        <h1>Parvati</h1>



        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p></p> <p></p> <p></p> <p> </p> <p></p></>} />
        <ImagePlusTextComponent boxShadow={'none'} image={img1} text='Painting of Parvati with green skin, arrayed in jewelry and holding a lotus. Tamil Nadu, ca 1850. British Museum, London.' />
        <TextSectionTemplate header={<h3></h3>} text={<><p>Compared to other goddesses of Indian mythology, Parvati is set apart for two reasons. </p> <p>Firstly, she is known for practicing extreme asceticism, a set of practices normally reserved for men in ancient Indian society. These practices include leaving home, living on only one meal a day, meditating for hours, holding one arm above one’s head for years at a time, making four fires and sitting between them during the hottest part of the day, dressing in tree bark, and so on. In this way, she mirrors her husband Shiva, also known as an ascetic god.</p> <p>She is also important due to her identification with a number of different goddesses—both warlike and wrathful goddesses such as Kali and Durga and more peaceful goddesses such as Ambika, Sati, and Annapurna. Worshippers see her as either a manifestation of one of these goddesses or as the ultimate source of them.</p> <p>Aside from her asceticism and association with mountainous areas, Parvati is worshipped as a goddess of hearth and home, marriage, and family. But she is by no means a passive goddess. According to one tale in the Shiva Purana, she grew so angry at the death of her child Ganesha that she summoned an army of celestial warrior goddesses and assaulted the heavens. She was only calmed once Ganesha was brought back to life.</p> <p>Parvati also actively pursues her own goals; for example, she undertook her extreme asceticism in order to impress Shiva and convince him to marry her. Even after this plan succeeded, Parvati had to persuade him to be properly married in accordance with orthdox Hindu Brahmanical rites. Later, Parvati insisted on having a child despite Shiva’s reluctance and mockery.</p> <p>Having “tamed” the wild god Shiva, who usually keeps a safe distance from normal society, she has become the embodiment of domestic home life. The fact that both Parvati and Shiva enthusiastically practice austerities in the mountains—the antithesis of the orthodox Hindu householder ideal—makes them a complicated couple.</p></>} />

        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>The etymology of Parvati’s name is straightforward: it derives from the Sanskrit parvata, meaning “mountain” or “mountainous.” Pārvatī is an adjectival form of parvata, denoting her descent from her father, the personification of the Himalayan Mountains, whose names include “Himavan” and “Himavat” (also meaning “mountain”). In this sense, “Parvati” means either “Mountainous One” or “Daughter of the Mountain.”</p> <p></p> <p></p> <p> </p> <p></p></>} />

        <h3 id='content_2' style={{fontSize:'30px', position:'relative', top:'40px'}}>Pronunciation</h3>
          <Table BigHeader={[ '', '']} 
          miniHeader1={['English', 'Phonetic']} 
          miniHeader2={['Sanskrit', 'IPA']} 
          information1={['Parvati or Pārvatī', '[PAR-vuh-tEE]']}
          information2={['	पार्वती', '		/ paːrʋɐtiː /']}
          />


        <TextSectionTemplate header={<h3 id='content_3'>Attributes</h3>} text={<><p>Parvati is often depicted holding such objects as a lotus, vase, rosary, mirror, or trident. She is sometimes shown gesturing, an indication that she is granting boons.</p> <p></p> <p></p> <p> </p> <p></p></>} /> 

        <TextSectionTemplate header={<h3 id='content_4'>Domains</h3>} text={<><p>Because of the lengths Parvati went to in order to marry Shiva, she is known as a goddess of fertility, love, marriage, and the householder ideal in general—a foil to her starkly ascetic husband. Yet the extreme austerities she practices high in the Himalayas also make her a symbol of asceticism and shakti (feminine power). </p> <p></p> <p></p> <p> </p> <p></p></>} />

        <TextSectionTemplate header={<h3 id='content_5'>Family</h3>} text={<><p>Due to Parvati’s status as a symbol of both domesticity and shakti, family is essential to her mythology. Her most important relationships are with her husband, Shiva, the god of destruction, and her sons Ganesha and Karttikeya, gods of removing obstacles and war, respectively.</p> <p></p> <p></p> <p> </p> <p></p></>} />

        <Table BigHeader={[ 'Parents', 'Siblings', 'Consorts', 'Children']} 
          miniHeader1={['Fathers', 'Sisters', 'Husband', 'Sons']} 
          miniHeader2={['Mother', '']} 
          information1={['Himavati, Daksha', 'Ragini, Kutila', 'Shiva', 'Skanda Karttikeya, Ganesha, Andhaka']}
          information2={['Mena', '']}
          />



      </div>
    </div>
  )
}

export default Parvati


/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> <p></p></>} /> */