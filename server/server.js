const express = require('express');
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const marvelSchema = require('./model/marvelModel')
const routes = require('./routes/api')
const PORT = 3000;
// Will code
// make into a non hard coded token
const { useState, useCallback, useEffect } = require('react');
const axios = require('axios');
const accessToken = 'iuhyegedbeuytvdyevdyt3222u7e2uhwjdhbsd'
const apiUrl = 'http://localhost:3000/api';

// axios.interceptors.request.use(
//   config => {
//     config.headers.authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   });

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})

function App() {
  const [users, setUsers] = useState([]);
  const [requestError, setRequestError] = useState();

  const fetchData = useCallback(async () => {
    try {
      // fetch and set users
      const result = await authAxios.get(`/users/all`)
    } catch (err) {
      // set request error message
      setRequestError(err.message);
    }
  });

}


app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
})




app.use(express.json()); // check this
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));
app.listen(PORT, () => {
  console.log(`WE BE LISTENING: ${PORT}`);
});



