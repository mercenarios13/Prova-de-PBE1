const express = require('express');
const mongoose = require('mongoose');
const veiculoRoutes = require('./routes/veiculoRoutes'); 

const app = express();

mongoose.connect('mongodb://localhost:27017/vitoriakar', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Banco de dados conectado'))
  .catch(err => console.error('Erro de conexão', err));

app.use(express.json());

app.use('/api', veiculoRoutes); 

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
