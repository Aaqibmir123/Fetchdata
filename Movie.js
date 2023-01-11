import React from 'react'

export const Movie = (props) => {
    console.log(props);
  return (
    <>
    
       <div style={{background:"yellow"}}>
       <h2>{props.id}</h2>
        <h2>{props.title}</h2>
        <h2>{props.opentext}</h2>
       </div>
    
    </>
  )
  
}
