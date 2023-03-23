import React from 'react'

function Module(props) {
    const type = props.Lang.type

    const setShow = props.setShow
    const setPopId = props.setPopId

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }

    return (
    props.id % 2 == 0 
        ?<div className="module ">
            <div className='image'>
                <img src={props.image} />
            </div>
            <div className='content'>
                <h2 style={{color:`${props.color}`}}> {props.title} </h2>
                <p> {truncate(props.text, 150)} </p>
                <button onClick={()=>setShow(true) & setPopId(props.id)} style={{color:`${props.color}`}}> {props.button} </button>
            </div>
        </div>
        :<div className="module">
            <div className='content'>
                <h2 style={{color:`${props.color}`}}> {props.title} </h2>
                <p> {truncate(props.text, 150)} </p>
                <button onClick={()=>setShow(true) & setPopId(props.id)} style={{color:`${props.color}`}}> {props.button} </button>
            </div>
            <div className='image'>
                <img src={props.image} />
            </div>
        </div>
    )
}

export default Module
