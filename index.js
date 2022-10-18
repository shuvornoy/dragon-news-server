const { request } = require('express');
const express = require('express');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000;

const categories = require('./Data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })

  app.get('/news-categories', (req, res) =>{
    res.send(categories);
  })
  
  // POST method route
  app.listen(port, () =>{
    console.log('Dragon news port', port)
  })
 