import express from 'express';

import { config } from './config/config.js';
const app = express();

app.get('/', function (req, res) {
  res.send('Hello, world');
});
app.get('/usuarios', function (req, res) {
  res.json('GET usuarios');
});

app.post('/usuarios', function (req, res) {
  res.json('POST usuarios');
});

app.put('/usuarios/:id', function (req, res) {
  res.json('PUT usuarios');
});

app.delete('/usuarios/:id', function (req, res) {
  res.json('DELETE usuarios');
});

app.listen(4000, () => {
  console.log('Escuchando puerto 4000');
});
