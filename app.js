require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'front/dist')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

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
    
    app.get('/api/questions/1', (req,res) => {
      dataBase.query('SELECT * FROM question WHERE question_id = 1')
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
