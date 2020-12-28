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



class App extends React.Component() {

    constructor() {
        super();

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
}

    render(){
    return (
        <Switch>

        <Route exact path='/'>
        <div>
        <form name="signin" onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
            <input type="text" name="username" ref={this.props.register} placeholder="Username"></input>
            <input type="password" name="password" ref={this.props.register} placeholder="Password"></input>
            <input type="submit"/>
        </form>
          <Link to="/signup"><button>Create an Account!</button></Link>
        </div>
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
    );
    }   
};

export default App;