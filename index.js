const { request } = require('express');
const express = require('express');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000;

const categories = require('./Data/categories.json');
const news = require('./Data/news.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })

  app.get('/news-categories', (req, res) =>{
    res.send(categories);
  })


  app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    if(id === '08'){
      res.send(news)
    }else{
      const category_News = news.filter(n =>n.category_id === id)
      res.send(category_News);
    }
  })

  app.get('/news', (req, res) =>{
    res.send(news);
  })

  app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
  })
  
  // POST method route
  app.listen(port, () =>{
    console.log('Dragon news port server', port)
  })
 