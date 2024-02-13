import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import ContentComponent from '../../ContentComponent'
import TableComponent from '../../TableComponent'

import img1 from './HinduMythologyIMages/vishnu1.avif'
import img2 from './HinduMythologyIMages/vishnu2.avif'

import Table from '../../../components/Tables'


function Vishnu() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Pronunciation' }, 
      { title: 'Alternate Names' }, 
      { title: 'Attributes' },
      { title: 'Family' }, 
      { title: 'Family Tree' },
      
      ]} />
      <div className='godTemplate'>
        <h2>Hindu God</h2>
        <h1>Vishnu</h1>
        
        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>As the preserver god, Vishnu keeps the cosmos running smoothly, ensuring that everyone and everything is in its proper place. He sends his avatars to earth in order to restore dharma, the righteous order of the universe, whenever it is threatened.[1] Often this threat takes the form of some demon or titan who tries to overthrow the rule of the gods. Famous examples of Vishnu’s avatars include Rama and Krishna, heroic figures of the Ramayana and the Mahabharata who are worshipped in their own right.</p> <p>Other avatars serve as primordial creators and shapers of the world, such as the boar avatar, Emusha, who dredges up the earth from the cosmic ocean and divides it into continents.</p> <p></p> <p> </p> <p></p></>} />

        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>According to Monier Monier-Williams, the name “Vishnu” probably derives from the Sanskrit root √viṣ, meaning “to work, perform, rule, subdue.”[2] Although he renders “Vishnu” as “Worker,” he acknowledges the common translation of the name as “the All-Pervader”—perhaps in reference to the widespread adjective vishva, meaning “all-pervader, omnipresent,” ascribed to Vishnu in the Vishnu Sahasranama.</p> <p></p> <p></p> <p> </p> <p></p></>} />

        <h3 id='content_2' style={{fontSize:'30px', position:'relative', top:'40px'}}>Pronunciation</h3>
          <Table BigHeader={[ '', '']} 
          miniHeader1={['English', 'Phonetic']} 
          miniHeader2={['Sanskrit', 'IPA']} 
          information1={['Vishnu or Viṣṇu', '[VISH-noo]']}
          information2={['	विष्णु', '/’ʋɪʂɳʊ/']}
          />

        <TextSectionTemplate header={<h3 id='content_3'>Alternate Names</h3>} text={<><p>Vishnu and his avatar Krishna loom large in the Mahabharata, which has a long hymn devoted to his names, titled the Vishnu Sahasranama (“The Thousand Names of Vishnu”). His most popular epithets include: <ul style={{paddingLeft:'30px'}}><li>Hari (हरि), “Carrying [Away]”</li><li>Narayana (नारायण​), “He Whose Abode is Water”</li><li>Prajapati (प्रजापति), “Lord of Progeny”</li><li>Vasudeva (वासुदेव​), “Son of Vasudeva”</li></ul></p> <p></p> <p></p> <p> </p> <p></p></>} />

        <TextSectionTemplate header={<h3 id='content_4'>Attributes</h3>} text={<><p>One of the features shared by all of Vishnu’s avatars is blue skin. His vehicle is Garuda, the semi-divine king of the birds. Vishnu is often depicted holding a mace, a lotus, a conch shell, and his favorite weapon, the discus.</p> <p></p> <p></p> <p> </p> <p></p></>} />

        <TextSectionTemplate header={<h3 id='content_5'>Family</h3>} text={<><p>According to Vaishnava traditions of Hinduism, Vishnu stands as the supreme god and is self-born (svayambhu), without a mother or father. This feature is shared with Shiva in Shaivite traditions. Vishnu’s wife is Lakshmi, goddess of fortune, prosperity, and wealth.</p> <p></p> <p></p> <p> </p> <p></p></>} />
        <ImagePlusTextComponent image={img2} text="Vishnu reclining on the great serpent Shesha and floating on the cosmic ocean. Brahma is born from a lotus growing from Vishnu's navel. As he awakens between cosmic ages, Lakshmi massages his feet, ca. 1800 CE." />

        <h3 id='content_6' style={{fontSize:'30px', position:'relative', top:'40px'}}>Family Tree</h3>
          <Table BigHeader={[ 'Consorts']} 
          miniHeader1={['Wife', 'Phonetic']} 
          miniHeader2={['', '']} 
          information1={['Lakshmi', '[VISH-noo]']}
          information2={['', '/’ʋɪʂɳʊ/']}
          />

      </div>
    </div>
  )
}

export default Vishnu

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p> </p> <p></p></>} /> */