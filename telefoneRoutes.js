const express = require('express');
const router = express.Router();

const veiculoController = require('../controllers/veiculoController');
const professorController = require('../controllers/professorController');
const telefoneController = require('../controllers/telefoneController');
const clienteController = require('../controllers/clienteController');

router.get('/veiculos', veiculoController.listarVeiculos);
router.post('/veiculos', veiculoController.criarVeiculo);
router.put('/veiculos/:id', veiculoController.atualizarVeiculo);
router.delete('/veiculos/:id', veiculoController.excluirVeiculo);

router.get('/professores', professorController.listarProfessores);
router.post('/professores', professorController.criarProfessor);
router.put('/professores/:id', professorController.atualizarProfessor);
router.delete('/professores/:id', professorController.excluirProfessor);

router.get('/telefones', telefoneController.listarTelefones);
router.post('/telefones', telefoneController.criarTelefone);
router.put('/telefones/:id', telefoneController.atualizarTelefone);
router.delete('/telefones/:id', telefoneController.excluirTelefone);

router.get('/clientes', clienteController.listarClientes);
router.post('/clientes', clienteController.criarCliente);
router.put('/clientes/:id', clienteController.atualizarCliente);
router.delete('/clientes/:id', clienteController.excluirCliente);

module.exports = router;
