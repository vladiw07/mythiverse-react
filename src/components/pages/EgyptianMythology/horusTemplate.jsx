import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'

import horus1 from './egyptianGodSectionImages/horus1.avif'
import horus2 from './egyptianGodSectionImages/horus2.avif'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'

function HorusTemplate() {
  return (
    <div className='wrapper'>
      <div className='godTemplate'>
        <h2>Egyptian God</h2>
        <h1>Horus</h1>



        <TextSectionTemplate header={<h3>Overview</h3>} text={<><p>An incredibly important figure in the Egyptian mythos, Horus was a complex and occasionally contradictory god. The ancient Egyptians believed him to have a number of manifestations, with each representing a different facet of his being. A sun and sky god in equal measure, he was typically represented by a falcon and embodied the principles of Egyptian kingship.</p> <p></p> <p></p> <p></p> </>} />
        <ImagePlusTextComponent image={horus1} text='Falcon-headed Horus once held a spear above an antelope at the base of this statuette (664–525 BCE). The antelope is thought to represent Set, whom Horus defeated to become ruler of Egypt.' />
        <TextSectionTemplate header={<h3></h3>} text={<><p>A passing familiarity with the major figures from the Egyptian pantheon will give the impression that Horus was the child of Isis and Osiris, destined to retake his father’s throne. This statement was true, but Horus was also much more than that. The Egyptians worshipped Horus for over three thousand years, and over time he was merged with similar deities and their accompanying mythologies.</p> <p>As a result of his milllennia of worship, Horus’s mythos has become somewhat confusing. Horus was not subject to temporal consistency, and existed simulatenously as both child and adult. In one myth that exemplified this paradox, Horus appeared as Hathor’s son, husband, and father—all at the same time.</p> <p>In order to better understand Horus, several of his more prominent manifestations will be examined in isolation. It is important to note that the ancient Egyptians recognized all of these incarnations to be aspects of the same god.</p> <p></p> </>} />
        <ImagePlusTextComponent image={horus2} text='A serekh (rectangular box, left) from the reign of Pharaoh Amenemhat I of the 12th Dynasty. The falcon sitting atop the box represents Horus.' />
        <TextSectionTemplate header={<h3>Horus the Falcon</h3>} text={<><p>The deity’s oldest manifestation, Horus the Falcon was also known as Horus the Sky God, Horus the Lord of the Sky, Horus of Two Horizons, Horakhty, Ra-Horakhty, and Hor-em-akhet (Horus in the Horizon, or Harmachis to the Greeks).</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3>Horus the Elder</h3>} text={<><p>Found only in Greek sources, Horus the Elder was the son of Nut and Geb. He was also known as Horus the Great, Harwer, and Haroeris.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3>Horus the Younger</h3>} text={<><p>Horus the Younger is Likely the most recognizable iteration of the deity, Horus the Younger, was the son of Isis and Osiris, and figured prominently in some of the best-known Egyptian myths.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3>Etymology</h3>} text={<><p>Horus’s name was derived from the Egyptian word her, meaning “the one on high” or “the distant one,” a reference to a soaring falcon or the sun itself.</p> <p></p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3>Horus the Younger</h3>} text={<><p>The ancient Egyptians called this iteration Horus the Younger, Harsiese (Horus, son of Isis), and Har-Hery-Wadj (Horus Upon His Papyrus Plants, referencing his birth in the papyrus swamps of Chemmis).</p> <p>He was also referred to as Hor Pa-Khered (literally: Horus the Child) which the Greeks transliterated as Harpokrates.</p> <p></p> <p></p> </>} />

        <TextSectionTemplate header={<h3>Attributes</h3>} text={<><p>Despite having many different manifestations, the aspects of Horus share many features with one another.</p> <p></p> <p></p> <p></p> </>} /> 

        



      </div>
    </div>
  )
}

export default HorusTemplate

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */