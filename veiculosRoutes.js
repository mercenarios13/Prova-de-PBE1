const express = require('express');
const veiculoController = require('../controllers/veiculoController');
const router = express.Router();

router.get('/veiculos', veiculoController.listarVeiculos);

router.post('/veiculos', veiculoController.criarVeiculo);

router.put('/veiculos/:id', veiculoController.atualizarVeiculo);

router.delete('/veiculos/:id', veiculoController.excluirVeiculo);

module.exports = router;
