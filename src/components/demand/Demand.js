import React, {useEffect, useState } from 'react'
import './Demand.css'
import axios from 'axios'
import NumericInput from 'react-numeric-input';
import Data from '../data/language.json'

function Demande(props) {
  const Lang = props.Lang.data

  const [show, setShow] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState(0)
  const [option, setOption] = useState('')
  const [imm, setImm] = useState(1)
  const [app, setApp] = useState(1)
  
  const setShowdemand = props.setShow

  const cities = Data[0].city

  let admin

  {cities.villes.map(item=>(
    item.city == option &&(
        admin = item.admin_name
    )
  ))}

  const Type = props.type

  const addone = () => {
    setApp(app+1)
  }

  // Backend  POST
  
  let addDemande
  
  tel.length == 10 && (
  addDemande = async() => {
    setShow(true)
    const post = {full_name:`${name}`, email:`${email}`, phone:`${tel}`, city:`${option}`, n_imm:`${imm}`, n_app:`${app}`}
    await axios.post(api, post)
    setPosts([post, ...posts])
    setShowdemand(false)
  }
  )
  const [posts, setPosts] = useState([])

  const api = 'http://127.0.0.1:8000/api/demandes'

  const conn = name == '' || email == '' || option == '' || tel.length !== 10 
  
  const condition = [
    {
      "title":"Name",
      "op":'',
      "con": name
    },
    {
      "title":"Email",
      "op":'',
      "con": email
    },
    {
      "title":"Phone",
      "op": null,
      "con": tel
    },
    {
      "title":"City",
      "op":'',
      "con": option
    }
  ]

  ////


  // Backend GET 

  const [data, setData] = useState([])

  useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/demandez')
      .then(response=>{
          setData(response.data);
      })
  }, [])


  let title
  let label1
  let label2
  let label3
  let label4
  let label5
  let label6
  let button1
  let button2

  props.Lang.sub == 'Fr' &&
  data.map((item,key)=>(
    title = item.title_Fr,
    label1 = item.label1_Fr,
    label2 = item.label2_Fr,
    label3 = item.label3_Fr,
    label4 = item.label4_Fr,
    label5 = item.label5_Fr,
    label6 = item.label6_Fr,
    button1 = item.button1_Fr,
    button2 = item.button2_Fr
  ))

  props.Lang.sub == 'En' &&
  data.map((item,key)=>(
    title = item.title_An,
    label1 = item.label1_An,
    label2 = item.label2_An,
    label3 = item.label3_An,
    label4 = item.label4_An,
    label5 = item.label5_An,
    label6 = item.label6_An,
    button1 = item.button1_An,
    button2 = item.button2_An
  ))

  props.Lang.sub == 'Ar' &&
  data.map((item,key)=>(
    title = item.title_Ar,
    label1 = item.label1_Ar,
    label2 = item.label2_Ar,
    label3 = item.label3_Ar,
    label4 = item.label4_Ar,
    label5 = item.label5_Ar,
    label6 = item.label6_Ar,
    button1 = item.button1_Ar,
    button2 = item.button2_Ar
  ))


  return (
    <>
      <div className='black' onClick={()=> setShowdemand(false)}></div>
      <div className={` ${Type == 'rtl' && `rtl`} demande`}>
      

        <div className="modal-content">
          <div className="modal-header">
            <h4> {title} </h4>
            <button type="button" onClick={() => setShowdemand(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            

            <div className='box' required onChange={(e)=>{
                const name = e.target.value;
                setName(name);
              }}>
              <h4> {label1} </h4>
              <input required type="text" />
            </div>
            
            <div className='box' required onChange={(e)=>{
                const email = e.target.value;
                setEmail(email);
              }}>
              <h4> {label2} </h4>
              <input required type="email" />
            </div>

            <div className='box' required onChange={(e)=>{
                const tel = e.target.value;
                setTel(tel);
              }}>
              <h4> {label3} </h4>
              <input required type="number"  />
              {tel ? (tel.length !== 10 ? <li className='tel' style={{color:"#dc3545"}}> <h6> {Lang.demand.boxes.telLabelfalse}  </h6> <i className='fas fa-close'></i></li> : <li className='tel'  style={{color:"#4BB543"}}> <h6> {Lang.demand.boxes.telLabeltrue}  </h6> <i className='fas fa-check'></i> </li>):""}
            </div>

            <div className='box'>
              <h4> {label4} </h4>
              <select required onChange={(e)=>{
                const selectedCity = e.target.value;
                setOption(selectedCity);
              }}>
                <option disabled selected hidden>{Lang.demand.boxes.cityLabel}</option>
                {cities.villes.map((item,key)=>(
                  <option key={key}> {item.city} </option>                      
                ))}
              </select>
            </div>
            
            <div className='box'>
              <h4> {label5} </h4>
              <div className='number' onChange={(e)=>{
                const imm = e.target.value;
                setImm(imm);
              }}>
                {imm > 1 && (
                  <li onClick={()=> setImm(Number(imm) - 1)}> <i className='fas fa-minus'></i> </li>
                )}
                
                <NumericInput 
	                className="form-control" 
	                value={ imm } 
	                step={ 1 } 
	                precision={ 0 } 
	                mobile
                  style= {false}
                />
                
                <li onClick={()=> setImm(Number(imm) + 1)}> <i className='fas fa-plus'></i> </li>
              </div>
            </div>

            <div className='box'>
              <h4> {label6} </h4>
              <div className='number' required onChange={(e)=>{
                const app = e.target.value;
                setApp(app);
              }}>
                {app > 1 && (
                  <li onClick={()=> setApp(Number(app) - 1)}> <i className='fas fa-minus'></i> </li>
                )}
                
                <NumericInput 
	                className="form-control" 
	                value={ app } 
	                step={ 1 } 
	                precision={ 0 } 
	                mobile
                  style= {false}
                />
                
                <li onClick={()=> setApp(Number(app) + 1)}> <i className='fas fa-plus'></i> </li>

              </div>
            </div>

          </div>
            <div className='modal-footer buttons'>
              <li onSubmit={addDemande} onClick={addDemande} className="button"> 
                {button1} 
              </li> 
              <button className='cancel' onClick={()=> setShowdemand(false)}> {button2} </button>
            </div>
        </div>


        {show &&
          <div className={`${conn ? 'alert-danger' : 'alert-success'}  succes alert d-flex align-items-center`} role="alert">
          {conn ? 
          <div className='block'>
          <div className='header'>
            <div className='box'>
              <i className="fa-solid fa-circle-exclamation"></i>
              <h2> Connection Failed </h2> 
            </div>
            <li onClick={()=> setShow(false)}> <i className='fas fa-close'></i> </li>
          </div>
            {condition.map((con,key)=>(
              con.con == con.op && (
                <p key={key}> <strong> {con.title} </strong> is required! </p>
              )
            ))}
            {tel == 0 ? (
              <>
                <p> <strong>Phone</strong>  is resuired! </p>
              </>
            )
            :
              tel.length !== 10 && (
                <p> <strong>Phone</strong>  must have 10 digits! </p>
              )
            }
            
          </div>
          :
          <>
          <div className='box'>
            <i className='fas fa-check'></i> 
            <h2> Connection succeded </h2> 
          </div>
          <li onClick={()=> setShow(false)}> <i className='fas fa-close'></i> </li>
          </>
          }
          </div>
        }


      </div>
    </>
  )
}

export default Demande
