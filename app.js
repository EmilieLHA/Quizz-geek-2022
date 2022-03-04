require('dotenv').config();
const express = require('express');
const app = express();

var cors = require('cors');
app.use(cors());

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

  //GET requests

    app.get('/api/questions', (req,res) => {
      dataBase.query('SELECT * FROM question ORDER BY question_id ASC')
      .then((result) => {res.json(result)})
    })

    app.get('/api/themes', (req,res) => {
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
