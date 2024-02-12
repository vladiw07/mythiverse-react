import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'


import img1 from './OlympiansImages/hera1.avif'
import img2 from './OlympiansImages/hera2.avif'
import img3 from './OlympiansImages/hera3.avif'
import img4 from './OlympiansImages/hera4.avif'
import img5 from './OlympiansImages/hera5.avif'
import img6 from './OlympiansImages/hera6.avif'
import ContentComponent from '../../ContentComponent'


function Hera() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Who were Hera’s children?' }, 
      { title: 'Hera and Io' }, 
      { title: 'Roles and Powers' }, 
      { title: 'Attributes' },
      
      ]} />
        <div className='godTemplate'>
            <h2>Olympian Goddess</h2>
            <h1>Hera</h1>


            <ImagePlusTextComponent image={img1} text='Etruscan red-figure calyx krater by the Painter of London F484 (ca. 420–400 BCE) showing Apollo (left), Zeus (center), and Hera (right)' />
            <TextSectionTemplate header={<h3 id='content_0'>Overview</h3>} text={<><p>Hera—the sister and wife of mighty Zeus—served as the queen of the Olympian deities and the goddess of women, family, and marriage. She was also the patron of the city of Argos; it was here that her worship in the ancient world was the most vibrant.</p> <p>“Cow-eyed”[1] Hera was usually represented as a stately queen with robe and headdress. In myth, she was remembered as a jealous goddess who was forever tormenting her husband’s many lovers and illegitimate children.</p> <p>Hera cut a regal figure with her traditional attributes of a robe or cloak, crown or headdress, and scepter. She was sometimes depicted with a peacock or even riding in a peacock-drawn chariot.</p> <p>In mythology, Hera was presented as bold, clever, and powerful, yet she was best known for her less flattering characteristics. Above all else, Hera was a jealous and vengeful goddess who struggled with her husband's infidelities and raged (often fruitlessly) against his many lovers, both mortal and divine.</p> </>} />
            <ImagePlusTextComponent image={img2} text='Statue of the Hera Borghese type, Roman copy after a 5th century BCE Greek original' />
            <TextSectionTemplate header={<h3 id='content_1'>Who were Hera’s children?</h3>} text={<><p>Hera bore several children to her husband Zeus, including Ares, the god of war; Eileithyia, the goddess of childbirth; and Hebe, the goddess of youth. The smith god Hephaestus was also Hera’s son, though ancient sources disagreed on his exact paternity: some traditions made him the son of both Hera and Zeus, while others made him the son of Hera alone, born without a father.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img3} text='Hera in the House of Hephaistos by William Blake Richmond (1902)' />
            <TextSectionTemplate header={<h3 id='content_2'>Hera and Io</h3>} text={<><p>Hera was forever waging war against her husband’s illicit lovers and illegitimate children. In one myth, Hera discovered that Zeus was having an affair with Io, a mortal girl from Argos and Hera’s own priestess. When Hera angrily confronted Zeus, Io was somehow transformed into a cow (there are different versions of who was responsible for this transformation).</p> <p>Io’s metamorphosis, though dramatic, was not enough for Hera; the jealous goddess also had her rival held prisoner. When the guard, Argus Panoptes, was killed at Zeus’ behest, Hera had Io pursued across the world by an unrelenting gadfly. In the end, Io reached Egypt, where she was restored to her original shape and allowed to live out her life in peace.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img4} text='Juno Discovering Jupiter with Io by Pieter Lastman (1618)' />
            <TextSectionTemplate header={<h3 id='content_3'>Roles and Powers</h3>} text={<><p>Hera was revered as a goddess of women, marriage, and motherhood, but also as a protector of cities and young men. As the wife of Zeus, she was the queen of the Olympian gods.</p> <p>Hera held sway over many domains, but her principal responsibilities lay in the realm of marriage and married life. She was sometimes connected with childbirth in the guise of “Hera Eileithyia” (in mythology, Eileithyia—the goddess of childbirth—was Hera’s daughter). By comparison, her connection to unmarried maidens and motherhood was less prominent, even though she was thought to preside over all aspects of female life. </p> <p>Another function of the goddess was protection of the polis, or city-state, and its young male warriors. This role was especially important in her major cult centers at Argos and Samos.</p> <p></p> </>} />
            <ImagePlusTextComponent image={img5} text='Photo of the remains of the Heraion on the Inachus Plain near Argos' />
            <TextSectionTemplate header={<h3 id='content_4'>Attributes</h3>} text={<><p>For the ancients, Hera was distinguished by her queenly qualities.[2] She was typically imagined crowned and clad in regal robes; in one tradition, it was the goddess Athena herself who wove Hera’s raiment.[3] She lived with the other Olympian gods on Mount Olympus, in a palace befitting her station. </p> <p>Hera’s favorite cities, according to Homer, were Argos, Mycenae, and Sparta.[4] Argos in particular was a very early and important cult center of the goddess (see below). </p> <p>Because she was a goddess of all aspects of female life, some local traditions claimed that Hera could restore her own virginity and become a maiden again. The goddess accomplished this by bathing annually in the spring of Canathus, in the Argolid.</p> <p>From the earliest periods of Greek history, Hera was associated with cattle—hence her Homeric epithet “cow-eyed” (see below). In this way, Hera is comparable to the Egyptian Hathor, a cow-faced goddess of motherhood. </p> <p>Hera was also associated from early on with the cuckoo bird, as it was said that Zeus had seduced her in the form of a cuckoo. A cuckoo sat on top of Hera’s scepter in many of her cult images.[6] The goddess was also connected with peacocks, horses, and lions.</p> </>} />
            <ImagePlusTextComponent boxShadow={'none'} image={img6} text='Juno and the Peacock by Wenceslaus Hollar (17th century)' />
            <TextSectionTemplate header={<h3></h3>} text={<><p>In myth, Hera’s most recognizable characteristics were her jealousy and vengefulness—traits amplified by her husband Zeus’ many affairs. Indeed, much of Hera’s mythology tells of the wrath she visited upon Zeus’ lovers and illegitimate children. </p> <p>Classics scholar Timothy Gantz describes Hera as “rather severe, not generally inclined to offer assistance to mortals and certainly with no sense of humor”—though he admits that “perhaps her marital situation is sufficient cause for that.”</p> <p>Among Hera’s closest companions was Hebe, the goddess of youth (and Hera’s own daughter). Hebe frequently served as Hera’s attendant; in the Iliad, for example, Hebe is depicted helping Hera yoke her wagon.[8] She is also described as Hera and Zeus’ cupbearer, thus becoming a kind of female counterpart to Ganymede, the male cupbearer of the gods.</p> <p></p> </>} />


        </div>
    </div>
  )
}

export default Hera

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */