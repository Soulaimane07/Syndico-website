import React from 'react'

function Link(props) {

    const setShowLangs = props.setShowLangs

  return (
    <div className='link' onClick={()=> setShowLangs(false)}> 
      <h2> {props.title} </h2> 
    </div>
  )
}

export default Link