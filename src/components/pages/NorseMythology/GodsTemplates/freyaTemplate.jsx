import React from 'react'
import TextSectionTemplate from '../../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../../Mythologies/ImagePlusTextComponent'
import freya1 from './freyaImages/freya1.avif'
import freya2 from './freyaImages/freya2.jpg'
import ContentComponent from '../../../ContentComponent'

function FreyaTemplate() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Family' }, 
      { title: 'Mythology' }, 
      ]} />
      <div className='godTemplate'>
        <h2>Norse Goddess</h2>
        <h1>Freya</h1>

        <ImagePlusTextComponent image={freya1} />
        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>One of the principal deities of the Norse pantheon, the lovely and enchanting Freya was a goddess of blessings, love, lust, and fertility. A member of the Vanir tribe of deities, Freya shared her people’s penchant for the magical arts of divination. It was Freya who introduced the gods to seidr, a form of magic that allowed practitioners to know and change the future.</p> <p>Freya was gentler and more agreeable than the other Norse deities. Where Thor accomplished his goals through aggression and Odin and Loki resorted to trickery, Freya achieved her ends with the gentler persuasions of gifts, beauty, and sex. While Freya was often unselfish and helpful, she did have a darker side. Like the male gods, Freya had a taste for blood and fought fiercely in battle. It was said she took the lives of half the warriors ever slain in battle.</p> <p>Freya was known by a number of epithets, and the variants of her name (Freja, Freyia, Freyja, Fröja, Frøya, Frøjya, and Frua, among others) were as different as the Germanic languages and dialects of her many worshippers. Thanks in part to these linguistic differences, some interpretations of Norse mythology believed Freya to be synonymous with Frigg, Odin’s wife, and sometimes Gullveig, the völva narrator of the Völuspá who recounted the Aesir-Vanir War and predicted the fate of the gods during Ragnarök. </p></>} />

        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>Meaning “the lady,” the name Freya (Freyja in the Old Norse) was derived from the Proto-Germanic frawjon, an honorific title used for a mature woman of high social standing. It was also the root of the word frau in modern German, the honorific title for married women. “Freya” was probably first used as an epithet or nickname by one of the Germanic tribes. However, it would eventually gain popularity and become a personal name.</p> <p>Freya had many epithets, and was known as the Gefn (“the giver”), Hörn (“flaxen,” probably in reference to her flaxen hair), Mardöll (“sea shaker”), Sýr (“sow,” a creature that stood for fertility much like Freya herself) and Valfreyja (“lady of the slain”).</p> <p>Additionally, “Friday” was likely named after Freya. The word was believed to be a portmanteau of “Freya’s day.”</p></>} />

        <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<><p>A leader of the Vanir gods, Freya was recognized as the archetypal völva, a practitioner of seidr whose art and ritual could see events before they happened. The volva could then attempt to alter these events, leading enemies to their doom and delivering friends from impending disaster.</p> <p>While Freya did not typically wield weapons of war, she did possess many accoutrements of a different sort. One such item was a cloak made of falcon feathers that gave the gift of flight to anyone who wore it. When she was not wearing it herself, Freya lent the cloak to companions and collaborators who agreed to do her bidding. Freya’s most prized possession was likely the necklace, or torc, known as Brísingamen (“gleaming torc” or “amber torc”). Brísingamen was made by dwarves and purchased at a dear price. Freya guarded the necklace from any and all would-be thieves with a fiery passion.</p> <p>In addition to her cloak and “gleaming torc,” Freya rode a glittering chariot that was pulled by two black (or grey) domestic cats. She was usually accompanied by her animal familiar, a hog named Hildisvíni (meaning “battle swine”). One of her common epithets, Sýr (“sow”) likely came from her familiarity with Hildisvíni.</p></>} />
        <ImagePlusTextComponent image={freya2} />
        <TextSectionTemplate header={<h3 id='content_3'>Family</h3>} text={<><p>Freya was the daughter of Njord (also Njordr), a god of the Vanir associated with the sea, sailing, fishing, wealth, and the fertility of crops. While her mother’s identity was ultimately unknown, some speculated that Freya was the daughter of Nerthus, an old Germanic deity known as a goddess of “peace and plenty." Nerthus was tied to an archaic ritual involving a cart procession and the symbolic laying down of arms.</p> <p>Freya’s brother (and possible twin) was Freyr, a god associated with wealth, prosperity, healthful weather, and male virility. He was often depicted with the phallus that was typical of fertility gods.</p> <p>In later life, Freya took Odr as her husband. Odr was a mysterious god whose name meant “furious and passionate,” as well as “mind and sense.” He would often be away on long journeys, and it was said that his frequent absence caused Freya to weep tears of gold. With Odr, Freya had two daughters: Hnoss and Gersemi, whose names meant “treasure.”</p> <p>Much was uncertain about the identities of Freya and Odr. It was likely that Freya was another version of Frigg (Odin’s wife), and as such it appears that Odr may have actually been Odin. The deities’ various names and identities reflected linguistic, cultural, and mythological differences among the Germanic groups that told stories of these gods and goddesses. The Norse mythology that reemerged in modern times was not canonical in the sense that an authoritative version of it did not exist. Rather, separate traditions existed simultaneously, and mythic sources such as the Poetic Edda often transposed these different traditions onto one another.</p></>} />

        <TextSectionTemplate header={<h3 id='content_4'>Mythology</h3>} text={<><p><h4>Aesir-Vanir War</h4>As with most Norse gods and goddesses, little was known of Freya’s childhood and early development. In the Ynglinga Saga, a book of the Heimskringla by Snorri Sturluson, Freya was presented as a leading deity of the Vanir and a player in the Aesir-Vanir War. She was the wife of Odr, with whom she had the daughters Hnoss and Gersemi, who “were so very beautiful, that afterwards the most precious jewels were called by their names.”</p> <p>When the two sides reached a peace settlement, Odin asked Freya to oversee the offering of sacrifices. In this role, Freya preserved peace among the gods and maintained the cycles of fertility that kept the world in motion. She was praised and celebrated, so much so that her personal name was applied to all “ladies” of good social standing.</p> <p>The Ynglinga saga also claimed that Freya introduced the gods to the practice of seidr, the soothsaying art that foretold the destruction of the gods. According to the saga, Freya was said to be the last of the gods—this claim appeared nowhere else in Norse tradition, however.</p></>} />




      </div>
    </div>
  )
}

export default FreyaTemplate

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p></>} /> */