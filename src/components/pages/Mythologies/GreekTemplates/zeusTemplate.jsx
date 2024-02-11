import React from 'react'
import TextSectionTemplate from '../TextSectionTemplate';
import ImagePlusTextComponent from '../ImagePlusTextComponent'
import zeus1 from '../zeusImages/zeus1.avif';
import zeus2 from '../zeusImages/zeus2.avif';
import zeus3 from '../zeusImages/zeus3.avif';
import zeus4 from '../zeusImages/zeus4.avif';
import zeus5 from '../zeusImages/zeus5.avif';




function ZeusTemplate() {
  return (
    <div className='wrapper'>
    <div className='godTemplate'>
      <h2>Olympian God</h2>
        <h1>Zeus</h1>

      <TextSectionTemplate header={<h3>Overview</h3>} text={<><p>Zeus was the supreme god of the Greeks, a mighty deity who meted out justice from atop Mount Olympus. Hailed as the father of both mortals and immortals, Zeus was the god of the sky and weather, but was also connected with law and order, the city, and the household.</p> <p>The numerous other gods of the Greek pantheon were all subordinate to Zeus, and none could rival him in power. Zeus’ wife and queen was Hera, goddess of women and marriage. The two had several divine children together, though Zeus also fathered numerous children through other marriages and affairs. </p> <p>Greek myth and religion emphasized Zeus’ supreme power, but also his role as a source of justice. To the Greeks, Zeus represented the world order as they saw it. He was worshipped throughout the Greek world, with major Panhellenic sanctuaries at Olympia and Dodona.</p></>} />
      <ImagePlusTextComponent image={zeus1} text='The "Zeus of Otricoli," Roman statue of Zeus after a Greek original from the fourth century BCE.' />
      <TextSectionTemplate header={<h3>Who were Zeus’ parents?</h3>} text={<><p>Zeus was the son of the Titans Cronus and Rhea, who ruled over the cosmos before the Olympians. His siblings were the gods Hestia, Demeter, Hera, Poseidon, and Hades. </p> <p>Zeus eventually led his siblings in a war against Cronus and the other Titans. After winning the war and banishing the Titans to Tartarus, Zeus and his siblings—dubbed the “Olympians” because they lived atop Mount Olympus—appointed themselves the new rulers of the cosmos.</p></>} />
      <ImagePlusTextComponent image={zeus2} text='Saturn by Peter Paul Rubens (between 1636 and 1638)' />
      <TextSectionTemplate header={<h3>Who were Zeus’ children?</h3>} text={<><p>By Hera, his queen, Zeus fathered several important children, including the war god Ares, the childbirth goddess Eileithyia, and (at least in some traditions) the smith god Hephaestus. But Zeus also had children by other marriages, including the Muses by Mnemosyne and Persephone by Demeter.</p> <p>Zeus’ mythology contains countless tales of his affairs with goddesses, nymphs, and mortals of all sorts. From these various consorts (well exceeding 100!), Zeus had numerous children, including the gods Apollo, Artemis, Athena, and Hermes, the heroes Heracles and Perseus, and the beautiful queen Helen.</p></>}/>
      <ImagePlusTextComponent image={zeus3} text="Perseus with the Head of Medusa by Antonio Canova (1804–1806)" />
      <TextSectionTemplate header={<h3>What were Zeus’ attributes?</h3>} text={<><p>Zeus was traditionally depicted as a well-muscled and bearded deity. His chief attributes were thunder and lightning—the symbols of his authority as the god of storms and weather—as well as a scepter, representing his role as the ruler of the cosmos. In literature especially, Zeus sometimes wielded the aegis, an invincible shield.</p> <p>Zeus was also represented by certain animals, especially the eagle, which was often shown perched upon the god’s scepter. He was frequently shown in the company of other deities—most notably, his fellow Olympians.</p></>} />
      <ImagePlusTextComponent image={zeus4} text='Ganymede with Zeus as an Eagle by Bertel Thorvaldsen (1817)' />
      <TextSectionTemplate header={<h3>Zeus defeats Cronus</h3>} text={<><p>For all his strength, Zeus’ power was neither unlimited nor unchallenged. Before becoming king of the gods, he first needed to defeat his tyrannical father Cronus. </p> <p>Fearing his own children would overthrow him, Cronus had decided to devour each of them as soon as they were born. But Zeus’ mother Rhea rescued him by giving Cronus a stone to swallow instead, and the young Zeus was brought up in secret. </p> <p>Once he had come of age, he waged war against Cronus and the other Titans, defeated them, and appointed himself the new ruler of the cosmos.</p></>} />
      <ImagePlusTextComponent image={zeus5} text='The Fall of the Titans by Cornelis van Haarlem (1588–1590)' />




    </div>
    </div>
  )
}

export default ZeusTemplate