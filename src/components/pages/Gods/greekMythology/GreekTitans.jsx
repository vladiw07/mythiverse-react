import React from 'react'
import TextSectionTemplate from '../../Mythologies/TextSectionTemplate'
import GreekOlympian from './GreekOlympian'
import atlasImage from './GreekTitansImages/atlas.jpg'
import prometheusImage from './GreekTitansImages/prometheus.jpg'
import cronusImage from './GreekTitansImages/cronus.jpg'
import coeusImage from './GreekTitansImages/coeus.jpg'
import criusImage from './GreekTitansImages/crius.jpg'
import hyperionImage from './GreekTitansImages/hyperion.jpg'

function GreekTitans() {
  return (
   
      <div className='greekOlympians'>
      <h1>Greek Titans</h1>
      <TextSectionTemplate header={<h3>Overview</h3>} text={<><p>The Titans were immortal deities who ruled the cosmos before the Olympians. The original twelve Titans—the children of the primordial gods Gaia (earth) and Uranus (heaven)—assumed power by overthrowing their tyrannical father, only to become tyrants themselves.</p> <p>Cronus, the youngest Titan, became king after usurping Uranus. Fearing a similar fate, he attempted to prevent any revolts against his own power by swallowing his children as soon as they were born. But Zeus, Cronus’ youngest son, managed to escape, and he eventually freed his siblings. Together, they waged a ten-year war against Cronus and the other Titans known as the Titanomachy. In the end, the Titans were defeated; most of them were imprisoned in Tartarus by the new gods, the Olympians—so called because they dwelled atop Mount Olympus.</p> <p>The Titans included not only the original twelve children of Gaia and Uranus but also some of their descendants, such as Prometheus, Atlas, Metis, and Leto. Though they were sometimes represented as cruel in Greek mythology, the period during which the Titans ruled was nonetheless regarded as a Golden Age. Unlike the Olympians, however, the Titans were almost never worshiped in ancient Greece (an exception is Rhea, the mother of Zeus and the Olympians, who was sometimes worshiped as “Mother of the Gods” or “Great Mother”).</p> <p>Explore the Titans of ancient Hellenic civilization below, including Cronus, Rhea, Prometheus, and more.</p></>} />

      <h2>List of Greek Titans</h2>
      <div className="olympian-list">
      <GreekOlympian title='Atlas' text='Immensely strong Greek Titan known for carrying the world on his shoulders' image={`url(${atlasImage})`}  />
      <GreekOlympian path='/prometheus' title='Prometheus' text='Wily Greek Titan who angered the gods by giving fire to mankind' image={`url(${prometheusImage})`}  />
      <GreekOlympian title='Cronus' text='Titan who overthrew his father to rule the cosmos' image={`url(${cronusImage})`}  />
      <GreekOlympian title='Coeus' text='Inquisitive Greek Titan and grandfather to the Olympians Apollo and Artemis' image={`url(${coeusImage})`}/>
      <GreekOlympian title='Crius' text='The “ram”—an obscure Greek Titan who fathered numerous gods' image={`url(${criusImage})`}/>
      <GreekOlympian title='Hyperion' text='The “high one”—Greek Titan who fathered the gods of the sun, moon, and dawn' display={'none'} margin={'0 auto'} textAlign={'center'} imageMarginTop={'-100px'} />
      <GreekOlympian title='Iapetus' text='Powerful Greek Titan who fathered Atlas and Prometheus' display={'none'} margin={'0 auto'} textAlign={'center'} imageMarginTop={'-100px'}/>
      <GreekOlympian title='Oceanus' text='Greek Titan who embodied all the waters of the world' display={'none'} margin={'0 auto'} textAlign={'center'} imageMarginTop={'-100px'}/>
      <GreekOlympian title='Rhea' text='Mother of the Olympians who helped dethrone her husband Cronus'display={'none'} margin={'0 auto'} textAlign={'center'} imageMarginTop={'-100px'}/>
      <GreekOlympian title='Mnemosyne' text='Inspirational Greek Titan known as the divine source of all memory' display={'none'} margin={'0 auto'} textAlign={'center'} imageMarginTop={'-100px'}/>
      <GreekOlympian title='Phoebe' text='Greek Titan and grandmother to Apollo and Artemis' display={'none'} margin={'0 auto'} textAlign={'center'} imageMarginTop={'-100px'}/>
      <GreekOlympian title='Tethys' text='Greek Titan known for her maternal nature, with over three thousand children' display={'none'} margin={'0 auto'} textAlign={'center'} imageMarginTop={'-100px'}/>
      <GreekOlympian title='Theia' text='Greek Titan who gave birth to the gods of the sun, moon, and dawn' display={'none'} margin={'0 auto'} textAlign={'center'} imageMarginTop={'-100px'}/>
      <GreekOlympian title='Themis' text='“Lady Justice”—Greek Titan who embodied the concepts of justice and fairness' display={'none'} margin={'0 auto'} textAlign={'center'} imageMarginTop={'-100px'}/>
      </div>
    </div>
  )
}

export default GreekTitans