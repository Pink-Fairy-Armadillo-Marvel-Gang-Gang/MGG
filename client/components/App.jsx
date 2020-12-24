import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";

// import '../style.css';


export default function App() {
  // destructure useForm
  const {register, handleSubmit, watch, errors} = useForm();

    // register form
    const {
        register: register2,
        errors: errors2,
        handleSubmit: handleSubmit2
      } = useForm({
        mode: "onBlur"
      });


//use react hooks
const [usernameReg, setUsernameReg] = useState('')
const [passwordReg, setPasswordReg] = useState('')

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const [loginStatus, setLoginStatus] = useState('')


  // define onSubmit handler function for login
  const onFormSubmit = (data) => {
      console.log('login', data);
      setPassword(data.password)
      setUsername(data.username)
      console.log('login', data)
  }

  // define onSubmit handler function for registration
  const onFormSubmit2 = (data) => {
    console.log('reg',data);
    setPasswordReg(data.password2)
    setUsernameReg(data.username2)
    console.log('reg',data)
}


// axios post request // put this function in the form submit
//   const signup = () => {
//       Axios.post("http://localhost/8080/register", {
//           username: usernameReg,
//           password: passwordReg,
//   }).then((res) => {
//       console.log(response);
//   }); 
//   }

const login = () => {
    axios.post("/login", {
        username: username,
        password: password,
}).then((res) => {
    if (res.data.message) {
        setLoginStatus(res.data.message)
    } else {
        setLoginStatus(res.data[0].username)
    }
    console.log(loginStatus)
  }); 
}


// console.log('login status',loginStatus)
  // invoke watch function from useForm destructuring

//   return our html/componenet stuf
return (
    <div>
    <h1>LOGIN</h1>
    <form name="signin" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" name="username" ref={register} placeholder="Username"></input>
        <input type="password" name="password" ref={register} placeholder="Password"></input>
        <input type="submit"/>
    </form>

    <h3>login status here here{loginStatus}</h3>

   

    <h1>Registration</h1>
    <form name="signin" onSubmit={handleSubmit2(onFormSubmit2)}>
        <input type="text" name="username2" ref={register2} placeholder="Username"></input>
        <input type="password" name="password2" ref={register2} placeholder="Password"></input>
        <input type="submit"/>
    </form>
    </div>
)
  
};

export default App