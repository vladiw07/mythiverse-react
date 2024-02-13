import React from 'react'
import TextSectionTemplate from '../Mythologies/TextSectionTemplate'
import ImagePlusTextComponent from '../Mythologies/ImagePlusTextComponent'


import ContentComponent from '../../ContentComponent'
import TableComponent from '../../TableComponent'

function Shiva() {
  return (
    <div className='wrapper'>
      <ContentComponent contentLi={[{ title: 'Overview' }, 
      { title: 'Etymology' }, 
      { title: 'Attributes' }, 
      { title: 'Family' }, 
      { title: 'Mythology' },
      
      ]} />
      <div className='godTemplate'>
        <h2>ddaaddad</h2>
        <h1>Shiva</h1>
        
        
        



      </div>
    </div>
  )
}

export default Shiva

/* <TextSectionTemplate header={<h3></h3>} text={<><p></p></>} /> */