import React from 'react'
import './GreekOlympians.css'
import TextSectionTemplate from '../../Mythologies/TextSectionTemplate'
import GreekOlympian from './GreekOlympian'
import zeusImage from './GreekOlympiansImages/zeus.jpg'
import AthenaImage from './GreekOlympiansImages/athena.jpg'
import PoseidonImage from './GreekOlympiansImages/Poseidon.jpg'
import AphroditeImage from './GreekOlympiansImages/Aphrodite.jpg'
import HermesImage from './GreekOlympiansImages/Hermes.jpg'
import DemeterImage from './GreekOlympiansImages/Demeter.jpg'
import ApolloImage from './GreekOlympiansImages/Apollo.jpg'
import ArtemisImage from './GreekOlympiansImages/Artemis.jpg'
import DionysusImage from './GreekOlympiansImages/Dionysus.jpg'
import HeraImage from './GreekOlympiansImages/Hera.jpg'
import HephaestusImage from './GreekOlympiansImages/Hephaestus.jpg'
import HestiaImage from './GreekOlympiansImages/Hestia.jpg'
import AresImage from './GreekOlympiansImages/Ares.jpg'







function GreekOlympians() {
  return (
    <div className='greekOlympians'>
      <h1>Greek Olympians</h1>
      <TextSectionTemplate header={<h3>Overview</h3>} text={<><p>The Twelve Olympians were the principal deities of Greek mythology. Their name derives from the fact that they lived on Mount Olympus, a medium-sized mountain in northern Greece. With Zeus as their king, they were worshiped as the rulers of the cosmos throughout Greek history.</p> <p>The first generation of Olympians were children of the Titans Cronus and Rhea, themselves early rulers of the cosmos. Eventually, Zeus and his siblings overthrew the Titans and made themselves the new gods. They continued to rule undefeated (though not unchallenged) for the remainder of the Greek mythical period. </p> <p>The second generation of Olympians were mostly offspring of Zeus and his siblings. They included Athena, goddess of wisdom, Ares, god of war, and the twins Apollo and Artemis.</p> <p></p> <p>Not all sources agreed on the identities of the Twelve Olympians. In some traditions, the domestic goddess Hestia, one of the first generation of Olympians, gave up her seat to Dionysus when he became a god. Because of this, there are actually thirteen gods who were counted among the Twelve Olympians in antiquity.</p></>} />

      <h2>List of Olympians</h2>
      <div className="olympian-list">
        <GreekOlympian path='/zeus' title='Zeus' text='The “cloud-gatherer”—king of the Greek gods and lord of the skies' image={`url(${zeusImage})`} />
        <GreekOlympian path='/athena' title='Athena' text='Greek goddess of wisdom, craftwork, and war' image={`url(${AthenaImage})`} />
        <GreekOlympian path='/poseidon' title='Poseidon' text='Lord of all waters; Greek god of the seas, sailors, and earthquakes' image={`url(${PoseidonImage})`} />
        <GreekOlympian path='/aphrodite' title='Aphrodite' text='Greek goddess of love, passion, and procreation' image={`url(${AphroditeImage})`} />
        <GreekOlympian path='/hermes' title='Hermes' text='Greek messenger god; patron of travelers, merchants, and thieves' image={`url(${HermesImage})`} />
        <GreekOlympian path='/demeter' title='Demeter' text='Greek goddess of family, fertility, and agriculture' image={`url(${DemeterImage})`} />
        <GreekOlympian path='/apollo' title='Apollo' text='Beloved divine patron of music, poetry, and artistic inspiration' image={`url(${ApolloImage})`} />
        <GreekOlympian path='/artemis' title='Artemis' text='Greek goddess of the hunt; guardian of wild places, maidens, and mothers' image={`url(${ArtemisImage})`} />
        <GreekOlympian path='/dionysus' title='Dionysus' text='Greek god of wine, revelry, music, and dance' image={`url(${DionysusImage})`} />
        <GreekOlympian path='/hera' title='Hera' text='Queen of the Greek gods, who reigned over women, family, and marriage' image={`url(${HeraImage})`} />
        <GreekOlympian path='/hephaestus' title='Hephaestus' text='Craftsman of the Greek gods, master of metallurgy, and patron of artisans' image={`url(${HephaestusImage})`} />
        <GreekOlympian path='/hestia' title='Hestia' text='Greek goddess of the hearth and home' image={`url(${HestiaImage})`} />
        <GreekOlympian path='/ares' title='Ares' text='Greek god of rage, aggression, and the most violent aspects of war' image={`url(${AresImage})`} />
      </div>
    </div>
  )
}

export default GreekOlympians