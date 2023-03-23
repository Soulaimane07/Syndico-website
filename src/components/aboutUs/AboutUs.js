import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './AboutUs.css'

function AboutUs(props) {
    const Lang = props.Lang

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/aboutus')
        .then(response=>{
            setData(response.data);
        })
    }, [])

    const path = 'http://127.0.0.1:8000/uploads/aboutus/'
  
  return (

    <div id='aboutus' className='aboutus row row-cols-1 row-cols-md-2 g-4'>
        {Lang.type == "ltr" 
            ? data.map((item,key)=>(
                Lang.sub == 'Fr' 
                ?   <>
                        <div key={key} className='content'>
                            <h1> {item.title_Fr} </h1>
                            <p> {item.para_Fr} </p>
                        </div>
                        <div className='image'>
                            <img src={`${path}${item.image}`} />
                        </div>
                    </>
                :   <>
                        <div className='content'>
                            <h1> {item.title_An} </h1>
                            <p> {item.para_An} </p>
                        </div>
                        <div className='image'>
                            <img src={`${path}${item.image}`} />
                        </div>
                    </>
            ))
            :data.map((item,key)=>(
            <>
            <div className='image'>
                <img src={`${path}${item.image}`} />
            </div>
            <div className='content rtl'>
                <h1> {item.title_Ar} </h1>
                <p style={{textAlign:"right"}}> {item.para_Ar} </p>
            </div>
            </>
            ))
        }
    </div>
  )
}

export default AboutUs