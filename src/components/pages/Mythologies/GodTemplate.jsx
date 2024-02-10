import React from 'react'
import './GodTemplate.css'
import ImagePlusTextComponent from './ImagePlusTextComponent'
import athenaImage1 from './images/athenaImage1.avif';
import athenaImage2 from './images/athenaImage2.avif';
import TextSectionTemplate from './TextSectionTemplate';

function GodTemplate() {
  return (
    <div className='wrapper'>
    <div className='godTemplate'>
        <h2>Greek Goddess</h2>
        <h1>Athena</h1>
        <TextSectionTemplate header={'Overview'} text={'Athena was the goddess associated with wisdom, craftwork, and war. As one of the Twelve Olympians and the patron goddess of Athens, she lent her favor and guidance to many famous Greek heroes. In myth, Athena was typically characterized by her intelligence and tact, though some stories emphasized her more destructive passions, such as her terrible anger. The heart of Athena’s cult was in Athens. This was the site of her greatest sanctuaries, including the famous Parthenon. The Athenians also celebrated lavish festivals in honor of Athena, such as the Panathenaea.'} />
        
    </div>
    <ImagePlusTextComponent image={athenaImage1} text="Attic black-figure tripod showing the birth of Athena, the daughter of Zeus and the Oceanid Metis, from the head of Zeus. Attributed to the C Painter (ca. 570–260 BCE). Found in Thebes." />
    <TextSectionTemplate header={'How was Athena born?'} text="Athena was the daughter of Zeus, the king of the gods, and his first wife, the Oceanid Metis. But the precise circumstances of Athena’s birth were unusual. In the familiar tradition, Zeus heard a prophecy that his wife was destined to bear a child who would overthrow him. To prevent this, Zeus swallowed Metis before she could give birth.

But Metis was already pregnant with Athena, and the goddess eventually sprang forth from her father’s forehead, fully grown and wearing armor. It was thus often said that Athena had no mother, having been birthed by her father Zeus alone." />
    <TextSectionTemplate header={'What were Athena’s attributes?'} text='A virgin goddess, Athena usually appeared decked out for war, with helmet, shield, and spear. She was often accompanied by her favorite animal, the owl. In literature especially, Athena also carried the aegis, an impervious shield, and bore the Gorgon’s head on her armor.

In the midst of war—where she was most commonly depicted—Athena embodied rationality, tactics, and strategy. Her cold logic stood in direct contrast to her brother Ares’ rage, violence, and impulsiveness.' />
    <ImagePlusTextComponent image={athenaImage2} text='The "Varvakeion Athena" (first half of the third century CE), after the Athena Parthenos by Phidias' />





    </div>
  )
}

export default GodTemplate