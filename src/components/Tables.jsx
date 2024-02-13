import React from 'react'
import TableComponent from './TableComponent'
import './TableComponent.css'

function Table( { BigHeader, miniHeader1, miniHeader2, information1, information2 } ) {
  return (
    <>
<div className='tableDiv'>
        <ul>
            <TableComponent BigHeader={BigHeader} miniHeader1={miniHeader1} miniHeader2={miniHeader2} information1={information1} information2={information2} /> 
        </ul>
    </div>
    </>
  )
}

export default Table