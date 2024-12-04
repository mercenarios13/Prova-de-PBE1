const express = require('express');
const clienteController = require('../controllers/clienteController');  
const router = express.Router();

router.get('/clientes', clienteController.listarClientes);

router.post('/clientes', clienteController.criarCliente);

router.put('/clientes/:id', clienteController.atualizarCliente);

router.delete('/clientes/:id', clienteController.excluirCliente);

module.exports = router;
