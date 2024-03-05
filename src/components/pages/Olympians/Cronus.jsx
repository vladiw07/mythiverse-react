import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'

import img1 from './OlympiansImages/cronus1.avif'
import img2 from './OlympiansImages/cronus2.avif'

import ContentComponent from '../../ContentComponent'


function Cronus() {
  return (
    <div className='wrapper'>
        <ContentComponent contentLi={
            [{ title: 'Overview' },
             { title: 'Etymology' },
              { title: 'Epithets' },
               { title: 'Attributes' },
                { title: 'Iconography' }]} />
        <div className='godTemplate'>
            <h2>Titan</h2>
            <h1>Cronus</h1>



            <ImagePlusTextComponent image={img1}/>
            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Cronus, the second ruler of the Greek cosmos, was a Titan known primarily for his cruelty and for usurping his father Uranus. He fathered the first of the Olympian deities, including Demeter, Hades, Hera, Hestia, Poseidon and Zeus. Insatiably cruel and hungry for power, Cronus was ultimately deposed by his son Zeus, who ushered in the era of the Olympians.</p> <p>In Greek art, Cronus was often depicted wielding a sickle, a symbol of his rebellion against his father as well as his ties to fertility and agriculture. The Greeks of ancient Attica and Ionia celebrated Cronus during the Cronia, a harvest festival marked by indulgent consumption of food and drink and the mixing of social classes. In the Roman world, Cronus was known as Saturn.</p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_1'>Etymology</h3>} text={<><p>The origin of the name “Cronus” (Greek Κρόνος, translit. Krónos) remains uncertain. One theory has suggested a connection with the Proto-Indo-European root *(s)ker- (via the Greek verb κείρω, translit. keírō), meaning “to cut.” Such an origin would likely allude to Cronus’ severing of his father’s genitals, but may also refer to the “cutting” process by which the cosmos was created in some Indo-European mythologies</p> <p>Another suggestion, no longer fashionable today, traces Cronus’ name to the Semitic root qrn, meaning “horn.” This etymology would make Cronus “the horned one.”</p> <p>Cronus’ association with time, first popularized by the Greek Orphics and later taken up by Renaissance Europeans, was purely coincidental. It emerged as a product of the similarities between the name Cronus and the Greek word χρόνος (chrónos), meaning “time.” The myth in which Cronus swallows his children can thus be understood as a metaphor for time, which “devours the ages and gorges [itself] insatiably with the years that are past.”</p> <p>Other fanciful etymologies for Cronus’ name were suggested by Plato in his philosophical dialogue Cratylus. For example, Plato conceived of “Cronus” as a kind of compound of the Greek words κοῦρος (koûros, “youth, young man”), καθαρός (katharós, “pure”), and νοῦς (noûs, “mind, intellect”). Plato’s Cronus is therefore “he of pure intellect.”[4] However, this etymology should be regarded as merely philosophically provocative, rather than linguistically or historically accurate.</p> </>} />

            <TextSectionTemplate header={<h3 id='content_2'>Epithets</h3>} text={<><p>Cronus’ chief epithet, used a few times in Hesiod’s Theogony, was ἀγκυλομήτης (ankylomêtēs), meaning “crooked-counseling.” This distinctive epithet highlights Cronus’ wily but cruel nature.</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_3'>Attributes</h3>} text={<><p><h4>Functions and Characteristics</h4>As the predecessor of Zeus, Cronus ruled over the cosmos before the Olympians wrested power from him and the other Titans. Cronus himself had seized the throne from his own father Uranus, the embodiment of the heavens. As shrewd as he was strong, Cronus was powerful enough to outmatch the great Uranus. In the Theogony, the poet Hesiod characterizes him as “Cronos the wily, youngest and most terrible of [Gaia’s] children.”</p> <p>Cronus and his Titan cronies ruled the cosmos, it seems, from Mount Othrys in central Greece, south of Mount Olympus.[6] After he was defeated and overthrown by the Olympians, though, Cronus wound up in Tartarus, the deepest pit of the Underworld, where he was imprisoned for the rest of eternity.[7] But other traditions put Cronus’ final home elsewhere, in the Isle of the Blessed or even in Britain (see below).</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img2} text='Saturn, the Roman Cronus, holds a scythe in this Pompeiian fresco (1st century CE). '/>
            <TextSectionTemplate header={<h3></h3>} text={<><p>Cronus wielded a sickle (or scythe), a symbol that connected him with the world of farming. Indeed, Cronus was thought to hold sway over fertility and agriculture. In later eras, he was often associated with the Greek deity Chronos, “Time” personified, and thus depicted as the original “Father Time,” an old man with a scythe who controls the passing of the seasons.[8] Cronus represented the pre-civilized world, in both its negative and positive aspects. On the one hand, he embodied the chaos of primeval times, a period in which someone could murder their parents and even their own children, as Cronus did, with very few consequences. On the other hand, he was also associated with the innocence and bliss of the world when it was young, before the troubles and discontents of civilization took hold. The Romans especially regarded Cronus—or Saturn, as they called him—as the symbol of a lost Golden Age.</p> <p></p> <p></p> <p></p> </>} />

            <TextSectionTemplate header={<h3 id='content_4'>Iconography</h3>} text={<><p>The oldest artistic representations of Cronus date from the fifth century BCE, though there is literary evidence suggesting that the king of the Titans was present in Greek art from even earlier.[10] Representations of Cronus can be found on coins, sculpture, relief, and, somewhat more rarely, on vase paintings or wall paintings.</p> <p>Cronus was typically depicted as a mature male, with curly, stylized hair and a full beard, similar in appearance to his sons Zeus and Poseidon. At some point (it is not clear exactly when) Cronus’ iconography became characterized by a mantle or veil pulled over his head. He was often bare-chested.</p> <p>Cronus’ iconographic attributes include the sickle he used to castrate his father (a Greek bladed weapon or agricultural tool known as the harpe). He sometimes also carried a scepter, especially when he was represented on his throne with his queen Rhea.</p> <p></p> </>} />



        </div>
    </div>
  )
}

export default Cronus

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */