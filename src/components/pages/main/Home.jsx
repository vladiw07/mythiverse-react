import React from 'react'
import WelcomeSection from '../../mainPageParts/WelcomeSection';
import transition from '../../../Transition/transition'
import AllMythologiesSection from '../../mainPageParts/AllMythologiesSection';


function Home() {
  return (
    
    <>
      <WelcomeSection />
      <AllMythologiesSection />
    </>
    
    
  )
}

export default transition(Home);