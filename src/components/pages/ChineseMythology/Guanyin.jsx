import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'


import img1 from './ChineseMythologyImages/guanyin1.avif'

import ContentComponent from '../../ContentComponent';
function Guanyin() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Family' }, 
      { title: 'Mythology' },
      { title: 'Origins: The Legend of Miao Shan' },
      ]} />
      <div className='godTemplate'>
        <h2>Chinese Goddess</h2>
        <h1>Guanyin</h1>

        

        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<> <p>Guanyin is originally based on the Hindu god Avalokiteśvara. Avalokiteśvara’s myth spread throughout China during the advent of Buddhism and mixed with local folklore in a process known as syncretism to become the modern day understanding of Guanyin. Though she can take both male and female form, she is most often represented as a woman in Chinese lore.</p> <p></p> <p></p> <p></p> <p></p> </>} />
        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<> <p>Guanyin’s name was translated from the deity’s original Sanskrit name “Avalokiteśvara,” which means “he who hears the voices of the suffering,” into Guānshìyīn (觀世音) which means “the one who hears the sound of the world.”</p> <p>Over time, her name was eventually shortened to Guānyīn (觀音). Her name represents her ability to hear all the cries of suffering in the world and her infinite compassion. In the Wade-Giles style of romanization, her name is written as Kuanyin.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<> <p>Guanyin is usually depicted wearing a flowing white robe and jade necklaces. In Chinese culture, the colors white and jade both symbolize purity. She often carries a vase of water in one hand and a willow branch in the other, and is typically shown standing on the back of a dragon, sitting on a lotus flower, or riding on clouds.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_3'>Family</h3>} text={<> <p>Although she is reincarnated multiple times, Guanyin was originally the daughter of King Zhuang of Chu and his wife, Lady Fan. She has two attendants, Longnü, a granddaughter of the Dragon King, and Shancai, one of her disciples.</p> <p></p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_4'>Mythology</h3>} text={<> <p>Guanyin plays a role in a number of Chinese myths and is always portrayed as a powerful, benevolent figure who is motivated by a supreme sense of compassion.</p> <p></p> <p></p> <p></p> <p></p> </>} /> 

        <TextSectionTemplate header={<h3 id='content_5'>Origins: The Legend of Miao Shan</h3>} text={<> <p>Before she became the goddess of compassion, Guanyin was once a young girl named Miao Shan (妙善) who was born to King Zhuang of Chu and his wife, Lady Yin. But, there was something different about Miao Shan that set her apart from other girls. As soon as she had the ability to speak, Miao Shan began to chant Buddhist sutras.</p> <p>When she grew old enough for her father to think about marrying her off to some powerful lord, she told him that she had no desire to marry and aspired to become a Buddhist nun. She said she would only agree to an arrangement if it would help solve three problems: the suffering of age, the suffering of sickness, and the suffering of death.</p> <p>Unable to find a match that could meet her demands, her father reluctantly agreed to allow her to join a Buddhist temple. Before letting her go, however, he ordered the monks to give Miao Shan the hardest work to discourage her, forcing the young girl to work day and night without sleep.</p> <p>Much to her father’s chagrin, the young forest animals who lived around the temple took pity on the young girl and began to help her with the chores. He became so enraged upon learning Miao Shan was getting help that he set fire to the temple, but she intervened and extinguished the flames with her bare hands. Now fearing that his daughter was possessed by some kind of demon, her father sentenced her to death.   </p> <p>On the day of Miao Shan’s death sentence, she went meekly to the execution block. But when the executioner brought his axe down upon her neck, the axe shattered into a thousand pieces. His sword also broke, and arrows from his bow veered off course. Seeing how much trouble she was causing the executioner, Miao Shan forgave him, let herself be killed and absorbed the karma of his actions, so he wouldn’t have to pay for her death in the afterlife.</p> <p>When she arrived in Hell, the Earth around her burst into life with blossoming flowers. Seeing all the suffering souls around her, Miao Shan began to weep with sorrow. She released all the positive karmic energy she had accumulated and allowed millions of souls to escape from Hell. Yan Wang (閻王), fearing that his whole kingdom would collapse, allowed her to return to Earth as the enlightened being, Guanyin.   </p> </>} />

      </div>
    </div>
  )
}

export default Guanyin

/* <TextSectionTemplate header={<h3></h3>} text={<> <p></p> <p></p> <p></p> <p></p> <p></p> </>} /> */