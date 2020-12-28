import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
// import '../style.css';


export default function App() {
  // destructure useForm
  const {register, handleSubmit, watch, errors} = useForm();
  // define onSubmit handler function
  const onFormSubmit = (data) => {
      console.log(data);
  }
  // invoke watch function from useForm destructuring

<<<<<<< HEAD
=======
//   return our html/componenet stuf
return (
    <div>
    <form name="signin" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" name="username" ref={register} placeholder="Username"></input>
        <input type="password" name="password" ref={register} placeholder="Password"></input>
        <input type="submit"/>
    </form>
    </div>
)
  
};
>>>>>>> c9929ef1fbb3a2beed825ed022efbd02ab49a2e6
