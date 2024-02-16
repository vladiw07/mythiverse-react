import React from 'react'
import '../GodTemplate.css'

import ImagePlusTextComponent from '../ImagePlusTextComponent'
import athenaImage1 from '../images/athenaImage1.avif';
import athenaImage2 from '../images/athenaImage2.avif';
import athenaImage3 from '../images/athenaImage3.avif';
import athenaImage4 from '../images/athenaImage4.avif';
import athenaImage5 from '../images/athena5.avif';
import athenaImage6 from '../images/athenaImage6.avif';
import athenaImage7 from '../images/athenaImage7.png';
import athenaImage8 from '../images/athena8.avif';
import athenaImage9 from '../images/athena9.avif';
import athenaImage10 from '../images/athena10.avif';
import TextSectionTemplate from '../TextSectionTemplate';
import ContentComponent from '../../../ContentComponent';

function athenaTemplate() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'How was Athena born?' }, 
      { title: 'What were Athena’s attributes?' }, 
      { title: 'Where was Athena worshipped?' }, 
      { title: 'The Contest for Athens' },
      { title: 'Etymology' },
      { title: 'Other Names' },
      { title: 'Epithets' },
      { title: 'Attributes' },
      { title: 'Family' },
      { title: 'Mythology' },
      
      ]} />
    <div className='godTemplate'>
        <h2>Greek Goddess</h2>
        <h1>Athena</h1>
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Athena was the goddess associated with wisdom, craftwork, and war. As one of the Twelve Olympians and the patron goddess of Athens, she lent her favor and guidance to many famous Greek heroes.</p> <p> In myth, Athena was typically characterized by her intelligence and tact, though some stories emphasized her more destructive passions, such as her terrible anger. <p></p> The heart of Athena’s cult was in Athens. This was the site of her greatest sanctuaries, including the famous Parthenon. The Athenians also celebrated lavish festivals in honor of Athena, such as the Panathenaea.</p></>} />
        
    </div>
    <ImagePlusTextComponent image={athenaImage1} text={<><p>Attic black-figure tripod showing the birth of Athena, the daughter of Zeus and the Oceanid Metis, from the head of Zeus. Attributed to the C Painter (ca. 570–260 BCE). Found in Thebes.</p></> }/>
    <TextSectionTemplate header={<h3 id='content_1'>How was Athena born?</h3>} text= {<><p>Athena was the daughter of Zeus, the king of the gods, and his first wife, the Oceanid Metis. But the precise circumstances of Athena’s birth were unusual. In the familiar tradition, Zeus heard a prophecy that his wife was destined to bear a child who would overthrow him. To prevent this, Zeus swallowed Metis before she could give birth.</p> <p>But Metis was already pregnant with Athena, and the goddess eventually sprang forth from her father’s forehead, fully grown and wearing armor. It was thus often said that Athena had no mother, having been birthed by her father Zeus alone.</p></>} />
    <TextSectionTemplate header={<h3 id='content_2'>What were Athena’s attributes?</h3>} text= {<><p>A virgin goddess, Athena usually appeared decked out for war, with helmet, shield, and spear. She was often accompanied by her favorite animal, the owl. In literature especially, Athena also carried the aegis, an impervious shield, and bore the Gorgon’s head on her armor.</p> <p>In the midst of war—where she was most commonly depicted—Athena embodied rationality, tactics, and strategy. Her cold logic stood in direct contrast to her brother Ares’ rage, violence, and impulsiveness.</p></>} />
    <ImagePlusTextComponent image={athenaImage2} text='The "Varvakeion Athena" (first half of the third century CE), after the Athena Parthenos by Phidias' />
    <TextSectionTemplate header={<h3 id='content_3'>Where was Athena worshipped?</h3>} text={<><p>While Athena was broadly worshipped throughout the Greek world, her cult was particularly strong in Athens. There the goddess was commemorated via the construction of several public buildings, including the famed Parthenon on the Acropolis. The Athenians also celebrated extravagant festivals in honor of Athena, such as the Panathenaea, which involved processions, sacrifices, and athletic games.</p></>} />
    <ImagePlusTextComponent image={athenaImage3}  text={'Photo of the ruins of the Parthenon in Athens'}/>
    <TextSectionTemplate header={<h3 id='content_4'>The Contest for Athens</h3>} text={<><p>An important Athenian myth told of how, early in the city’s mythical past, Athena and Poseidon competed for the right to become the patron god of Athens. Each god presented the people with a gift: Poseidon struck the ground with his trident and brought forth a stream, while Athena produced the first olive tree. The Athenians chose Athena, and Athens remained her city thereafter.</p></>} />
    <ImagePlusTextComponent image={athenaImage4} text='Poseidon and Athena Battle for Control of Athens by Benvenuto Tisi (1512)' />
    <TextSectionTemplate header={<h3 id='content_5'>Etymology</h3>} text={<><p>Scholars have debated the origin of the name “Athena” since the time of Plato; his dialogue Cratylus contained a rare and lengthy discussion of the history of the name. Speaking through the figure of Socrates, Plato attributed the name’s origin to Homer, who had cobbled it together from the Greek words nous (“mind”) and dianoia (“intelligence”). As Plato put it: “The maker of names [Homer] appears to have had a singular notion about her, and indeed calls her by a still higher title, ‘divine intelligence’ (theou noēsis).”[1]</p> <p>Though Plato’s discussion of Homer provides some insight into Athena’s esteemed reputation, this explanation for her name is almost certainly incorrect. According to the best available evidence, the name “Athena” is connected to Athēnai, the Greek name for the city of Athens. </p> <p>In a kind of “chicken-or-egg” dilemma, scholars have debated whether the city was named for the goddess or the goddess for the city; nowadays, however, it is generally believed that the goddess Athena took her name from the city of Athens.[2] This is probably why the goddess does not have an individual name in the earliest texts from ancient Greece (Mycenaean inscriptions from the Bronze Age), in which she is called simply a-ta-na po-ti-ni-ja—“Lady” or “Mistress of Athens.”</p> <p>Such a naming scheme was not uncommon among the ancient polytheists, who frequently named deities after the places with which they were most commonly associated. Unfortunately, the origins of the word Athēnai are shrouded in mystery: the root is neither Greek nor Indo-European.[3] Thus, the meaning of the name “Athena” remains unclear.</p></>} />
    <TextSectionTemplate header={<h3 id='content_6'>Other Names</h3>} text={<><p>Athena’s name is sometimes transliterated as Athene [uh-THEE-nee] rather than Athena. The ancient Greeks also called the goddess Pallas Athena or simply Pallas.</p> <p>Athena’s Roman counterpart was Minerva.</p></>} />
    <TextSectionTemplate header={<h3 id='content_7'>Epithets</h3>} text={<><p>Athena was called many things. Perhaps her most common epithet (which sometimes functioned as an alternate name) was Pallas. The origins of this title are ancient and obscure and became much intertwined with Athena’s mythos (see below). </p> <p>Athena’s other important titles included Parthenos (“virgin”), Promachos (“she who fights in the front”), and Erganē (“of the crafts”). In Athens, the city with which she was most intimately connected, Athena was often simply called “the goddess.”</p> <p>In literature, one of Athena’s most common epithets was Glaukōpis, usually translated as “bright-eyed” or “gray-eyed” (Glaukōpis is derived from the Greek words for “face” and “owl,” Athena’s bird). Athena was also frequently called Tritogeneia (likely meaning “Triton-born”), a name that may indicate that in some early versions of her myth the sea god Triton was her father or foster father.</p></>} />
    <TextSectionTemplate header={<h3 id='content_8'>Attributes</h3>} text={<><p>In art, Athena was often depicted in full armor. Medusa’s head was almost always part of this armor, displayed on Athena’s breastplate or on her shield, the aegis. Thus clad for war, Athena could be seen in the company of the heroes she loved and supported.</p> <p>Athena was also often pictured in the company of olives and owls. Indeed, Athena was most commonly associated with the clever and sharp-eyed owl (this is probably the basis of Athena’s epithet Glaukōpis, explained above).</p></>} />
    <ImagePlusTextComponent image={athenaImage5} text='Greek bronze statuette of Athena with an owl (ca. 460 BCE).' />
    <TextSectionTemplate header={<h3 id='content_9'>Family</h3>} text={<><p>According to the most popular mythologies surrounding her, Athena was born (or, perhaps more accurately, emerged) from the union of Zeus and his first wife, Metis. She was their only child.[4]</p> <p>Soon after Metis became pregnant, Zeus heard a prophecy foretelling his downfall at the hands of his own child. Fearful of his impending doom, Zeus swallowed Metis and her child, just as his own father, Cronus, had swallowed Zeus’ brothers and sisters—Demeter, Hades, Hera, Hestia, and Poseidon. </p></>} />
    <ImagePlusTextComponent image={athenaImage6} text='Minerva Born from the Head of Jupiter by René-Antoine Houasse (before 1688). Palace of Versailles'/>
    <TextSectionTemplate text={<><p>The child within Metis, however, would not be denied. One day, Athena suddenly burst forth from Zeus’ forehead. She was fully grown, armed with a spear, and dressed in her battle armor. Some accounts featured Hephaestus, Prometheus, or another mythical figure serving as a midwife of sorts by prying open Zeus’ head with an axe.[5] This moment was commonly depicted in ancient art and has been the subject of more recent pieces as well. </p></>} />
    <TextSectionTemplate header={<h3 id='content_10'>Mythology</h3>} text={<><p>Greek mythology, especially the lore surrounding the founding and history of Athens, was rich with stories of Athena. While certain figures from the Mycenaean era paralleled Athena in her essential attributes, traditional conceptions of Athena evolved during the Greek classical period (490–323 BCE). She was later worshipped by the Romans as the deity Minerva. Her longevity among the Greeks and Hellenized peoples suggests that they greatly admired the qualities of wisdom, perspicuity, and forethought with which Athena was associated.</p> <p>In one version, Pallas was a close childhood friend of Athena. One day, while they were playing, Athena killed Pallas by accident. She was heartbroken. To honor her dead friend, she took the name Pallas for herself. She also carved a wooden image of Pallas, called the Palladium, which was said to guarantee the invincibility of the city that possessed it (in various traditions, the Palladium was said to be in Troy or even Rome).</p> <p>In another version, Pallas was one of the Giants whom the Olympians battled in the Gigantomachy. After killing Pallas in combat, Athena flayed him and wore his invulnerable skin as armor.[7]</p> <p>In yet another (even more obscure) version of the story, the Pallas in question was not a Giant but Athena’s own father (in this tradition, apparently, Athena was not Zeus’ daughter). When Pallas attempted to violate Athena, she killed and flayed him.[8]</p></>} />
    
    </div>
  )
}

export default athenaTemplate