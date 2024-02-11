import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'

import anubis1 from './egyptianGodSectionImages/anubis1.avif'
import anubis2 from './egyptianGodSectionImages/anubis2.avif'
import anubis3 from './egyptianGodSectionImages/anubis3.avif'

function AnubisTemplate() {
  return (
    <div className='wrapper'>
      <div className='godTemplate'>
        <h2>Egyptian God</h2>
        <h1>Anubis</h1>

        <TextSectionTemplate header={<h3>Overview</h3>} text={<><p>One of the most famous figures of the Ancient Egyptian pantheon, Anubis was a powerful deity whose role shifted over time. Before Osiris and Isis rose to prominence, Anubis was worshipped as the god of the dead. When Osiris took on this role, however, Anubis became the god of mummification (as well as Osiris’s bastard son).</p></>} />
        <ImagePlusTextComponent image={anubis1} text='Seen here in his traditional form, this Anubis statuette (332–30 BCE) greets the recently deceased to the underworld.' />
        <TextSectionTemplate header={<h3></h3>} text={<><p>Despite his significance and multi-millennia long worship, Anubis was seldom a main character in the Egyptian mythos. He was an integral part of the story of Osiris’s murder, in which he embalmed the deceased god. Thereafter, he was known as the Lord of the Mummy Wrapping.</p></>} /> 
        
        <TextSectionTemplate header={<h3>Etymology</h3>} text={<><p>Like much of the Egyptian pantheon, Anubis’s name came to us as a Greek translation of his Egyptian name. This was partly because the Greeks continued to worship or at least admire the Egyptian gods, but also due to the ambiguity of the vowelless writing system employed in Ancient Egyptians. An accurate, albeit unhelpful, rendering of his name in Ancient Egyptian is jnpw.[1] Some translations of jnpw have rendered Anubis’s Egyptian name as “Anpu” or “Inpu.”</p></>} />

        <TextSectionTemplate header={<h3></h3>} text={<><p>Anubis had many epithets, including: <ul style={{paddingLeft: '40px'}}><li>The First of the Westerners</li><li>Lord of the Mummy Wrapping</li><li>Chief of the Western Highland (the land of the dead was thought to be in the west, where the sun set)</li><li>Counter of Hearts</li><li>Chief of the Necropolis</li><li>Prince of the Court of Justice</li><li>Master of Secrets</li><li>The One Who Eats His Father</li><li>The Dog Who Swallows Millions</li></ul></p></>} />

        <TextSectionTemplate header={<h3>Attributes</h3>} text={<><p>One of the most iconic Egyptian deities, Anubis possessed several distinctive features. While he had a human body (like most Egyptian gods), he also had a jackal’s head and tail. He was typically all black, and was often portrayed in a seated position.[8] Like many Egyptian gods, Anubis was capable of shapeshifting; he was so shocked at the sight of Osiris’s dead body that he immediately turned into a lizard.</p></>} />
        <ImagePlusTextComponent image={anubis2} text='Anubis enacting the mummification ritual, as depicted in the tomb of the artisan Sennedjem at Deir el-Medina. Pharaohs did not hold a monopoly of mummification—wealthy individuals like Sennedjem could and did comission elaborate tombs with paintings like this adorning the walls.' />
        <TextSectionTemplate header={<h3></h3>} text={<><p>Anubis was a faithful follower of Isis, who adopted him following his abandonedment as an infant. A fierce fighter, he routinely defeating the god Set in battle.</p></>} />

        <TextSectionTemplate header={<h3>Family</h3>} text={<><p>As one of the oldest gods in the Egyptian pantheon, Anubis had a varied and somewhat inconsistent mythology. Initially, Anubis was a son of Ra who served as the primary god of the dead. As time went on and the cult of Osiris grew in power, Anubis’s stories were incorporated into this new, larger mythos.</p> <p>By 2000BCE, Anubis had become a bastard child of Nephthys and Osiris. In this new version of Anubis’s origins, Nephthys abandoned Anubis for fear that her husband Set would discover her infidelity. Isis later found the abandoned child and adopted him.</p> <p>In several alternative mythologies, Anubis was said to be the son of either Bastet or Set.</p> <p>In “The Tale of Two Brothers,” Anubis had a younger brother named Bata. An ancient regional deity, Bata would ultimately not survive the passage of time or the vagaries of religious change.</p> <p>In myths that place him as the son of Osiris, Anubis had several brothers, including Horus, Babi, Sopdet, and Wepwawet.</p></>} />

        <TextSectionTemplate header={<h3>Mythology</h3>} text={<><p>Anubis’s origin and role as god of the dead were directly linked to his depiction as a jackal or jackal-headed man. Jackals were scavengers who would frequent burial sites and uncover shallow graves. The Egyptians may have enshrined the jackal’s behavior in order to make it seem benevolent.[13] Alternatively, Anubis worship may have developed as a means to exercise supernatural control over jackals. If Anubis was worshipped properly, the jackals might not disturb the venerated dead.</p></>} />
        <ImagePlusTextComponent image={anubis3} text='This wooden statue (664-30 BCE) shows Anubis poised and ready to defend a burial site. In this role, Anubis closely resembles a full-bodied jackal.' />
        <TextSectionTemplate header={<h3></h3>} text={<><p>Early on in Egyptian history, Anubis was worshiped as a god of the dead. After Osiris rose to prominence, Anubis’s role changed. He became a god of embalming and psychopomp who escorted the dead on their journey to the afterlife.</p> <p>In the post-Late Period (664-30BCE) era, Anubis became associated with necromancers. Demotic (a written language that superseded hieroglyphs) spells would invoke Anubis, who would then act as an intermediary, fetching spirits or gods from the underworld.</p></>} />

        <TextSectionTemplate header={<h3>Origin Myth</h3>} text={<><p>The most famous version of Anubis’s origin came to us from the Greek historian Plutarch (46-120CE). Following Osiris’s murder at the hands of his brother Set, Isis set out in search of his body. It was during this search that she learned her sister Nephthys had born a child with Osiris.</p> <p>Fearing that her husband, Set, would discover her infidelity, Nephthys abandoned the newborn child. Isis, known for her maternal benevolence, found the child and adopted him. She named the child Anubis, and he thereafter serverd as her loyal protector.</p></>} />




      </div>
    </div>
  )
}

export default AnubisTemplate

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p></>} /> */