require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//Database connection
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect().then((dataBase) => {

  // Connected to database
    console.log("connected to DB")

    app.get('/questions', (req,res) => {
      dataBase.query('SELECT * FROM question')
      .then((result) => {res.json(result)})
    })

    app.get('/answers', (req,res) => {
      dataBase.query('SELECT * FROM answer')
      .then((result) => {res.json(result)})
    })

    app.get('/themes', (req,res) => {
      dataBase.query('SELECT * FROM theme')
      .then((result) => {res.json(result)})
    })

  })
    
  .catch((err) => {
    console.error("Error during database connection");
    console.error(err.message);
  })






// Listen to server  
app.get('/', (req,res) => {
    res.send({message: 'You have launched your server!'})
});

app.listen(port);
