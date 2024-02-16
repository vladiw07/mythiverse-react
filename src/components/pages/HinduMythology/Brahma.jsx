import React from 'react'
import ContentComponent from '../../ContentComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import Table from '../../Tables'

import img1 from './HinduMythologyIMages/Brahma1.avif'
import img2 from './HinduMythologyIMages/Brahma2.avif'

function Brahma() {
  return (
    <div className='wrapper'>
        
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Pronunciation' }, 
      { title: 'Attributes' }, 
      { title: 'Domains' },
      { title: 'Family Tree' },
      
      ]} />
      <div className='godTemplate'>
        <h2>Hindu God</h2>
        <h1>Brahma</h1>

        


        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>The four-faced god Brahma is widely represented throughout Hindu and Buddhist mythology.  When not serving as the creator god, he usually acts as an advisor to his fellow deities. Many of his appearances in myth involve him playing the role of a generous lord who gives out gifts, boons, and blessings to those who practice enough austerities and asceticism to impress him. The time it takes to impress Brahma can be cosmically long—sometimes only hundreds of years, but more often hundreds of millions of years.</p> <p>Often these gifts and blessings are the inciting incidents for further myths. For instance, demons and titans gain blessings that render them nearly indestructible, and even the gods suffer in their fights against them. As a result, the gods must concoct complicated plans in order to kill the demons without violating Brahma’s blessings.</p> <p></p> <p> </p> <p></p></>} />
        <ImagePlusTextComponent boxShadow={'none'} image={img1} text="Gouache painting of four-headed Brahma riding on his vahana, or vehicle, a goose or swan. In his hands he holds a water vessel and a book. His other hands are in Abhaya Mudra and Varada Mudra, gestures for dispelling fear and giving out blessings. He is seated in lalitasana, or sporting pose, showing that he is relaxed but ready to stand at a moment's notice. Tamil Nadu. 1830." />
        <TextSectionTemplate header={<h3></h3>} text={<><p>One such story sees Brahma granting the demon Hiranyakashipu the ability to no longer be slain during the day or night, by a man or animal, on the ground or in the sky, or by any weapons. Hiranyakashipu used his near invincibility to conquer the cosmos. In the end, Vishnu incarnated as the avatar Narasingha (“Man-Lion”) in order to defeat the demon despite these stipulations: Narasingha, being neither man nor animal, killed Hiranyakashipu with his claws (without weapons), holding him in place on his thigh (neither on the ground nor in the sky).</p> <p>By the time of the epics and the Hindu Puranas, Brahma’s stature and importance had declined in favor of other Puranic gods, such as Shiva, Vishnu, and Ganesha. Today there are only a handful of temples devoted to Brahma in India, though there are others throughout Southeast and East Asia devoted to the Buddhist Brahma. </p> <p>According to the Brahmavaivarta Purana, this unpopularity is the result of a curse on Brahma by the sage Narada, who declared that Brahma would remain largely unworshipped for three eons before gaining worshippers again. Another story from the Skanda Purana claims that his unpopularity comes from Shiva’s curse, which he laid on Brahma for having lied to the other gods.</p> <p> </p> <p></p></>} />

        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>The origins of the name “Brahma” are more complicated than those of other Hindu figures such as Shiva (“Auspicious”) or Ganesha (“Lord of the Ganas”). What is certain is that the name shares semantic overlap with other notable words in Hinduism—in particular, Brahman and Brahmin. </p> <p>Upanishadic literature, which sprung up around 500 BCE, posits the existence of a universal, genderless, and all-pervading essence to the universe and all beings within it, which it calls “Brahman.” The creator god Brahma is popularly characterized as a personification of that essence. Brahmins, on the other hand, are the priestly caste of traditional Indian society, responsible for reciting and passing down Vedic and Brahmanical knowledge. </p> <p>The distinctions between Brahma, Brahman, and Brahmin are blurred at times; for example, Brahma is often depicted as a wizened old sage with a beard and a white thread worn across his body—a symbol of the Brahmin caste. Brahma’s general demeanor and reputation likewise fit the sagely archetype.</p> <p>It is likely that all three terms derive from the Sanskrit verb root √br̥h or √br̥ṃh, meaning “swell, grow, increase, be thick,”[1] which carries connotations of holiness across Indian religions. In Hinduism, for example, brahmacharin refers to a young and unmarried Brahmin who is still a student studying the Vedas, while in Buddhism, brahmachariya refers to someone on the religious path leading to liberation from the cycle of birth and death.</p> <p></p></>} />

        <h3 id='content_2' style={{fontSize:'30px', position:'relative', top:'40px'}}>Pronunciation</h3>
          <Table BigHeader={[ '', '']} 
          miniHeader1={['English', 'Phonetic']} 
          miniHeader2={['Sanskrit', 'IPA']} 
          information1={['Brahma or Brahmā', '[Bruh-HMAH]']}
          information2={['	ब्रह्मा', '/brɐɦmaː/']}
          />


        <TextSectionTemplate header={<h3 id='content_3'>Attributes</h3>} text={<><p>Brahma’s most striking visual characteristics are his red skin, four arms, and four heads, representing either the four cardinal directions or the four Vedas. Unlike the other gods of the Hindu trimurti, Brahma does not usually carry weapons; instead, he is often portrayed carrying a water jug, a mala (rosary), a ladle, a book, and/or a lotus. In addition, he sometimes displays the abhaya mudra, the gesture for dispelling fear. He is usually depicted sitting on a lotus or a swan, which serves as his vahana, or vehicle. Sarasvati, goddess of learning and the arts, is his wife.</p> <p></p> <p></p> <p> </p> <p></p></>} />
        <ImagePlusTextComponent image={img2} text="Rajasthani painting of a female worshipper offering an oblation to Four-headed Brahma. In his hands he holds a rosary, a book, and a lotus. Metropolitan Museum of Art, New York, ca. 1675." />
        <TextSectionTemplate header={<h3 id='content_4'>Domains</h3>} text={<><p>Brahma is chiefly regarded as the god of creation, but he is also closely associated with sagehood, wisdom, Brahmins, and the Vedas.</p> <p></p> <p></p> <p> </p> <p></p></>} />

        <h3 id='content_5' style={{fontSize:'30px', position:'relative', top:'40px'}}>Family Tree</h3>
          <Table BigHeader={[ 'Consorts', 'Children']} 
          miniHeader1={['Wives', 'Daughter']} 
          miniHeader2={['', 'Sons']} 
          information1={['Sarasvati, Savitri', 'Shatarupa']}
          information2={['', 'Bhrigu, Vasishtha, Atri, Pulastya, Marichi, Daksha, Angiras, Kratu, Pulaha, Sanaka, Sananda, Sanatana, Sanatkumara, Manu, Arani, Vodhu, Narada, Prachetas, Hamsa, Yati']}
          />
        



      </div>
    </div>
  )
}

export default Brahma


/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p> </p> <p></p></>} /> */