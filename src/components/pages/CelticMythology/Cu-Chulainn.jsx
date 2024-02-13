import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'


import img1 from './CelticMythologyImages/cuChullain1.avif'

import ContentComponent from '../../ContentComponent';
function CuChulainn() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Alternate Names' }, 
      { title: 'Attributes' }, 
      { title: 'Mythology' }, 
     
   
      ]} />
      <div className='godTemplate'>
        <h2>Celtic Hero</h2>
        <h1>Cu Chulainn</h1>

        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<> <p>Cú Chulainn was the great warrior-hero of the Ulster Cycle. As a demigod born of a mortal mother and a divine father, he defended Ulster from many threats with his unstoppable rage, inhuman strength, and iron will. His passions were great, his sorrows deep, and his feats awe-inspiring. To this day, he remains Ireland’s best-known folk hero.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_1'>Alternate Names</h3>} text={<> <p>Cú Chulainn, meaning “Hound of Culann,”[1] was a nickname that the warrior earned as a young boy. Various spellings of Cú Chulainn can be found across Old and Middle Irish texts, including Cú Chulaind and Cúchulain, due to the unstandardized nature of Irish language at the time. Cú Chulainn’s birth name was Sétanta, meaning “one who has knowledge of roads and ways.”</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<> <p>From an early age, Cú Chulainn trained in Ireland and Scotland to become the deadliest warrior of his era. His skill was unmatched, and he was more than capable of taking on many foes at once. His strength and athletic ability were so great that he was able to metabolize a sleeping potion in just one hour—despite it being potent enough to make an ordinary man sleep for an entire day.</p> <p>Cú Chulainn rode into battle on a chariot driven by his charioteer, Laeg, and his horses, Liath Macha and Dub Sainglend. Liath Macha has been described as the King of Steeds.[6] Cú Chulainn made use of several different weapons in battle, the most notable being his slingshot and the Gae Bolga. Over the years, scholars have debated exactly what kind of weapon the Gae Bolga was, but the general consensus is that it was a sort of deadly spear that would release several small barbs into its victim.</p> <p>Cú Chulainn was bound by two separate geas, or magical taboos, that provided him with great strength—provided he did not break their rules. The first of these rules was that Cú Chulainn must take and eat any food offered to him by a woman; the second was that he could not eat dog meat in any form. These geas would ultimately lead to his demise, when he was forced to make an impossible choice between the two in Aided Con Culainn (The Death of Cú Chulainn).</p> <p></p> <p></p> </>} />  

        <TextSectionTemplate header={<h3 id='content_3'>Mythology</h3>} text={<>  <p><h4>Birth, Childhood, and Youth</h4>Deichtine, sister of the king of Ulster, Conchobar mac Nessa, joined her brother on a hunting expedition chasing magical birds. After being waylaid by a sudden snowstorm, they took shelter inside a house where a woman was in labor. As thanks for the shelter, Deichtine helped to deliver the baby boy. He was born at the same time as some foals in the barnyard; thus, the boy was given a foal as a gift.</p> <p>In the morning, Deichtine and her brother’s men awoke at Brú na Bóinne—far from where they had taken refuge the night before. The boy who had been delivered was taken in as Deichtine’s foster child but died at a young age. </p> <p>Soon after, the mighty god Lugh appeared to Deichtine in a dream and told her she had been in his house and was now pregnant with his child, who was to be called Sétanta. As Deichtine was engaged to Sualtam mac Róich, she was ashamed to be pregnant with the child of another man and decided to abort the pregnancy. She later gave birth to a child by Sualtam, whom she called Sétanta at Lugh’s request. Thus, Sétanta was thrice-conceived.</p> <p>Sétanta was fostered by several men, including his uncle Conchobar, and had many foster brothers. Sétanta’s youth was full of impressive feats; as a child, he fended off 150 spears with his toy shield, won the fealty of the boy-warriors of Emain Macha, beheaded full-grown men, tamed wild animals, and killed the ferocious hound of Culann.[21] As recompense for slaying Culann’s dog, Sétanta swore to serve as his hound until a suitable replacement could be found, thus earning him the nickname “Hound of Culann,” or Cú Chulainn.</p> <p>Shortly afterward, Cú Chulainn heard a prophecy that the man who took up arms on a certain day would become the greatest warrior of his age—but also die young. After taking up arms on that day, he proved his strength by going into his first ríastrad at the age of seven.</p> <p>Cú Chulainn was later sent from Ireland to Scotland to train under the famed female warrior Scáthach. There, he faced her sister and rival, Aífe, whom he impregnated after defeating her in combat. When he returned to Ireland, Cú Chulainn married Emer, whose hand had been promised to him eight years earlier.</p> </>} />
      </div>
    </div>
  )
}

export default CuChulainn

/* <TextSectionTemplate header={<h3></h3>} text={<> <p></p> <p></p> <p></p> <p></p> <p></p> </>} /> */