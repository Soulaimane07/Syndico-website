import React from 'react'

function Item(props) {
    const Lang = props.Lang
    const setShow = props.setShow

  return (
    Lang.type == "ltr" 
    ?<div key={props.id} className='item row row-cols-1 row-cols-md-2 g-4'>
        <div className='info'>
            <h1> {props.title1} </h1>
            <h1> {props.title2} </h1>
            <p> {props.text} </p>
            <button onClick={()=> setShow(true)}> <h2> {props.button} </h2> <i className='fas fa-angle-right'></i> </button>
        </div>
        <div className='image'>
            <img src={props.image} />
        </div>
    </div>
    :<div key={props.id} className='item rtl row row-cols-1 row-cols-md-2 g-4'>
        <div className='image'>
            <img src={props.image} />
        </div>
        <div className='info'>
            <h1> {props.title1} </h1>
            <h1> {props.title2} </h1>
            <p> {props.text} </p>
            <button onClick={()=> setShow(true)}> <i className='fas fa-angle-right'></i> <h4> {props.button} </h4> </button>
        </div>
    </div>
  )
}

export default Item