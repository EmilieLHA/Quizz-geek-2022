require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const history = require('connect-history-api-fallback');

app.use(history());
app.use(express.static(path.join(__dirname, '_front/dist')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var cors = require('cors');
app.use(cors());

const port = process.env.PORT || 3000;

//Database connection
const { Pool } = require('pg');
const res = require('express/lib/response');
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
  
    app.get('/api/themes', (req,res) => {
      dataBase.query('SELECT * FROM theme')
      .then((result) => {res.json(result)})
    })

    app.get('/api/questions/theme/:theme_id', (req,res) => {
      dataBase.query('SELECT * FROM question WHERE theme_id = $1 ORDER BY RANDOM() LIMIT 5', [req.params.theme_id])
      .then((result) => {res.json(result)})
      .catch((err) => {res.json(err.message)})
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
