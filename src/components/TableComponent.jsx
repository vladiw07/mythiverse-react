import React from 'react';
import './TableComponent.css';

function TableComponent({ BigHeader, miniHeader1, miniHeader2, information1, information2 }) {
    const numRows = BigHeader.length;
    const indices = Array.from({ length: numRows }, (_, index) => index);
  
    return (
      <>
        {indices.map((index, arrayIndex) => (
            
            
          <li key={index}>
            
            <div className="h2">
              {BigHeader[index]}
            </div>
  
            <div className='bothElementsWrapper'>
              <section>
                <header>{miniHeader1[index]}</header>
                <p>{information1[index]}</p>
              </section>
  
              <section>
                <header>{miniHeader2[index]}</header>
                <p>{information2[index]}</p>
              </section>
            </div>
            {arrayIndex !== numRows - 1 && <hr />} {/* Conditionally render hr */}
          </li>
          
        ))}
        
      </>
    );
  }

export default TableComponent;
