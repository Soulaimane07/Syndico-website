import { useState, useEffect, Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './icons/css/all.min.css';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import AboutUs from './components/aboutUs/AboutUs'
import Modules from './components/modules/Modules'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Demand from './components/demand/Demand';

import data from './components/data/language.json'
import axios from 'axios';

function App() {

  const [langId, setLangId] = useState(0)
  const Lang = data[langId]

  useEffect(()=>{
    const language = window.localStorage.getItem("language")
    setLangId(JSON.parse(language))
  }, [])

  useEffect(()=>{
    window.localStorage.setItem("language",JSON.stringify(langId))
  }, [langId])


  const [show, setShow] = useState(false)



  const [datax, setData] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/navbar')
        .then(response=>{
            setData(response.data);
        })
    }, [])

  
  
  return (
    <Router>
    <div className="App">
      <Header Lang={Lang} setShow={setShow} />
      <AboutUs Lang={Lang} />
      <Modules Lang={Lang} />
      <Contact Lang={Lang} />
      <Footer Lang={Lang} />
      {show && <Demand Lang={Lang} setShow={setShow} type={Lang.type} />}
      <Navbar data={datax} Lang={Lang} langId={langId} setLangId={setLangId} setShow={setShow} />
    </div>
    </Router>
  );
}

export default App;
