const express = require('express');

const PORT = 3334;

const app = express();

app.get(
  '/',
  ( req, res) => {
    return res.json({message: 'Hello'})
  } 
)

app.listen(PORT);