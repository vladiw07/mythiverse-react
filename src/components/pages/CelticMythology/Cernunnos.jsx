import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'


import img1 from './CelticMythologyImages/cernunnos1.avif'

import ContentComponent from '../../ContentComponent';
function Cernunnos() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Mythology' }, 
      
   
      ]} />
      <div className='godTemplate'>
        <h2>Celtic God</h2>
        <h1>Cernunnos</h1>

        

        <ImagePlusTextComponent image={img1} />
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<> <p>Cernunnos was the Gaelic god of beasts and wild places. Often called the Horned One, Cernunnos was a mediator of man and nature, able to tame predator and prey so they might lie down together. He remains a mysterious deity, as his original mythos has been lost to history.</p> <p>Though Cernunnos himself appeared primarily in Ancient Gaul, similar characters have been found around the world, including in other Celtic regions.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<> <p>Cernunnos was an ancient Gaelic word meaning “horned” or “horned one.” The name shares its etymology with similar words across the Celtic world, including several Gallo-Roman cognates. The use of cern for “horned” was common in Indo-European languages, such as the Greek corn (the word unicorn, referring to the one-horned horse-like creature) and several Latin taxonomic terms for antlered animals.</p> <p>In contemporary scholarship, Cernunnos has become a name used for other Celtic horned gods whose names have been lost to history. There is little evidence to suggest that the name Cernunnos was used outside of Gaul. Nevertheless, academic and religious scholars alike have used the name as a kind of catch-all for Celtic horned gods, as well as horned deities as far afield as India.</p> <p>Other titles have been added to Cernunnos over time—often by modern neopagans—such as “Lord of the Wilds” or “God of Wild Places.” Such titles have no historical basis, but have come into popular usage with the rise of neopagan traditions.</p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<> <p>Little is known of Cernunnos, for almost nothing was written about him. He was a god of wild places, and often appeared as a bearded man with antlers. Some scholars believed his name and characteristics originally belonged to a number of horned gods that were then mixed together. Others have suggested Cernunnos’ traits were taken from Greco-Roman deities of similar appearance. In any case, it is best to remember that these gods were not necessarily the same entity, but instead emerged from similar cultural origins.</p> <p>Cernunnos was a god of the wild who ruled over pristine nature and uncivilized ways. Animals were his subjects, and free-growing fruits and vegetable his bounty. Classical depictions of the deity included gatherings of animals such as elk, wolves, snakes, and aurochs. Such gatherings were possible thanks to Cernunnos’ abillity to bring natural enemies into peaceful communion with one another. This ability may have cast Cernunnos as a protector and provider amongst rural tribes and hunters.</p> <p>Similarly, Cernunnos may have been a fertility god or god of life. In some classical societies, the natural world was the origin of all life. Under this schema, the god of the wilds would also have served as a god of life, creation, and fertility.</p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3 id='content_3'>Mythology</h3>} text={<> <p>Cernunnos was a particularly mysterious deity. His name appeared only once in historical sources, and none of his tales have survived from antiquity. Modern scholars and neopagans have nevertheless attributed a number of tales to the horned god.</p> <p></p> <p></p> <p></p> <p></p> </>} />
      </div>
    </div>
  )
}

export default Cernunnos

/* <TextSectionTemplate header={<h3></h3>} text={<> <p></p> <p></p> <p></p> <p></p> <p></p> </>} /> */