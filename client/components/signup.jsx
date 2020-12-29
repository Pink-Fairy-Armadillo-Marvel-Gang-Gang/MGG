import React from 'react';
import axios from 'axios';
import { render } from 'react-dom'
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import '../style.css';
import HomePage from '../components/homepage';
import { useHistory } from "react-router"
import Home from '../components/homepage'
import marvelBattle from './marvelBattle.png'
import hulk from './hulk.png'
import k from './marvel4k.png'


export default function SignUp() {
    let history = useHistory();
  // destructure useForm
  const {register, handleSubmit, watch, errors} = useForm();
  // define onSubmit handler function
  const onFormSubmit = (data) => {
      const {username, password, favChar} = data;
      const body = {username, password};
    fetch('/login/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.username && data.password) {
        history.push('/homepage')
      }
    })
    // TODO render the error message
    .catch(err => alert('User already exists', err))
  }
  
  
  function handleClick() {
  }

//   return our html/componenet stuf
return (
    <div>
    <form name="signup" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" name="username" ref={register} placeholder="Username"></input>
        <input type="password" name="password" ref={register} placeholder="Password"></input>
        <input type="text" name="favChar" ref={register}  placeholder="Favorite Marvel Characeter"></input>
        <input type="submit" onClick={handleClick}/>
    </form>
        <img src={marvelBattle}  className="img" alt="venom" width="360px" height="360px"/>
        <img src={k}  className="img" alt="venom" width="575px" height="350px"/>
        <img src={hulk}  className="img" alt="venom" width="200px" height="400px"/>
    </div>
    
)
  
};


// render(
//     React.createElement(<SignUp />, null, null),
//     document.getElementById('root')
//   );
  
