import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Module from './Module'
import './Modules.css'

import Popup from './Popup';

function Modules(props){
    const Lang = props.Lang

    const [show, setShow] = useState(false)
    const [popId, setPopId] = useState(0)
    
    const [data, setData] = useState([])
    
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/modules')
      .then(response=>{
        setData(response.data);
      });
    }, [])

    const [dataex, setDataex] = useState([]) 

    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/modulesex')
      .then(response=>{
        setDataex(response.data);
      });
    }, [])

    const popData = data[popId]

    let title
    let text
    let button
    let image
    let color

    const path = 'http://127.0.0.1:8000/uploads/module/'

    let titleex
    let para1ex
    let para2ex

    props.Lang.sub == 'Fr' &&
  dataex.map((item,key)=>(
    titleex = item.title_Fr,
    para1ex = item.para1_Fr,
    para2ex = item.para2_Fr
  ))

  props.Lang.sub == 'En' &&
  dataex.map((item,key)=>(
    titleex = item.title_An,
    para1ex = item.para1_An,
    para2ex = item.para2_An
  ))

  props.Lang.sub == 'Ar' &&
  dataex.map((item,key)=>(
    titleex = item.title_Ar,
    para1ex = item.para1_Ar,
    para2ex = item.para2_Ar
  ))

  return (
    <>
    <div id='modules' className={`modules ${Lang.type == "rtl" && `rtl`} `}>
      <h1> {titleex} </h1>
      <p> {para1ex} </p> 

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.map((item,key)=>(
          <>
            {Lang.sub == 'Fr' ?
            <div style={{display: "none"}}>
                {title = item.title_Fr}
                {text = item.para_Fr}
                {button = item.button_Fr}
                {color = item.color}
                {image = item.image}
            </div>
            :""}
            {Lang.sub == 'En' ?
            <div style={{display: "none"}}>
                {title = item.title_An}
                {text = item.para_An}
                {button = item.button_An}
                {color = item.color}
                {image = item.image}
            </div>
            :""}
            {Lang.sub == 'Ar' ?
            <div style={{display: "none"}}>
                {title = item.title_Ar}
                {text = item.para_Ar}
                {button = item.button_Ar}
                {color = item.color}
                {image = item.image}
            </div>
            :""
          }
            
          <Module 
            setPopId={setPopId} 
            setShow={setShow} 
            key={key} id={key} 
            Lang={Lang} 
            title={title} 
            text={text}
            button={button} 
            color={color}
            image={`${path}${image}`} 
          />
          </>
        ))}
      </div>

      <p> {para2ex} </p> 
    </div>

    {show && 
      <Popup 
        popId={popId} 
        setPopId={setPopId} 
        Lang={Lang} 
        popData={popData} 
        setShow={setShow} 
        path={path}
        length={data.length}
      />
    } 
    </>
  )
}

export default Modules

{/* <div className="row row-cols-1 row-cols-md-2 g-4">
    {Lang.data.modules.boxes.map((item,key)=>(
        <Module 
          setPopId={setPopId} 
          setShow={setShow} 
          key={key} id={key} 
          Lang={Lang} 
          title={item.title} 
          text={item.para} 
          button={item.button} 
          color={item.color} 
          image={item.image} 
        />
    ))}
</div> */}