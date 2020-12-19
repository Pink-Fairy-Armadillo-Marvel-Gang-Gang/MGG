import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import '../style.css';


export default function App() {
  // destructure useForm
  const {register, handleSubmit, watch, errors} = useForm();
  // define onSubmit handler function
  const onFormSubmit = (data) => {
      console.log(data);
  }
  // invoke watch function from useForm destructuring

//   return our html/componenet stuf
return(
    <form name="signin" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" name="username" ref={register} placeholder="Username"></input>
        <input type="password" name="password" ref={register} placeholder="Password"></input>
        <input type="submit"/>
    </form>
)
  
}