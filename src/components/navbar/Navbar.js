import React, { useEffect, useState } from 'react'
import './Navbar.css'

import Langs from './Lang'
import Link from './Link'
import ScrollTop from './ScrollTop'
import axios from 'axios'

function Navbar(props) {
    const Lang = props.Lang
   const setLangId = props.setLangId

   const [showLangs, setShowLangs] = useState(false)
   const setShow = props.setShow

   const [nav, setNav] = useState(false)

    const changebg = () => {
        if(window.scrollY >= 80){
        setNav(true);
        }else {
        setNav(false);
        }
    }
    window.addEventListener('scroll',changebg)

    
    
    const langs = [
        {
            "id": 1,
            "sub": "Fr",
        },
        {
            "id": 2,
            "sub": "An",
        },
        {
            "id": 3,
            "sub": "Ar",
        }
    ]

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/navbar')
        .then(response=>{
            setData(response.data);
        })
    }, [])

    let title

    let image
    {data.map((item,key)=>(
        <>
        {key == 0 ?
          image = item.image
        :""}
        </>
    ))}


    let right, left

    Lang.type == 'rtl' ? left ='5%' : right ='5%'

    
  return (
    <nav className={nav ? 'active navbar navbar-expand-lg navbar-light' : 'navbar navbar-expand-lg navbar-light'}>
    <div class="container-fluid">
        {Lang.type == "ltr" 
        ?
        <>
            <a class="logo navbar-brand" href="#" onClick={()=> setShowLangs(false)}>
                <img src={`http://127.0.0.1:8000/uploads/navbar/${image}`} />
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse  " id="navbarNavAltMarkup">
            <div class="navbar-nav ltr float-lg-end float-xxl-end float-md-end">
                {data.map((item,key)=>(
                    <>
                    {Lang.sub == 'Fr' ?
                    <div style={{display: "none"}}>
                        {title = item.title_Fr}
                    </div>
                    :""}
                    {Lang.sub == 'En' ?
                    <div style={{display: "none"}}>
                        {title = item.title_An}
                    </div>
                    :""}
                    {key <= 3 & key != 0 ?
                    <a key={key} className="li" href={item.link}>
                        <Link setShowLangs={setShowLangs} title={title} />
                    </a>
                    :""}
                    </>
                ))}
                {data.map((item,key)=>(
                    <>
                    {Lang.sub == 'Fr' ?
                    <div style={{display: "none"}}>
                        {title = item.title_Fr}
                    </div>
                    :""}
                    {Lang.sub == 'En' ?
                    <div style={{display: "none"}}>
                        {title = item.title_An}
                    </div>
                    :""}
                    {key == 4 &&
                    <button key={key} className='demo' onClick={()=> setShowLangs(false) & setShow(true)}> <h2> {title} </h2> </button>
                    }
                    </>
                ))}
                {data.map((item,key)=>(
                    key == 5 &&
                    <button key={key} id='glob' className='glob' onClick={()=> setShowLangs(!showLangs)}> <i className={item.logo} ></i> </button>
                ))}
            </div>
            </div>
        </>
        :
        <>
            <div class="collapse navbar-collapse rtl " id="navbarNavAltMarkup">
            <div class="navbar-nav float-lg-end float-xxl-end float-md-end">
                {data.map((item,key)=>(
                    key == 5 &&
                    <button key={key} id='glob' className='glob' onClick={()=> setShowLangs(!showLangs)}> <i className={item.logo} ></i> </button>
                ))}                    
                {data.map((item,key)=>(
                    key == 4 &&
                    <button className='demo' onClick={()=> setShowLangs(false) & setShow(true)}> <h2> {item.title_Ar} </h2> </button>
                ))}
                {data.map((item,key)=>(
                    key <= 3 & key != 0 ?
                    <a key={key} className="li" href={item.link}>
                        <Link setShowLangs={setShowLangs} title={item.title_Ar} />
                    </a>
                    :""
                ))}
            </div>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <a class="logo navbar-brand" href="#" onClick={()=> setShowLangs(false)}>
                <img src={`http://127.0.0.1:8000/uploads/navbar/${image}`} />
            </a>
        </>
        }
        
        <a href="https://web.whatsapp.com/">
             <div className='whatsapp-div'>
             <li className='whatsapp'> <i className="fa-brands fa-whatsapp"></i> <p> {Lang.data.navbar.whatsapp} </p></li>
             </div>
         </a>

         <div className='media'>
             <ScrollTop />
             <a href='#contact'>
                 <li><i className="fa-solid fa-envelope"></i> </li>
            </a>
        </div>

        {showLangs &&(
            <div className={`langs ${Lang.type == 'rtl' && 'rtl'}`} style={{top: '100px', left:`${left}` ,right:`${right}` }} >
                {langs.map((item,key)=>(
                    <Langs key={key} langId={props.langId} id={key} setShowLangs={setShowLangs} setLangId={setLangId} lang={item.sub} />
                ))}
            </div>
        )}
    </div>
    </nav>
  )
}

export default Navbar