import React from 'react'
import TextSectionTemplate from '../TextSectionTemplate'
import ImagePlusTextComponent from '../ImagePlusTextComponent'

import poseidon1 from '../poseidonImages/poseidon1.avif'
import poseidon2 from '../poseidonImages/poseidon2.avif'
import poseidon3 from '../poseidonImages/poseidon3.avif'
import ContentComponent from '../../../ContentComponent'

function PoseidonTemplate() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Who was Poseidon’s wife?' }, 
      { title: 'Where did Poseidon live?' }, 
      { title: 'How was Poseidon worshipped?' }, 
      { title: 'Poseidon’s Grudge Against Odysseus' }, 
      { title: 'Etymology' }, 
    
     
      ]} />
        <div className='godTemplate'>
            <h2>Olympian God</h2>
            <h1>Poseidon</h1>

            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Poseidon was a powerful Olympian and the Greek god of the seas, seafarers, earthquakes, and horses. Worshipped across the entirety of the Greek world, Poseidon had particularly strong followings in seafaring city-states, such as Athens and Corinth.</p> <p>One of the chief Olympian deities, Poseidon was a defiant god whose power was second only to that of his brother Zeus. As such, he played a major role in many Greek myths. He was usually depicted riding his beautiful horses or wielding his menacing trident.</p> </>} />
            <TextSectionTemplate header={<h3 id='content_1'>Who was Poseidon’s wife?</h3>} text={<><p>Poseidon was married to Amphitrite, a sea goddess who was typically named as one of the Nereids (the fifty daughters of Nereus and Doris). Their most famous child was Triton, a sea god often represented as a merman.</p></>} />
            <ImagePlusTextComponent image={poseidon1} text='Neptune and Amphitrite by Jacob de Gheyn II (ca. 1610)' />

            <TextSectionTemplate header={<h3 id='content_2'>Where did Poseidon live?</h3>} text={<><p>As one of the Olympian gods, Poseidon had a home on Mount Olympus. However, he spent much of his time in the depths of the sea, where he was said to have several vast underwater palaces. In literature and art, Poseidon was usually represented riding over the waves in a chariot drawn by magnificent horses (who sometimes had fins in place of legs) and wielding his great trident.</p></>} />
            <ImagePlusTextComponent image={poseidon2} text='Neptune Seated on a Marine Monster and Blowing a Conch Shell by Severo Calzetta da Ravenna (late 15th century)' />

            <TextSectionTemplate header={<h3 id='content_3'>How was Poseidon worshipped?</h3>} text={<><p>Poseidon was worshipped by Greeks everywhere, though there were many local variations in his cult. The cult of Poseidon was especially important in Corinth; the Isthmian Games, which were celebrated near Corinth every other year, were dedicated to Poseidon.</p></>} />
            <TextSectionTemplate header={<h3 id='content_4'>Poseidon’s Grudge Against Odysseus</h3>} text={<><p>Poseidon was as unruly as the seas he controlled. Already in Homer’s Iliad and Odyssey, he exerted a powerful disruptive influence on the lives of gods and mortals. In the Odyssey, Poseidon bears a special grudge against Odysseus after the hero blinds Poseidon’s son Polyphemus, a vicious Cyclops who tried to eat Odysseus and his men.</p> <p>Wishing to punish Odysseus for this act of violence, Poseidon prevented his homecoming for ten years. Odysseus was forced to wander the seas, losing all his ships and men, until Zeus himself finally commanded Poseidon to put aside his anger and allow Odysseus to return home.</p></>} />
            <ImagePlusTextComponent image={poseidon3} text='Argive krater showing Odysseus blinding the Cyclops Polyphemus (7th century BCE)' />

            <TextSectionTemplate header={<h3 id='content_5'>Etymology</h3>} text={<><p>Poseidon was present in Greek religion from the earliest times: he was already well attested in the Mycenaean period (ca. 1600–1100 BCE). Originally written in a script called Linear B, which predates the Greek alphabet, the name appears in Mycenaean texts as Po-se-da-o or Po-se-da-wo-ne. </p> <p>The name “Poseidon” likely has roots in two distinct words. The first of these is the Greek word posis, itself derived from the Proto-Indo-European root *pótis. Both words mean “husband,” “lord,” or “master.”</p> <p>Some uncertainty surrounds the second linguistic element of Poseidon’s name. One interpretation holds that it comes from the root da-, meaning “earth” or “land,” which would make “Poseidon” translate to “lord of the earth,” or perhaps even “husband of the earth.” This latter translation indicated an association with the earth goddess Demeter. Indeed, the oldest Mycenaean Greek references to Poseidon pointed to an intimate—though imprecise—relationship with Demeter, and possibly Persephone.[1]</p></>} />




        </div>
    </div>

  )
}

export default PoseidonTemplate

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p></>} /> */