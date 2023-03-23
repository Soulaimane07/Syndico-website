import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Contact.css'
import Form from './Form'

function Contact(props) {
    const Lang = props.Lang

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState(0)
    const [message, setMessage] = useState('')

    const condition = [
      {
        "title":"First Name",
        "op":'',
        "con": fName
      },
      {
        "title":"Last Name",
        "op":'',
        "con": lName
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
        "title":"Message",
        "op":'',
        "con": message
      }
    ]

    
    const [check, setcheck] = useState(false)

    const conn = fName == '' || lName == '' || email == ''  || tel.length !== 10 || message == ''

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/contact')
        .then(response=>{
            setData(response.data);
        })
    }, [])


    let title
    let label0
    let label1
    let label2
    let label3
    let label4
    let button
    let image

    Lang.sub == "Fr" &&
    data.map((item,key)=>(
      title = item.title_Fr,
      label0 = item.label1_Fr,
      label1 = item.label2_Fr,
      label2 = item.label3_Fr,
      label3 = item.label4_Fr,
      label4 = item.label5_Fr,
      image = item.image,
      button = item.button_Fr
    ))

    Lang.sub == "En" &&
    data.map((item,key)=>(
      title = item.title_An,
      label0 = item.label1_An,
      label1 = item.label2_An,
      label2 = item.label3_An,
      label3 = item.label4_An,
      label4 = item.label5_An,
      image = item.image,
      button = item.button_An
    ))

    Lang.sub == "Ar" &&
    data.map((item,key)=>(
      title = item.title_Ar,
      label0 = item.label1_Ar,
      label1 = item.label2_Ar,
      label2 = item.label3_Ar,
      label3 = item.label4_Ar,
      label4 = item.label5_Ar,
      image = item.image,
      button = item.button_Ar
    ))

    const path = 'http://127.0.0.1:8000/uploads/connect/'

  return (
    <>
    <div id='contact' className='contact row row-cols-1 row-cols-md-2 g-4'>
        <div className='image'>
            <img src={`${path}${image}`} />
        </div>
        <div className='form'>
            <Form 
              Lang={Lang} 
              setcheck={setcheck} 

              title={title}
              label0={label0}
              label1={label1}
              label2={label2}
              label3={label3}
              label4={label4}
              button={button}

              fName={fName}
              lName={lName}
              email={email}
              tel={tel}
              message={message}

              setFName={setFName}
              setLName={setLName}
              setEmail={setEmail}
              setTel={setTel}
              setMessage={setMessage}
            />
        </div>
    </div>

    {check &&
    <div className={`${conn ? 'alert-danger' : 'alert-success'}  succes alert d-flex align-items-center`} role="alert">
      {conn ? 
      <div className='block'>
      <div className='header'>
        <div className='box'>
          <i class="fa-solid fa-circle-exclamation"></i>
          <h2> Connection Failed </h2> 
        </div>
        <li onClick={()=> setcheck(false)}> <i className='fas fa-close'></i> </li>
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
      <li onClick={()=> setcheck(false)}> <i className='fas fa-close'></i> </li>
      </>
      }
    </div>
    }
    </>
  )
}

export default Contact