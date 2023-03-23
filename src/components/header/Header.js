import React, { useEffect, useState } from 'react'
import './Header.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';

import Item from './Item';
import axios from 'axios';

function Header(props) {
    
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: true,
        pauseOnHover: false,
    };
    
    const Lang = props.Lang
    const setShow = props.setShow

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/header')
        .then(response=>{
            setData(response.data);
        })
    }, [])

    let title1
    let title2
    let text
    let button
    let image
  
    return (
    <div className='header'>
        <Carousel className="carousel" {...settings}>
        {data.map((item,key)=>(
            <>
                <div style={{display: "none"}}>
                    {image = `http://127.0.0.1:8000/uploads/header/${ item.image}`}
                </div>
                {Lang.sub == 'Fr' ?
                <div style={{display: "none"}}>
                    {title1 = item.title1_Fr}
                    {title2 = item.title2_Fr}
                    {text = item.para_Fr}
                    {button = item.button_Fr}
                </div>
                :""}
                {Lang.sub == 'En' ?
                <div style={{display: "none"}}>
                    {title1 = item.title1_An}
                    {title2 = item.title2_An}
                    {text = item.para_An}
                    {button = item.button_An}
                </div>
                :""}
                {Lang.sub == 'Ar' ?
                <div style={{display: "none"}}>
                    {title1 = item.title1_Ar}
                    {title2 = item.title2_Ar}
                    {text = item.para_Ar}
                    {button = item.button_Ar}
                </div>
                :""}
                <Item id={key} Lang={Lang} title1={title1} title2={title2} text={text} button={button} image={image} setShow={setShow} />
            </>
        ))}
        </Carousel>
    </div>
  )
}

export default Header

const Carousel = styled(Slider)`
    ul li {
        top: -50px;
        transition: all 500ms;
    }

    ul li button {
        transition: all 500ms;
    &:before {
        font-size: 20px;
        border: 2px solid #06283D;
        border-radius: 100px;
        color: transparent;
        opacity: 60%;
        transition: all 500ms;
    }}

    li.slick-active button:before {
        background-color: crimson;
        color: transparent;
        opacity: 100%;
        transition: all 500ms;
    }

`