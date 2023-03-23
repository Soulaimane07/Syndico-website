import React from 'react'

function Popup(props) {
    const setShow = props.setShow
    const popData = props.popData
    const setPopId = props.setPopId
    const popId = props.popId
    const type = props.Lang.type
    const length = props.length
  
    return (
    type == "ltr" ? (
    <div className='popup'>
        <button onClick={()=>setShow(false)} style={{color:`${popData.color}`}} className="close"><i className='fas fa-close'></i></button>
        <button className='left' style={{color:`${popData.color}`}} onClick={()=>setPopId(popId-1 <= -1 ? length-1 : popId - 1)}><i className='fas fa-angle-left'></i></button>
        <div className='container row row-cols-1 row-cols-md-2 g-4'>
        <div className='content'>
            <h1 style={{color:`${popData.color}`}}> {props.Lang.sub == 'Fr' ? popData.title_Fr : popData.title_An } </h1>
            <p> {props.Lang.sub == 'Fr' ? popData.para_Fr : popData.para_An } </p>
        </div>
        <div className='image'>
            <img src={`${props.path}${popData.image}`} />
        </div>
        </div>
        <button className='right' style={{color:`${popData.color}`}} onClick={()=>setPopId(popId+1 > length-1 ? 0 : popId+1)} ><i className='fas fa-angle-right'></i></button>
    </div>
    ):
    <div className='popup rtl'>
        <button onClick={()=>setShow(false)} style={{color:`${popData.color}`}} className="close"><i className='fas fa-close'></i></button>
        <button className='left' style={{color:`${popData.color}`}} onClick={()=>setPopId(popId-1 <= -1 ? length-1 : popId - 1)}><i className='fas fa-angle-left'></i></button>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
            <div className='image'>
                <img src={`${props.path}${popData.image}`} />
            </div>
            <div className='content'>
                <h1 style={{color:`${popData.color}`}}> {popData.title_Ar} </h1>
                <p> {popData.para_Ar} </p>
            </div>
        </div>
        <button className='right' style={{color:`${popData.color}`}} onClick={()=>setPopId(popId+1 > length-1 ? 0 : popId+1)} ><i className='fas fa-angle-right'></i></button>
    </div>
  )
}

export default Popup