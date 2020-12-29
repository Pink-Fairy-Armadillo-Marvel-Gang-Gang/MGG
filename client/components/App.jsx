import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import SignUp from '../components/signup';
import Home from '../components/homepage'
import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom';
import NewWindow from 'react-new-window'
import { render } from 'react-dom';
import HomePage from '../components/homepage';
import { useHistory } from "react-router"
import Venom from './VenomInNYC.png'
import ironman from './Ironman&Buzz.png'
import grut from './grut.png'
import deadpool from './deadpool.png'




export default function App() {
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


return (
    <Switch>

    <Route exact path='/'>
    <div>
    <form name="signin" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" name="username" ref={register} placeholder="Username"></input>
        <input type="password" name="password" ref={register} placeholder="Password"></input>
        <input type="submit" onClick={handleClick} />
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
         </div>
    </Route>

    <Route path='/homepage'>
        <div>
         <HomePage />
        </div>
    </Route>
    </Switch>
)
};
