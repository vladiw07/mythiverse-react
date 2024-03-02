import React from 'react'
import WelcomeSection from '../../mainPageParts/WelcomeSection';
import transition from '../../../Transition/transition'
import GreekMythologySection from '../../mainPageParts/GreekMythologySection';
import NorseMythologySection from '../../mainPageParts/NorseMythologySection';


function Home() {
  return (
    
    <>
      <WelcomeSection />
      <GreekMythologySection />
      <NorseMythologySection />
    </>
    
    
  )
}

export default transition(Home);