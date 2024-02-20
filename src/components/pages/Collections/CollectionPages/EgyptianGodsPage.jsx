import React from 'react'
import HeroGodTemplate from './HeroGodTemplate'
import H1PlusTextSection from '../CollectionComponents/H1PlusTextSection'

import amunImage from '../CollectionImages/amunImage.jpg'
import anubisImage from '../CollectionImages/anubisImage.jpg'
import bastetImage from '../CollectionImages/bastetImage.jpg'
import gebImage from '../CollectionImages/gebImage.webp'
import hathorImage from '../CollectionImages/hathorImage.jpg'
import horusImage from '../CollectionImages/horusImage.jpg'
import isisImage from '../CollectionImages/isisImage.jpg'
import nephthysImage from '../CollectionImages/nephthysImage.jpg'
import nutImage from '../CollectionImages/nutImage.png'
import osirisImage from '../CollectionImages/osirisImage.jpg'
import ptahImage from '../CollectionImages/ptahImage.jpg'
import RaImage from '../CollectionImages/RaImage.jpg'
import setImage from '../CollectionImages/setImage.jpg'
import thothImage from '../CollectionImages/thothImage.jpg'

function EgyptianGodsPage() {
  return (
    <div>

        <H1PlusTextSection title='Egyptian Gods' collectionText='Egyptian gods and goddesses were incarnations of both natural phenomena, such as the sun, and social phenomena, like knowledge. Egypt itself was ruled by a pharaoh who claimed to be the gods’ representative on earth, and who acted as a mediator between mankind and the divine.' />
        <ul className='elementsUl'>
        <HeroGodTemplate elementText='Amun' image={amunImage} />
        <HeroGodTemplate elementText='Anubis' image={anubisImage} />
        <HeroGodTemplate elementText='Bastet' image={bastetImage} />
        <HeroGodTemplate elementText='Geb' image={gebImage} />
        <HeroGodTemplate elementText='Hathor' image={hathorImage} />
        <HeroGodTemplate elementText='Horus' image={horusImage} />
        <HeroGodTemplate elementText='Isis' image={isisImage} />
        <HeroGodTemplate elementText='Nephthys' image={nephthysImage} />
        <HeroGodTemplate elementText='Nut' image={nutImage} />
        <HeroGodTemplate elementText='Osiris' image={osirisImage} />
        <HeroGodTemplate elementText='Ptah' image={ptahImage} />
        <HeroGodTemplate elementText='Ra' image={RaImage} />
        <HeroGodTemplate elementText='Set' image={setImage} />
        <HeroGodTemplate elementText='Thoth' image={thothImage} />
        

        </ul>

    </div>
  )
}

export default EgyptianGodsPage