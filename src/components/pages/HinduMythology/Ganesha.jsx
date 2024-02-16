import React from 'react'
import ContentComponent from '../../ContentComponent'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import Table from '../../Tables'

import img1 from './HinduMythologyIMages/Ganesha1.avif'

function Ganesha() {
  return (
    
      <div className='wrapper'>
        
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Pronunciation' }, 
      { title: 'Attributes' }, 
      { title: 'Domains' },
      { title: 'Family Tree' },
      { title: 'Mythology' }
      ]} />
      <div className='godTemplate'>
        <h2>Hindu God</h2>
        <h1>Ganesha</h1>
        
        
        
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Ganesha, the son of the powerful gods Shiva and Parvati, is one of the most popular gods in modern Hinduism and is widely worshipped throughout South and Southeast Asia. Even people in predominantly Buddhist countries, such as Thailand, devoutly worship the god.</p> <p>As the remover of obstacles, worshippers call on him every day for matters great and small. His popularity far exceeds the number of stories about him, as there are relatively few myths of Ganesha compared to other popular figures like Vishnu and Shiva.</p> <p>He has the head of an elephant and rides upon a mouse. This portly god often appears in iconography with four arms holding a bowl of modaks (sweet dumplings), his broken tusk, and an axe, noose, or trident. Statues commonly portray him with a hand raised, palm facing outward in abhayamudra, a gesture meant to dispel fear.</p> <p> </p> <p></p></>} />
        
        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>The etymology of “Ganesha” is straightforward: the name is a compound word formed of two parts. The first, gaṇa (गण​), in its simplest sense refers to a troop, multitude, gang, or tribe.[1] In this context, however, it refers to a group of lesser gods who have devoted themselves to Shiva and Parvati as servants and warriors. The second component, isha (ईश​), means “lord, master, husband, ruler.” In this way, “Ganesha” simply means that he is lord of Shiva’s attendants, or captain of the guard.</p> <p>“Ganapati” is another popular name for Ganesha and is similar in meaning: pati (पति) also translates as “lord, master.”</p> <p></p> <p> </p> <p></p></>} />

        <h3 id='content_2' style={{fontSize:'30px', position:'relative', top:'40px'}}>Pronunciation</h3>
          <Table BigHeader={[ '', '']} 
          miniHeader1={['English', 'Phonetic']} 
          miniHeader2={['Sanskrit', 'IPA']} 
          information1={['Ganesha', '[Guh-NAY-shuh]']}
          information2={['गणेश​', '	/ gəˈɳe ʃə /']}
          />

        <TextSectionTemplate header={<h3 id='content_3'>Attributes</h3>} text={<><p>Owing to his love of sweets, Ganesha is usually depicted as having a pot belly, with his elephant’s trunk tilted toward a plate of sweet modak buns. In his hands he often bears some combination of a trident, noose, goad, or axe; his broken tusk; a lotus; and prayer beads. With a free hand he sometimes gestures in abhayamudra. His vehicle is a small mouse.</p> <p></p> <p></p> <p> </p> <p></p></>} />
        <ImagePlusTextComponent image={img1} text='Seated Ganesha holding a bag of modaks, his broken tusk, an elephant goad, and snakes. Metropolitan Museum of Art, New York, ca. 14th–15th century.' />
        <TextSectionTemplate header={<h3 id='content_4'>Domains</h3>} text={<><p>Because Ganesha broke off his own tusk so that he could continue writing the Mahabharata, he is considered a god of learning, writing, and poetry. Although he displays the great martial prowess of his father, Shiva, and is able to fend off armies of gods and demons, he is not primarily known as a warrior. Above all else, worshippers pray to him as a remover of obstacles both mundane and extraordinary.</p> <p></p> <p></p> <p> </p> <p></p></>} />

        <h3 id='content_5' style={{fontSize:'30px', position:'relative', top:'40px'}}>Family Tree</h3>
          <Table BigHeader={[ 'Parents', 'Siblings', 'Consorts', 'Children']} 
          miniHeader1={['Father', 'Brother', 'Wives', 'Sons']} 
          miniHeader2={['Mother', '']} 
          information1={['Shiva', 'Skanda Karttikeya', 'Siddhi, Buddhi', 'Kshema, Labha']}
          information2={['Kshema, Labha​','']}
          />

        
        <TextSectionTemplate header={<h3 id='content_6'>Mythology</h3>} text={<><p><h4>Origins</h4>Scholars in the early twentieth century identified Ganesha as a natural progression from a rural harvest god, with Gupte arguing that Ganesha once bore the name Mushaka Vahan, “He Whose Vehicle Is a Mouse,” or “Mouse Rider.”[3] As the rat is always a pest for farmers and agricultural workers, Ganesha’s use of a rat as a vehicle symbolized that the god had conquered the rodent and was therefore a godsend for farmers. Gupte also argues that Ganesha’s nickname, Ekadanta (“One Tooth”), originally meant a scythe or plowshare.</p> <p>Thani-Nayagam disagrees with this characterization and instead identifies Ganesha as a fusion of several different pre-Aryan malign spirits who inhabited forests and jungles.[4] As such, he was a god who had to be worshipped and appeased before any of the other gods in order to avoid obstacles and supernatural catastrophes. </p> <p>Other explanations abound, including the possibility that Ganesha began as a Dravidian sun god or that he was originally an aspect of Shiva or his Vedic forebear, Rudra.</p> <p>S. M. Michael traces the term gaṇapati throughout Vedic and Puranic literature and concludes that while it originally referred to a troublemaker and “catastrophe incarnate,” it came to mean a remover of obstacles around the fifth or sixth century CE.[5] He suggests that warfare between tribes was the cause for this transformation: a tribe whose patron god was an elephant conquered a nearby tribe whose patron deity was a rat. Ganesha riding on a rat then symbolized the tribe’s conquest of their neighbors and elevated him to a benevolent god.</p> <p>Although Ganesha is undoubtedly one of the most popular gods of Hinduism today, there are remarkably few stories featuring him as a central character. What stories there are have a number of variants in Hindu mythology.</p></>} />




      </div>
    </div>
    
  )
}

export default Ganesha


/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p> </p> <p></p></>} /> */