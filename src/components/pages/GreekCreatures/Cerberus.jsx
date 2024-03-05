import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'


import img1 from './images/cerberus1.avif'

import ContentComponent from '../../ContentComponent'


function Cerberus() {
  return (
    <div className='wrapper'>
        <ContentComponent contentLi={
            [{ title: 'Overview' },
             { title: 'Etymology' },
              { title: 'Alternate Names' },
               { title: 'Titles and Epithets' },
                ]} />
        <div className='godTemplate'>
            <h2>Greek Creature</h2>
            <h1>Cerberus</h1>


            <ImagePlusTextComponent image={img1} />
            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Cerberus was the offspring of Typhoeus and Echidna and the guard dog of the Underworld. A servant of Hades (the Greek god of the dead), Cerberus prevented the inhabitants of the Underworld from returning to the land of the living. He was well suited to this task: in most traditions, Cerberus was a gigantic hound with three heads and a mane of snakes. In some versions he was even more terrifying, with fifty or even one hundred heads.</p> <p>As his twelfth and final labor, Heracles was sent to fetch Cerberus from the Underworld. This was the most daunting of Heracles’ deeds and was accomplished only with the aid of the gods.</p> <p></p> <p></p> </>} />
            
            <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>The etymology of Cerberus’ name is uncertain. Some ancient sources believed that the name “Cerberus” was derived from the Greek word kreōboros, meaning “flesh-devouring.”</p> <p>Modern scholars mostly dismiss this etymology, but they agree on little else. Some have attempted to trace the name to an Indo-European origin through the Sanskrit sarvarā (“spotted”), the epithet of one of the dogs of Yama (the god of death).[2] Bruce Lincoln, a professor of religion at the University of Chicago, has suggested a connection with Garmr, one of Hel’s guard dogs in Norse mythology.[3] According to Lincoln, both names may have been derived from the Proto-Indo-European root *ger-, meaning “to growl.” </p> <p>Such Indo-European etymologies have been met with skepticism, however.[4] Whatever the origins of Cerberus’ name, it is most likely pre-Greek. </p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_2'>Alternate Names</h3>} text={<><p>In Homer, Cerberus was called simply “the hound” (kyōn).[5] Other sources called him “the hound of Hades.”</p> <p></p> <p></p> <p></p> </>} />
            
            <TextSectionTemplate header={<h3 id='content_3'>Titles and Epithets</h3>} text={<><p>The epithet trikranos, “three-headed,” was sometimes used for Cerberus.</p> <p></p> <p></p> <p></p> </>} />

        </div>
    </div>
  )
}

export default Cerberus

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */