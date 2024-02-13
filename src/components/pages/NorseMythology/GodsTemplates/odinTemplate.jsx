import React from 'react'
import TextSectionTemplate from '../../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../../Mythologies/ImagePlusTextComponent'

import odin1 from './odinImages/odin1.avif'
import odin2 from './odinImages/odin2.avif'
import odin3 from './odinImages/odin3.avif'
import ContentComponent from '../../../ContentComponent'

import Table from '../../../Tables'

function OdinTemplate() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Family Tree' }, 
      { title: 'Mythology' }, 
      { title: 'Origins' }, 
      ]} />
      <div className='godTemplate'>
        <h2>Norse God</h2>
        <h1>Odin</h1>
        
          


        <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Widely worshiped by the Germanic peoples of the Middle Ages, Odin, furious lord of ecstasy and inspiration, was the highest of deities and the chief of the Aesir tribe of gods and goddesses.</p> <p>Known as “all-father,” among many other epithets, Odin was usually depicted with one eye and a long beard. He would often be accompanied by his familiars—the wolves Geri and Freki, and ravens Huminn and Muninn—and rode an eight-legged horse named Sleipnir. </p> <p>Befitting his kingly stature, Odin was also a mighty warrior—it was said that he never lost a battle; there were even some who believed he could not lose a battle.</p></>} />
        <ImagePlusTextComponent image={odin1} text='Oden som vandringsman, or Odin as Wanderer by Georg von Rosen (1886). This image appeared in an 1893 Swedish translation of the Poetic Edda (also known as the Elder Edda), a compilation of Norse mythic poetry that serves as the most important single source for the history of Norse mythology. This image better captures Odin as he appeared in myth. It has been said that J.R.R. Tolkien based the character of Gandalf on Odin.' />

        <TextSectionTemplate text={<><p>Despite his military prowess, Odin defied many conventions of the warrior-king archetype so highly idealized by the Norse. While Odin kept his court in the hall of Valhalla located in Asgard—one of the Nine Realms in Norse mythology—he preferred to wander in the guise of a traveler.</p> <p>He sought knowledge above all else—of his enemies and the future—and courted shamans, seers, and necromancers in order to attain it. He spoke in poetry and riddles and commanded beasts, even taking their forms upon occasion. Though hero gods, such as the mighty Thor, fought with brute strength and bravado, the trickster god Odin dismissed these tools in favor of craft and cunning.</p></>} />
        <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>The name “Odin,” rendered in the Old Norse as Óðinn, derived from two words: óðr, meaning “fury, rage, passion, ecstasy, or inspiration,” and the masculine definite article suffix -inn. The name has been translated to mean “the Fury.” The German chronicler Adam of Hamburg proposed this as a literal translation in his eleventh-century work, the History of the Archbishops of Hamburg-Bremen.[1] Other translations included “the furious,” “the passionate,” “the inspired,” and, more appropriately, “the inspiring.” Odin was thought to inspire fury, passion, and ecstasy even as he was defined by such traits.</p> <p>The name fit Odin's character nicely, as a kind of inspired fury and passion permeated his many thoughts and actions. In all his personae—as warrior and king, shaman and seer, traveler and trickster—Odin channeled a focused intensity and single-mindedness of purpose. Such focus was a boon; knowledge, magic, and war—among other domains over which Odin held sway—all necessitated such intensity.</p> <p>Odin was recognized and commonly referred to in other Germanic languages: he was known as Wōden in Old English, Wōdan in Old Saxon, and as Wuotan and Wotan in Old German. The god’s name also lent itself to the word “Wednesday,” meaning “Wōden’s day.”</p></>} />
        <TextSectionTemplate header={<h3 id='content_2'>Attributes</h3>} text={<><p>Odin’s chief attributes were his wit, wile, and wisdom. Having cultivated the magical arts of seidr, the set of rituals enabling foresight, Odin could see the future and commune with spirits and the dead. He was also a shapeshifter who could take the form of snakes, eagles, and other powerful creatures. Additionally, Odin spoke in poetic verse and had the power to bewitch humans into committing deeds outside their characters.</p> <p>Odin was often depicted with a staff or spear, but otherwise wielded no specific weapons. On multiple occasions, he consulted with the decapitated and embalmed head of Mimir which revealed many secrets to him. His magnificent throne Hlidskjalf offered a complete view of all Nine Realms.</p></>} />
        <ImagePlusTextComponent image={odin2} text='Odin by Lorenz Frølich (1844). Odin is seen here in all his power, with wolves Geri and Freki and ravens Hunnin and Munin beside him. Scenes like this, depicting Odin as a mighty warrior-king resplendent in his glory, are typical of the revival of Germanic myth and imagery during the nineteenth century (often in the service of German nationalism). These depictions are not always in keeping with his mythological standing, however. It should be noted that there are virtually no images of Odin from the early centuries of the Common Era, when his cult thrived.' />

        <TextSectionTemplate text={<><p>Odin’s familiars were the wolves Geri and Freki, who traveled alongside their master and scoured battlefields for the corpses of fallen warriors. Odin also kept a pair of ravens known as Huninn and Muninn. These ravens served as spies and informers, leaving each morning to travel the nine worlds and returning each night to tell Odin of all they saw.</p></>} />
        
        <h3 id='content_3' style={{fontSize:'30px', position:'relative', top:'40px'}}>Family Tree</h3>
          <Table BigHeader={['Parents', 'Siblings', 'Consorts', 'Children']} 
          miniHeader1={['Father', 'Brothers', 'Wife', 'Sons']} 
          miniHeader2={['Mother', '', 'Lovers', '']} 
          information1={['Borr', 'Vili, Vé', 'Frigg', 'Baldur, Thor, Tyr, Heimdall, Váli, Vidarr, Hodr, Bragi']}
          information2={['Bestla', '', 'Jord, Gridr, Rindr', '']}
          />

        <TextSectionTemplate header={<h3 id='content_4'>Mythology</h3>} text={<><p>As the “all-father” and chief god of the diverse Norse pantheon, Odin figured prominently in all of the central mythological traditions—from the creation of the first humans and the Aesir-Vanir War that united the gods into a single pantheon, to the prophecies of Ragnarök marking the end of time.</p></>} />
        <TextSectionTemplate header={<h3 id='content_5'>Origins</h3>} text={<><p>Despite his importance in the mythic traditions of the Norse, the details of Odin’s origins were not well understood. He appeared in early Roman sources, such as Tacitus’ Germania of the first century CE, as Mercury—another deity known as a traveler, trickster, and transgressor of boundaries. Tacitus claimed that by the first century, Odin had been established as the central god among a variety of Germanic groups.</p> <p>Only Sturluson’s thirteenth century Ynglinga Saga attempted an early history, describing Odin as the king of Asgard, a ruler of great strength who blessed warriors and accepted many sacrifices. Most viewed this as a late attempt to impose order on the character of Odin, who seemed to emerge fully formed in the older mythic sources.</p></>} />
        <ImagePlusTextComponent image={odin3} text="Odin as depicted by Gerhard Munthe in a preparatory drawing (ca. 1895-1899) for Snorri Sturluson's Saga of Harald Fairhair." />

        <TextSectionTemplate  text={<><p>Some of the same ambiguities surrounded the Norse origin of humankind. Traditionally, the first humans were Ask and Embla, a male and female. Little was said about their actual creation, however, with different traditions holding that they were either formed by gods or dwarves.</p> <p>When a trio of gods—including Odin, Lodur, and Hoenir—found Ask and Embla, they were lifeless husks. Pitying the creatures, the three gods decided to endow Ask and Embla with the gifts of life and sense, each choosing a separate gift to bestow upon them.</p> <p>According to the Völuspá, the best known of the poems making up the Poetic Edda, Lodur granted the gift of blood, Hoenir gave sense, and Odin, befitting his status as god of passion and inspiration, offered soul and enlivening spirit.</p></>} />



      </div>
    </div>
  )
}

export default OdinTemplate

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p></>} /> */