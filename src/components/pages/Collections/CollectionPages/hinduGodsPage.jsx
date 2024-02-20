import React from 'react'
import HeroGodTemplate from './HeroGodTemplate'

import H1PlusTextSection from '../CollectionComponents/H1PlusTextSection'


import vishnuImage from '../CollectionImages/vishnuImage.jpg'
import ganeshaImage from '../CollectionImages/ganeshaImage.jpg'
import parvatiImage from '../CollectionImages/parvatiImage.jpg'
import brahmaImage from '../CollectionImages/brahmaImage.webp'
import krishnaImage from '../CollectionImages/krishnaImage.jpg'

function hinduGodsPage() {
  return (
    <div>
        <H1PlusTextSection title='Hindu Gods' collectionText='Hindu deities are the gods and goddesses in Hinduism. Deities in Hinduism are as diverse as its traditions, and a Hindu can choose to be polytheistic, pantheistic, monotheistic, monistic, even agnostic, atheistic, or humanist. The terms and epithets for deities within the diverse traditions of Hinduism vary, and include Deva, Devi, Ishvara, Ishvari, Bhagavān and Bhagavati.'  />
        <ul className='elementsUl'>


        
        <HeroGodTemplate elementText='Vishnu' image={vishnuImage} path='/vishnu'   />
        <HeroGodTemplate elementText='Ganesha' image={ganeshaImage} path='/ganesha'  />
        <HeroGodTemplate elementText='Parvati' image={parvatiImage} path='/parvati' />
        <HeroGodTemplate elementText='Brahma' image={brahmaImage} path='/brahma' />
        <HeroGodTemplate elementText='Krishna' image={krishnaImage} path='/krishna' />
        
        
        
        </ul>

    </div>
  )
}

export default hinduGodsPage