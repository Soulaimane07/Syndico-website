import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Footer.css'

function Footer(props) {
    const Lang = props.Lang

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/footer')
        .then(response=>{
            setData(response.data);
        })
    }, [])


    let logo
    let text
    
    {data.map((item,key)=>(
      <>
      {item.title == 'CopyRights' ?
        <>
        {logo = item.logo}

        {Lang.sub == 'Fr' ?
          text = item.para_Fr
        :""}

        {Lang.sub == 'En' ?
          text = item.para_An
        :""}

        {Lang.sub == 'Ar' ?
          text = item.para_Ar
        :""}
        </>
      :""}
      </>
    ))}

  return (
    <div className='footer'>
      <div className='icons'>
        {data.map((item,key)=>(
          item.title !== "CopyRights" &&
          <a href={item.link} target="-blank" key={key}>
            <button> <i className={item.logo}></i> </button>
          </a>
        ))}
      </div>

      <p> <i className={logo} ></i> {text} </p>
    </div>
  )
}

export default Footer