const mongoose = require('mongoose');

const veiculoSchema = new mongoose.Schema({
  modelo: { type: String, required: true },
  marca: { type: String, required: true },
  ano: { type: Number, required: true },
  cor: { type: String, required: true }
});

const Veiculo = mongoose.model('Veiculo', veiculoSchema);

module.exports = Veiculo;
