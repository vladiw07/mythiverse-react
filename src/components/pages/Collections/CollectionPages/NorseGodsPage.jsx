import React from 'react'
import H1PlusTextSection from '../CollectionComponents/H1PlusTextSection'
import HeroGodTemplate from './HeroGodTemplate'

import odinImage from '../CollectionImages/odinImage.jpg'
import friggImage from '../CollectionImages/friggImage.jpg'
import thorImage from '../CollectionImages/thorImage.jpg'
import freyaImage from '../CollectionImages/freyaImage.jpg'
import lokiImage from '../CollectionImages/lokiImage.jpg'
import baldurImage from '../CollectionImages/baldurImage.jpg'
import heimdallImage from '../CollectionImages/heimdallImage.jpg'
import freyrImage from '../CollectionImages/freyrImage.jpg'
import nerthusImage from '../CollectionImages/nerthusImage.jpg'
import tyrImage from '../CollectionImages/tyrImage.webp'
import njordImage from '../CollectionImages/njordImage.jpg'
import idunImage from '../CollectionImages/idunImage.jpg'

function NorseGodsPage() {
  return (
    <div>
        <H1PlusTextSection title='Norse Gods'  />
        <ul className='elementsUl'>
        <HeroGodTemplate elementText='Odin' image={odinImage} />
        <HeroGodTemplate elementText='Frigg' image={friggImage}  />
        <HeroGodTemplate elementText='Thor' image={thorImage}  />
        <HeroGodTemplate elementText='Freya' image={freyaImage} />
        <HeroGodTemplate elementText='Loki' image={lokiImage}  />
        <HeroGodTemplate elementText='Baldur' image={baldurImage}  />
        <HeroGodTemplate elementText='Heimdall' image={heimdallImage}  />
        <HeroGodTemplate elementText='Idun' image={idunImage} />
        <HeroGodTemplate elementText='Freyr' image={freyaImage}  />
        <HeroGodTemplate elementText='Nerthus' image={nerthusImage}  />
        <HeroGodTemplate elementText='Tyr' image={tyrImage} />
        <HeroGodTemplate elementText='Njord' image={njordImage}  />
        
        
        </ul>

    </div>
  )
}

export default NorseGodsPage