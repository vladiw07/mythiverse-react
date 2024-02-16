import React from 'react'
import ContentComponent from '../../ContentComponent'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import Table from '../../Tables'

function Krishna() {
  return (
    <div className='wrapper'>
        
    <ContentComponent contentLi={[{ title: 'Overview' }, 
    { title: 'Etymology' }, 
    { title: 'Pronunciation' }, 
    { title: 'Attributes' }, 
    { title: 'Domains' },
    { title: 'Family' },
    { title: 'Family Tree' }
    ]} />
      <div className='godTemplate'>
        <h2>Hindu Hero-God</h2>
        <h1>Krishna</h1>


        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Krishna is the archetypal trickster. As an avatar of Vishnu, he straddles the line between god and man, embodying both a mischievous adolescent as well as the supreme godhead who encourages Arjuna to fight in the Bhagavad Gita. While he was undoubtedly a fiercely strong warrior, most of his exploits were accomplished through trickery. </p> <p>Krishna has worn many guises: chief protector of his clan, lover of Radha, husband of over 16,000 wives, and the supreme god who amazed his mother with a vision of the entire cosmos within his mouth.</p> <p></p> <p></p> <p></p></>} />

        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>According to Monier Monier-Williams, the Sanskrit kr̥ṣṇa can mean simply “dark, darkish, blue, black.” For this reason, depictions of Krishna show him with blue or darkened skin, similar to Rama and other Vishnu avatars. Kr̥ṣṇa also describes “the dark half of the lunar month from full to new moon.”</p> <p></p> <p></p> <p></p> <p></p></>} />

        <h3 id='content_2' style={{fontSize:'30px', position:'relative', top:'40px'}}>Pronunciation</h3>
          <Table BigHeader={[ '', '']} 
          miniHeader1={['English', 'Phonetic']} 
          miniHeader2={['Sanskrit', 'IPA']} 
          information1={['Krishna or Kr̥ṣṇa', '[Krish-nuh]']}
          information2={['	कृष्ण', '		/kr̥ɪʂɳɐ/']}
          />


      <TextSectionTemplate header={<h3 id='content_3'>Attributes</h3>} text={<><p>Krishna’s most recognizable weapon is the Sudarshana Chakra, a magical discus that returns to his hand after being thrown. This weapon, along with his blue or dark skin, emphasizes his connection with Vishnu.</p> <p></p> <p></p> <p></p> <p></p></>} />

      <TextSectionTemplate header={<h3 id='content_4'>Domains</h3>} text={<><p>As a semi-divine playboy, Krishna is well known for his erotic exploits and trickery. He embodies the concept of lila, or playful sport. He is also famous for his acts of strength and for slaying demons—somewhat comparable to the Greek hero Heracles.</p> <p></p> <p></p> <p></p> <p></p></>} />

      <TextSectionTemplate header={<h3 id='content_5'>Family</h3>} text={<><p>Krishna’s family ties are more complicated than those of other gods, as he is the biological son of Vasudeva and Devaki but was raised by Nanda and Yashoda in a small cowherding village. His brother, Balarama, remained a constant companion throughout his adventures, and his 16,000 marriages led to thousands of children. </p> <p></p> <p></p> <p></p> <p></p></>} />

      <h3 id='content_6' style={{fontSize:'30px', position:'relative', top:'40px'}}>Family Tree</h3>
          <Table BigHeader={[ 'Parents', 'Siblings', 'Consorts', 'Children']} 
          miniHeader1={['Fathers', 'Brother', 'Wives', 'Daughter']} 
          miniHeader2={['Mothers', 'Sister', 'Lovers', 'Sons']} 
          information1={['Vasudeva, Nanda', 'Balarama', 'Rukmini, Satyabhama, Kalindi, Mitravinda, Satya, Rohini, Lakshmana', 'Charumati']}
          information2={['Devaki, Yashoda', 'Subhadra', 'Radha, Gopis', 'Pradyumna, Charudeshna, Sudeshna, Charudeha, Charugupta, Bhadracharu']}
          />


      </div>
    </div>
  )
}

export default Krishna

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> <p></p></>} /> */