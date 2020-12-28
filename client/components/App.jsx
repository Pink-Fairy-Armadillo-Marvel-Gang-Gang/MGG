import React from 'react';
import '../style.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import SignUp from '../components/signup';
import Home from '../components/homepage'
import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom';
import NewWindow from 'react-new-window'
import { render } from 'react-dom';
import HomePage from '../components/homepage';
import Venom from './VenomInNYC.png'
import ironman from './Ironman&Buzz.png'
import grut from './grut.png'
import deadpool from './deadpool.png'
import marvelBattle from './marvelBattle.png'
import avengers from './avengers.png'
import hulk from './hulk.png'
import k from './marvel4k.png'




export default function App() {

  // destructure useForm
  const {register, handleSubmit, watch, errors} = useForm();
  // define onSubmit handler function
  const onFormSubmit = (data) => {
      console.log(data);
      

    //   const signin = () => {
    //     axios.get("/homepage", 
    // //     {
    // //         username: username,
    // //         password: password,
    // // }).then((res) => {
    // //     if (res.data.message) {
    // //         setLoginStatus(res.data.message)
    // //     } else {
    // //         setLoginStatus(res.data[0].username)
    // //     }
    // //     console.log(res)
    // //   }); 
    
    // }
  }


return (
    <Switch>

    <Route exact path='/'>
    <div>
    <form name="signin" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" name="username" ref={register} placeholder="Username"></input>
        <input type="password" name="password" ref={register} placeholder="Password"></input>
        <input type="submit"/>
    </form>
          <Link to="/signup"><button>Create an Account!</button></Link>

    </div>
    <img src={ironman}  className="img" alt="venom" width="280px" height="400px"/>
    <img src={Venom}  className="img" alt="venom" width="280px" height="400px"/>
    <img src={grut}  className="img" alt="venom" width="320px" height="400px"/>
    <img src={deadpool}  className="img" alt="venom" width="320px" height="400px"/>
      </Route>
      <Route path='/signup'>
                    <div>
                        <SignUp />
                        <img src={marvelBattle}  className="img" alt="venom" width="360px" height="360px"/>
                        <img src={k}  className="img" alt="venom" width="575px" height="350px"/>
                        <img src={hulk}  className="img" alt="venom" width="200px" height="400px"/>
                    </div>
    </Route>

    <Route path='/homepage'>
                    <div>
                        <HomePage />
                        <img src={avengers}  className="img" alt="venom" width="360px" height="360px"/>
                    </div>
    </Route>
    </Switch>
)
};