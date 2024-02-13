import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'



import img1 from './CelticMythologyImages/dagda1.avif'

import ContentComponent from '../../ContentComponent';
function Dagda() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Appearance' }, 
      { title: 'Family' },
      { title: 'Mythology' }
   
      ]} />
      <div className='godTemplate'>
        <h2>Celtic God</h2>
        <h1>Dagda</h1>

        

        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<> <p>The Dagda was chief of the Tuatha dé Danann, the foremost of the Irish ancestral gods. Highly skilled and wise beyond measure, he was not only the god of life and death, but of seasons, agriculture, fertility, magic, and druidry as well. He wielded three sacred treasures: a cauldron of plenty, a club of life and death, and a harp that controlled men and seasons alike.</p> <p>His children were plentiful, as were his lovers. His dwelling place was Brú na Bóinne.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<> <p>The Dagda (Gaelic: An Dagda) was a title, meaning “the good or great god,” that reflected his mastery over many skills rather than the fortitude of his character. This Gaelic name was first derived from the Proto-Indo-European Dhagho-deiwos, or “shining divinity." As the language evolved into Proto-Celtic, the root morphed into Dago-deiwos. It is from the word Dagos that the Dagda’s name receives its two meanings: “shining” in relation to daytime, or “good” as in skilled.</p> <p>Beyond the Dagda, his many titles included Eochaid Ollathair (Horseman or All-Father), Fer Benn (the Horned Man), Ruad Rofhessa (Lord of Great Knowledge), Dáire (the Fertile One), and Cerrce (Striker), among others.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<> <p>As the “great god,” the Dagda possessed immense skill that gave him dominion over a wide range of fields. He was not only the god of life and death, but of fertility and agriculture as well. The Dagda possessed many items that granted him further abilities. He could set the seasons to order with a strum of his harp, slay or resurrect a man with his club, or provide a generous feast with his cauldron. The Dagda was also a druid, and as such had mastery over all things magical and mystical.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_3'>Appearance</h3>} text={<> <p>The Dagda was described as a giant of a man, oafish in both demeanor and attire. His beard was long and unruly, and he wore a woolen cloak about his head. His clothing never fit right, often exposing his stomach and buttocks. Nevertheless, these faults did little to distract from his good looks.</p> <p>Some scholars have theorized that his gruff appearance came from the Christians who recorded Irish myths and traditions; these early historians may have wished to make the Dagda appear comedic and foolish in contrast to their own deity. Even in these portrayals, however, the Dagda was still described as wise, witty, and wily on a consistent basis. Such versions also allowed him to remain a druid schooled in magic, art, and military strategy.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_4'>Family</h3>} text={<> <p>As chief of the Tuatha dé Danann, the Dagda fathered many children, chief among them being Aengus, Brigid, and Midir. His lovers were plentiful, but the most notable were his spouse, the fearful Morrigan, and the river goddess Boann.</p> <p>The Dagda’s parentage varied from tale to tale. In some, his parents were Elatha and Ethniu (in some tales, the latter was the daughter of King Balor); in others, his father was Badurn. His brothers were often listed as Nuada, king of the gods, and Oghma, a great champion. The Dagda and his brothers may have represented a god in three persons, as they often shared similar attributes and carried titles such as chief and king at the same time. In many myths, the brothers coexisted in a triumvirate with Nuada serving as king, the Dagda as chief/advisor, and Oghma as champion.</p> <p></p> <p></p> <p></p> </>} />
        
        <TextSectionTemplate header={<h3 id='content_5'>Mythology</h3>} text={<> <p><h4>Origins</h4>The Lebor Gabála Érenn laid out the coming of the Tuatha dé Danann, the fifth group of settlers to arrive in mythical Ireland. This group hailed from four cities north of the Emerald Isle, where they had learned the arts and sciences of their time, including magic. At this time, the Dagda was their chief. Though he did not hold the title of king, he was consulted and respected by many as if he was one.</p> <p></p> <p></p> <p></p> <p></p> </>} />



      </div>
    </div>
  )
}

export default Dagda

/* <TextSectionTemplate header={<h3></h3>} text={<> <p></p> <p></p> <p></p> <p></p> <p></p> </>} /> */