import React from 'react'
import ImagePlusTextComponent from '../../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../../Mythologies/TextSectionTemplate'
import loki1 from './lokiImages/loki1.avif'
import loki2 from './lokiImages/loki2.jpg'
import ContentComponent from '../../../ContentComponent'
import Table from '../../../Tables'

function LokiTemplate() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Family Tree' }, 
      { title: 'Attributes' }, 
      { title: 'Family' }, 
      { title: 'Origins' }, 
      ]} />
      <div className='godTemplate'>
        <h2>Norse God</h2>
        <h1>Loki</h1>

        <ImagePlusTextComponent image={loki1} />
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>The great trickster god of the Norse pantheon, Loki was a devious deity known for his many schemes and deceptions. A shapeshifter, Loki’s forms were as varied as the motives for his mischief, which included wealth, women, wisdom, and the sheer pleasure of his knavery. With Loki, appearances were never quite what they seemed. While Loki’s antics frequently embroiled the gods in sticky situations, his tricks often rescued them from troubled times as well.</p> <p>A member of the Aesir tribe of deities, Loki—along with Odin, Thor, and Freya—constituted one of the four ruling deities of Norse thought. Though his mythology consistently overlapped with those of his divine counterparts, Loki differed from them in important ways. Where Thor, Freya, and even Odin (a trickster himself) strove to impose a righteous order amongst the gods, Loki’s erratic behavior called the very nature of his allegiances into question. For example, it was predicted that during Ragnarök Loki would fight on the side of the jötnar against the gods.</p> <p>In truth, Loki was neither for or against the gods. Like the trickster figures of other mythologies, he was neither good nor evil, choosing instead to be a partisan of disorder itself, a figure who tested boundaries and challenged conventions. His chaotic inconsistency reminded believers that the boundaries between good and evil were far more tenuous than they suspected.</p></>} />
        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>The name “Loki” has long been likened to the Old Norse logi, meaning “fire.” While Loki, like fire, was destructive and unpredictable, the similarity between the two words was probably incidental. A newer and more likely etymology traced the name “Loki” to the Germanic words for “knot, loop, or tangle.” Such words have a literal connection to the deity—Loki was often depicted as a maker of fish —but also a deeper, metaphorical connection: Loki’s schemes were like webs that ensnared the unwary. Spiders were referred to as loki from time to time, as their webs caught unsuspecting victims in a similar manner. Loki was also likely referred to as a “knot” for his tendency to go against the other gods.</p></>} />
        <ImagePlusTextComponent image={loki2} />

        <h3 id='content_2' style={{fontSize:'30px', position:'relative', top:'40px'}}>Family Tree</h3>
          <Table BigHeader={['Parents', 'Consorts', 'Children']} 
          miniHeader1={['Father', 'Wife', 'Daughter']} 
          miniHeader2={['Mother', 'Lover', 'Sons']} 
          information1={['Fárbauti', 'Sigyn', 'Hel']}
          information2={['Laufey', 'Angrboda', 'Fenrir, Jörmungandr, Sleipnir']}
          />
          
        <TextSectionTemplate header={<h3 id='content_3'>Attributes</h3>} text={<><p>Loki’s chief attributes were his wit and wile. He seldom engaged in physical combat, and as such carried no weapons. He also lacked any well-attested charms, garments, or vehicles. One source, the Skáldskaparmál, mentioned that Loki possessed a pair of magical shoes—“Loki had with him those shoes with which he ran through air and over water”—but no other sources made such a claim. On one occasion, he borrowed Freya’s magical falcon cloak, though he returned it shortly afterward. In spite of his lack of personal accoutrements, Loki had an unusually prominent role in procuring them for other gods.</p> <p>Loki was the preeminent shapeshifter amongst the gods. On various occasions, he took the form of a salmon, a flea, a fly, and a mare. He also took the form of human beings, such as an old woman named Thökk who fatefully refused to weep for the fallen Baldur.</p></>} />
        <TextSectionTemplate header={<h3 id='content_4'>Family</h3>} text={<><p>Loki was the son of Fárbauti, an unspecified jötunn whose name meant “cruel striker.” His mother was usually called Laufey, though she was also referred to as Nál. Loki’s brothers were Helblindi and Býleistr, also jötnar.</p> <p>Loki married the goddess Sigyn, about whom little is known, except that by Loki she had a son named Nari, or Narfi. Loki also reproduced with his mistress, Angrboda, a jötunn (possibly a troll) who gave birth to three children: Hel, who ruled the eponymous underworld called Hel, Jörmungandr, the sea serpent of Midgard and arch-nemesis of Thor, and Fenrir, the massive wolf fated to slay Odin during Ragnarök.</p> <p>Loki gave birth to another of his children on his own. During an escapade in which he had taken the form of a mare, Loki was impregnated by a stallion called Svadilfari. Some time later, Loki birthed Sleipnir, the eight-legged horse, who was to become Odin’s favorite mount.</p></>} />
        <TextSectionTemplate header={<h3 id='content_5'>Origins</h3>} text={<><p>Though Loki’s entrance into Norse mythology came later than most, his origins remained difficult to discern. In the oldest poetic works, such as the Grímnismál (which had fragments going back to the eighth century), Loki was conspicuously absent. In non-Norse sources of pre-Christian Germanic religion, Loki was once again either absent or presented in a very different manner. Such evidence suggested that Loki was a deity unique to the Northern European, or Scandinavian, people.</p></>} />


      </div>
    </div>
  )
}

export default LokiTemplate

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p></>} /> */