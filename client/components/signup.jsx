import React from 'react';
import axios from 'axios';
import { render } from 'react-dom'
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import '../style.css';


export default function SignUp() {
  // destructure useForm
  const {register, handleSubmit, watch, errors} = useForm();
  // define onSubmit handler function
  const onFormSubmit = (data) => {
      console.log(data);
  }
  // invoke watch function from useForm destructuring

//   return our html/componenet stuf
return (
    <div>
    <form name="signup" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" name="username" ref={register} placeholder="Username"></input>
        <input type="password" name="password" ref={register} placeholder="Password"></input>
        <input type="text" name="secret" ref={register}  placeholder="Favorite Marvel Characeter"></input>
        <input type="submit"/>
          
    </form>
    </div>
)
  
};


// render(
//     React.createElement(<SignUp />, null, null),
//     document.getElementById('root')
//   );
  
