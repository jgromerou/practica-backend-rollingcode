import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

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

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Escuchando puerto ${PORT}`);
});
