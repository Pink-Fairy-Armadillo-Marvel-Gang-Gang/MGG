import React from 'react';
import axios from 'axios';
import { render } from 'react-dom'
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import '../style.css';
import HomePage from '../components/homepage';
import { useHistory } from "react-router"
import Home from '../components/homepage'


export default function SignUp() {
    let history = useHistory();
  // destructure useForm
  const {register, handleSubmit, watch, errors} = useForm();
  // define onSubmit handler function
  const onFormSubmit = (data) => {
      console.log(data);
  }
    function handleClick() {
    history.push('/homepage')
    }

//   return our html/componenet stuf
return (
    <div>
    <form name="signup" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" name="username" ref={register} placeholder="Username"></input>
        <input type="password" name="password" ref={register} placeholder="Password"></input>
        <input type="text" name="secret" ref={register}  placeholder="Favorite Marvel Characeter"></input>
        <input type="submit" onClick={handleClick}/>
    </form>
    </div>
)
  
};


// render(
//     React.createElement(<SignUp />, null, null),
//     document.getElementById('root')
//   );
  
