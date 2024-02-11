import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'

import osiris1 from './egyptianGodSectionImages/osiris1.avif'
import osiris2 from './egyptianGodSectionImages/osiris2.avif'

function OsirisTemplate() {
  return (
    <div className='wrapper'>
      <div className='godTemplate'>
        <h2>Egyptian God</h2>
        <h1>Osiris</h1>

        


        <TextSectionTemplate header={<h3>Overview</h3>} text={<><p>Osiris, the “Mighty One,” was both god of the dead and a central figure of Egyptian mythology. His cult arose around 2600BCE, as those of competing deities, including Andjety of Busiris and Khentamentiu of Abydos, declined.[1] For nearly 3,000 years, Osiris would stand as one of the most prominent Egyptian gods.</p> <p>The tradition of mummification mirrored Osiris’s own experiences. As the god of the afterlife, he decided who was worthy of reincarnation, and who was not.</p></>} />
        <ImagePlusTextComponent image={osiris1} text="This statuette of Osiris (c. 588–526 BC) features the deity's characteristic atef (headdress) and shroud." />
        <TextSectionTemplate header={<h3>Etymology</h3>} text={<><p>Almost all names from Egyptian mythology have made their way to English through the Coptic language, which was first translated into Greek before being translated into Latin.</p><p>This etymological chain has made the original meaning of these ancient names difficult to decipher. Before the development of the Coptic language (the most recent form of Ancient Egyptian) between 300BCE and 200CE, the Egyptian written language did not include any vowels.[2] While the presence of vowels was indicated by certain characters, the nature of the vowels themselves was left ambiguous.</p><p>The best approximation of Osiris’s name as it was written in Ancient Egyptian is the unpronounceable letter jumble: jsjrt.</p><p>While the meaning of Osiris’s name is unclear, the epithet “Mighty One” is commonly attributed to him and may allude to his role as Death personified.</p> <p>One of Osiris’s epithets, “Foremost of the Westerners,” originated from Khentamentiu of Abydos, a funerary deity that Osiris ultimately replaced.</p></>} />

        <TextSectionTemplate header={<h3>Attributes</h3>} text={<><p>Osiris was usually portrayed as a mostly-mummified king. He was often depicted wearing an atef—a combination of the hedjet crown, two ostrich feathers, and two horns. Atefs were synonymous with Osiris, though he was not the only god to wear one.</p> <p>The little skin left unwrapped—usually his face and hands—was typically green or black. These colors may originally have been connected with decay, but as time went on they were said to reflect Osiris’s role in the cyclical nature of life and death, as manifested by plants.</p> <p></p> <p></p> </>} />
        <ImagePlusTextComponent image={osiris2} text='A partially mummified (and green-skinned) Osiris presides over the rituals of the afterlife. Bearing his atef crown, as well as his customary crook and flail, this depiction of Osiris features all of his traditional elements. The Book of the Dead of Hunefer (Hw-nfr), Sheet 3.' />
        <TextSectionTemplate header={<h3></h3>} text={<><p>Osiris was often seen carrying a crook and flail. The crook, a symbol of Egyptian kings, was derived from the tools used by shepherds tending to their sheep. The flail, meanwhile, has been interpreted as a whip or goad indicative of the king’s martial power; others believe that it represented a threshing tool indicative of agricultural success.</p> <p>Osiris ruled on earth before becoming lord of the underworld, though he was still considered a god in all stages of his mythos. At 8 cubits, 6 palms, and 3 fingers tall (15’3” / 4.7 meters) he would certainly have been an intimidating presence.</p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3>Family</h3>} text={<><p>Osiris was the first child of the sky goddess Nut and the earth god Geb. His siblings included Horus the Elder[9], Set, Isis, Nephthys.</p> <p>Osiris had several notable children. He famously fathered Horus the Younger with his sister/wife Isis following his resurrection, and unwittingly sired Anubis with Nephthys.</p> <p>His other children include Babi, a mythical man-eating baboon, and Sopdet, the personification of the star Sirius.</p> <p></p> </>} />

        <TextSectionTemplate header={<h3>Mythology</h3>} text={<><p>The stories of Osiris were some of the best-preserved tales in the Egyptian mythos. Most knowledge of Osiris’s mythos originally came from Greek accounts, such as those of Plutarch, Diodorus Siculus, Firmicus Maternus, and Macrobius. These accounts have since been confirmed by fragments of the ancient Egyptian record.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3>Origin Myth</h3>} text={<><p>When Osiris was born, he came into the world wearing his distinctive atef crown. The crown was a symbol of Ra’s decision to have Osiris succeed his father as king.</p> <p>On the day of Osiris’s birth, a man named Pamyles heard a voice while drawing water at the temple of Thebes. The voice told Pamyles to spread the word that the great king Osiris had been born. Pamyles did so, and was rewarded with the honor of educating the god-king Osiris.</p> <p> While some sources have suggested that Osiris’s prophesied rule was a source of strife between him and his father Geb, other sources have omitted any mention of such contention.</p> <p></p> </>} />


      </div>
    </div>
  )
}

export default OsirisTemplate

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */