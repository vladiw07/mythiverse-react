import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'


import img1 from './OlympiansImages/demeter1.avif'
import img2 from './OlympiansImages/demeter2.avif'
import img3 from './OlympiansImages/demeter3.avif'
import img5 from './OlympiansImages/demeter5.avif'

function Demeter() {
  return (
    <div className='wrapper'>
        <div className='godTemplate'>
            <h2>Olympian Goddess</h2>
            <h1>Demeter</h1>



            <TextSectionTemplate header={<h3>Overview</h3>} text={<><p>Demeter was one of the Twelve Olympians and the goddess of fertility and agriculture. She was also a goddess of women, family, law, and the Mysteries (secret religious rites).</p> <p>One of the children of the Titans Cronus and Rhea, Demeter was the sister of Zeus, Hestia, Hera, Hades, and Poseidon. Her most famous daughter was Persephone—the bride of Hades and the mistress of the Underworld.</p> <p>Rarely meddling in others’ affairs, Demeter was among the most beloved and least controversial of all Greek deities. Her most important cult center was at Eleusis in Attica, though she had many sanctuaries throughout the Greek world.</p> <p></p> </>} />
            <ImagePlusTextComponent image={img1} text='Apulian red-figure hydria showing Demeter (right) with Metanira (left) by the Varrese Painter (ca. 340 BCE)'/>
            <TextSectionTemplate header={<h3>What were Demeter’s attributes?</h3>} text={<><p>Demeter was easily recognized by her attributes of wheat (or corn), a torch, and sometimes a sickle. She was generally represented as a modestly robed woman wearing a headdress.</p> <p>In art and literature, Demeter was often shown alongside her daughter Persephone, or, occasionally, with other gods such as Poseidon. Other times, Demeter was depicted with her favorite animals, especially piglets and bullocks.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img2} text='Roman statue of Demeter (2nd century CE)'/>
            <TextSectionTemplate header={<h3>Who were Demeter’s children?</h3>} text={<><p>Demeter had relatively few consorts, and thus relatively few children. The most famous of her offspring was no doubt Persephone, born from her union with Zeus. Demeter also coupled with Poseidon, the god of the sea, and gave birth to the immortal horse Arion. Finally, Demeter was the mother of Pluto (the personification of wealth) by her mortal lover Iasion.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img3} text='The Return of Neptune by John Singleton Copley (ca. 1754)'/>
            <TextSectionTemplate header={<h3>Demeter’s Search for Persephone</h3>} text={<><p>By far the most important myth of Demeter involved her search for her daughter Persephone, whom Hades, the god of the Underworld, had abducted to be his bride. </p> <p>Demeter was devastated by her daughter’s absence—so much so that she left the crops to wither and die. To prevent a famine, Persephone was allowed to return to her mother for part of the year. But because she had tasted food during her time in the Underworld, Persephone had to spend the other part of the year with her infernal husband Hades.</p> <p>During her long search for Persephone, Demeter stopped at Eleusis, a city in Attica, where she taught the local people about agriculture and her secret religious rites. It is for this reason that Eleusis became Demeter’s most important cult center and the home of the Eleusinian Mysteries.</p> <p></p> </>} />

            <TextSectionTemplate header={<h3>Attributes</h3>} text={<><p>Demeter’s main attributes were sheaves of wheat (or other crops, such as corn or poppies), a scepter, and a torch. She was also imagined wearing a headdress or clad in flowing robes. For transportation, Demeter possessed a flying chariot drawn by dragons.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img5} text='Attic red-figure stamnos showing Demeter, Persephone, and Triptolemus by the Triptolemos Painter (ca. 480–470 BCE). Louvre, Paris.'/>
            <TextSectionTemplate header={<h3></h3>} text={<><p>Demeter’s sacred animals included snakes and reptiles, cranes, and her favorite sacrificial victims: piglets and bullocks. In addition to grain crops, her sacred plants included apples, pomegranates, myrtle, asphodel, and narcissus.</p> <p></p> <p></p> <p></p> </>} />


        </div>
    </div>
  )
}

export default Demeter

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */