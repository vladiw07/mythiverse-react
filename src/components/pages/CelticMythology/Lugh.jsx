import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'


import img1 from './CelticMythologyImages/lugh1.avif'

import ContentComponent from '../../ContentComponent';
function Lugh() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Mythology' }, 
      
   
      ]} />
      <div className='godTemplate'>
        <h2>Celtic God</h2>
        <h1>Lugh</h1>

        

        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<> <p>The Irish god of nobility, Lugh of the Long Arm was a master of crafts and a cunning warrior. He was both Ollamh Érenn and King of the Tuatha Dé Danann, and wielded the Spear of Assal, which none could stand against.</p> <p>His dwellings were at Tara in County Meath, and at Moytura, in County Sligo. His holy day was Lughnasa, which fell on August 1st.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<> <p>Lugh, sometimes spelled Lug, was a popular name in Ireland and throughout the Celtic world. Despite its popularity, its meaning has been the source of considerable debate. It has been suggested that the name stems from the Proto-Indo-European root lewgh-, meaning “to bind by oath.” This meaning would referencing Lugh’s role in regards to oaths and contracts. It has also been suggested that the name is connected to the word “light,” though modern scholars find this unlikely.</p> <p>His titles were numerous, but the most famous was Lámfada, “Of the Long Arm,” a reference to the length of his spear in battle. Alternately, the title could be translated as “Artful Hands,” a reference to his skill in craftsmanship. He was Ildánach (the Skilled God), mac Ethleen/Ethnenn (son of Ethliu/Ethniu, his Fomorian mother) and mac Cien (son of Cian, his Tuatha Dé Danann father). He was also Macnia (the Youthful Warrior), Lonnbéimnech (the Fierce Striker), and Conmac (Son of the Hound).</p> <p>Lugh was also the first Ollamh Érenn, or Chief Ollam of Ireland. This historic title reflected his skills as a poet, judge, and ruler; following Lugh’s death, the role became a ranked position in each of the Irish courts. While every kingdom had an ollam that served the chief or king, each of the High Kings of Ireland had their own Chief Ollam.</p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<> <p><h4>Skills and Domains</h4>Lugh was a master of many talents. As the god of oaths, he held domain over rulers and nobility. He also served as the god of justice in its many forms; his judgement was often swift and without mercy. In what may seem like a contradiction, Lugh was also a trickster who was willing to lie, cheat, and steal to overcome his opponents.</p> <p>As son of both the Tuatha Dé Danann and Fomorians, Lugh had a unique heritage. Such a background assisted him in inventing a number of notable Irish games, including horse-racing, sports, and fidchell, the Irish precursor to chess.</p> <p></p> <p></p> <p></p> </>} />
        
        <TextSectionTemplate header={<h3 id='content_3'>Mythology</h3>} text={<> <p><h4>Origins</h4>Numerous legends exist regarding the birth of Lugh. Cath Maig Tuired described the marriage of Cian and Ethniu as a dynastic union between the invading Tuatha Dé Danann and the Formorians of Ireland. A later folktale differed, speaking of a prophecy that warned King Balor of the Fomorians would be slain by his grandson. As a precautionary measure, Balor hid his daughter Ethniu locked in a tower on Tory Island. Cian used the magic of a fairy woman named Biróg to transport himself into the tower, where he seduced Ethniu; she eventually gave birth to triplets. Upon discovering his daughter’s children, Balor ordered a servant to drown them. Two of the children died, but one of them fell into the harbor and was rescued by Biróg, who took him to his father. Cian fostered the surviving child, Lugh, and protected him.</p> <p></p> <p></p> <p></p> <p></p> </>} />

      </div>
    </div>
  )
}

export default Lugh

/* <TextSectionTemplate header={<h3></h3>} text={<> <p></p> <p></p> <p></p> <p></p> <p></p> </>} /> */