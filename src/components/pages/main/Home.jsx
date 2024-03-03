import React from 'react'
import WelcomeSection from '../../mainPageParts/WelcomeSection';
import transition from '../../../Transition/transition'
import GreekMythologySection from '../../mainPageParts/GreekMythologySection';
import NorseMythologySection from '../../mainPageParts/NorseMythologySection';
import EgyptianMythologySection from '../../mainPageParts/EgyptianMythologySection';


function Home() {
  return (
    
    <>
      <WelcomeSection />
      <GreekMythologySection />
      <NorseMythologySection />
      <EgyptianMythologySection />
    </>
    
    
  )
}

export default transition(Home);