import axios from 'axios'
import React, { useState } from 'react'

function Form(props) {
    const fName = props.fName
    const lName = props.lName
    const email = props.email
    const tel = props.tel
    const message = props.message

    const setFName = props.setFName
    const setLName = props.setLName
    const setEmail = props.setEmail
    const setTel = props.setTel
    const setMessage = props.setMessage
    
  // Backend POST
  let addContact
  tel.length == 10 && (
    addContact = async() => {
      props.setcheck(true)
      const post = {first_name:`${fName}`, last_name:`${lName}`, email:`${email}`, phone:`${tel}`, message:`${message}`}
      await axios.post(api, post)
      setPosts([post, ...posts])
    }
    )
    const [posts, setPosts] = useState([])

    const api = 'http://127.0.0.1:8000/api/contacts'

  return (
    <form>
        <h1> {props.title} </h1>
        <div className='bloc name'>
          <div className='grid'>
            <label> {props.label0} </label>
            <input type={'text'} required onChange={(e)=>{
              const fname = e.target.value;
              setFName(fname); }}
            />
          </div>
          <div className='grid'>
            <label> {props.label1} </label>
            <input type={'text'} required onChange={(e)=>{
              const lname = e.target.value;
              setLName(lname); }}
            />
          </div>
        </div>
        <div className='bloc'>
            <label> {props.label2} </label>
            <input type={'email'} required onChange={(e)=>{
              const email = e.target.value;
              setEmail(email); }}
            />
        </div>
        <div className='bloc'>
            <label> {props.label3} </label>
            <input type={'number'} required onChange={(e)=>{
              const phone = e.target.value;
              setTel(phone); }}
            />
        </div>
        <textarea 
              name="comment" 
              required 
              form="usrform" 
              onChange={(e)=>{
                const sms = e.target.value;
                setMessage(sms); 
              }}  
              placeholder={props.label4}
        ></textarea>
        <li 
          onSubmit={addContact} 
          onClick={addContact} 
          className='button'
        > 
          {props.button}
        </li>
    </form>
  )
}

export default Form