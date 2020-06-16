const express = require('express');

const PORT = 3334;

const app = express();


app.get('/projects', ( req, res) => {
  const { title, owner } = req.query;
  console.log(title, owner);
  return res.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ]);
});
app.post('/projects', (req, res) => {
  return res.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4'
  ]);
});
app.put('/projects/:id', (req, res) => {
  const { id } = req.params;

  console.log( req.params );
  return res.json([
    'Projeto 5',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4'
  ]);
});
app.delete('/projects/:id', (req, res) => {
  return res.json([
    'Projeto 2',
    'Projeto 3',
    'Projeto 4'
  ]);
});
app.listen(PORT, () => {
  console.log('🚀 Back-end started!');
});