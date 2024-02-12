import React from 'react'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'


import img1 from './OlympiansImages/Dionysus1.avif'
import img2 from './OlympiansImages/Dionysus2.avif'
import img3 from './OlympiansImages/Dionysus3.avif'
import img4 from './OlympiansImages/Dionysus4.avif'
import img6 from './OlympiansImages/Dionysus6.avif'
import img7 from './OlympiansImages/Dionysus7.avif'

function Dionysus() {
  return (
    <div className='wrapper'>
        <div className='godTemplate'>
            <h2>Olympian God</h2>
            <h1>Dionysus</h1>


            <ImagePlusTextComponent image={img1} text='Jupiter and Semele by Gustave Moreau (between 1894 and 1895)' />
            <TextSectionTemplate header={<h3>Overview</h3>} text={<><p>Dionysus, the son of Zeus and Semele, was a Greek god who represented the more spontaneous and unrestrained aspects of human experience. He was the god of wine, winemaking, fertility, music, dance, and inspiration, and was sometimes counted among the Twelve Olympians—the most important gods of the Greek pantheon.</p> <p>The mythology and cult of Dionysus were often characterized by madness. Some sources claimed that Dionysus used his invention of wine to drive his enemies mad, while others said that Dionysus himself went mad. Said to have traveled far and wide, Dionysus was regarded as a bringer of civilization in the form of wine cultivation—with both positive and negative consequences.</p> <p></p> <p></p> </>} />
            
            <TextSectionTemplate header={<h3>What were Dionysus’ attributes?</h3>} text={<><p>Dionysus was usually imagined as a youthful god. His most common attributes pertained to his function as the god of wine and intoxication; these included grapevines or grapes and a special kind of ivy-covered wand called a thyrsus.</p> <p>In art, Dionysus was often shown holding a large wine cup. He was also associated with wild cats, especially leopards and panthers; ancient artists liked to depict him riding these exotic creatures. His entourage included mythical beings such as satyrs and silens and frenzied female worshippers called maenads.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img2} text='Sculpture of a drunken Dionysus and a satyr, 2nd century CE Roman copy after a Hellenistic Greek original' />
            <TextSectionTemplate header={<h3>How was Dionysus worshipped?</h3>} text={<><p>Dionysus was worshipped throughout the Greek world, though the Greeks themselves thought of him as a foreign god imported from the East. The cult of Dionysus tended to revolve around ecstasy and intoxication; because of this, Dionysus was often viewed as a god who lived on the edge of civilization.</p> <p>At the same time, Dionysus was worshipped as a god of culture and the arts. Indeed, it was at the annual festival of Dionysus in Athens that Greek tragedies and comedies—some of the most important literary creations of the ancient world—were performed in honor of Dionysus.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img3} text='Sacrifice to Bacchus by Massimo Stanzione (ca. 1634)' />
            <TextSectionTemplate header={<h3>Dionysus and Ariadne</h3>} text={<><p>Dionysus’ most famous consort was Ariadne, a Cretan princess who helped the hero Theseus defeat the Minotaur. After Theseus abandoned Ariadne on the island of Naxos, Dionysus happened to catch sight of her while reveling with his entourage. Enchanted by the beautiful princess, Dionysus whisked her away to become his lover.</p> <p>The meeting between Dionysus (surrounded by his extravagant retinue) and the distraught Ariadne became an extremely popular subject in literature and art, both ancient and modern.</p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img4} text='The Wedding of Bacchus and Ariadne by Guy Louis Vernansal the Elder, formerly attributed to Charles Le Brun (ca. 1709)' />
            <TextSectionTemplate header={<h3>Attributes</h3>} text={<><p>Dionysus’ main attributes were, of course, related to wine and viticulture: vines, ivy, cups of wine, and so forth. The god was known to reveal himself to his human worshippers in various forms, both human and animal. He was, above all, an ambivalent god, “the most terrible and yet most mild to men.”[21] This was likely a reflection of the Greeks’ understanding that wine could bring both joy and suffering.</p> <p></p> <p></p> <p></p> </>} />
            <ImagePlusTextComponent image={img6} text='The "Hope Dionysus," a 1st-century CE Roman copy after a Greek original of the 4th century BCE showing Dionysus leaning on a female figure; restored by Vincenzo Pacetti' />
            <TextSectionTemplate header={<h3></h3>} text={<><p>Like most of the Greek gods, Dionysus was imagined as anthropomorphic (meaning he had the features of a human being). However, Dionysus could also be theriomorphic, sporting the features of various animals. He was especially connected with bulls, whose form he often assumed,[23] though he could also manifest as a young goat,[24] a ram,[25] a lion,[26] or a snake.</p> <p>Dionysus was remarkable for the variety of forms his appearance could take: he could be human or animal, young or old, bearded or beardless, feminine or masculine. Ancient writers and artists placed a particular emphasis on Dionysus’ hair, which was usually imagined as flowing and curly;[28] though sometimes described as dark,[29] it was more commonly blonde or tawny.</p> <p>Dionysus was typically represented wearing a chiton, a kind of tunic fastened at the shoulder, over which he wore a nebris—the skin of a fawn, kid, or leopard.[31] The god often sported a crown of foliage, vines, ivy, or other crops on his head, with his feet clad in high boots such as kothornos[32] or embas.</p> <p>Dionysus was usually shown holding his attributes, such as a branch of pine or fir, or a vine or ivy plant. His special rod was the thyrsus—a stem of narthex or fennel topped by a pinecone and foliage. Dionysus’ attributes also included all kinds of musical instruments, especially the tympanum, a kind of hand drum.</p> <p>Dionysus was usually accompanied by his entourage (or thiasos) of frenzied worshippers. These were often headed by the maenads (also known as Bacchae, Bassarides, or Thyiades)—scantily clad female worshippers in a state of ritual ecstasy. In early sources, the maenads were sometimes worshipped as the infant Dionysus’ nurses.</p> <p>The god’s entourage also included other nymphs as well as satyrs or silens—joyful woodland creatures with a human torso and head, but with the ears, tail, and sometimes hind legs of a horse. Silenus, the eldest of the satyrs, was often described as the tutor of Dionysus (though this role was later assumed by Hermes).</p> </>} />
            <ImagePlusTextComponent image={img7} text='Attic black-figure neck-amphora showing Dionysus with satyrs and maenads (ca. 550–540 BCE)' />
            <TextSectionTemplate header={<h3></h3>} text={<><p>Dionysus was also associated with other gods of nature, culture, and the arts, including the Charites (the Graces), the Muses, Pan, Apollo, Aphrodite, and Rhea (or her Phrygian counterpart Cybele).</p> <p></p> <p></p> <p></p> </>} />







        </div>
    </div>
  )
}

export default Dionysus

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p> <p></p> <p></p> <p></p> </>} /> */