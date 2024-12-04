const express = require('express');
const professorController = require('../controllers/professorController'); 
const router = express.Router();

router.get('/professores', professorController.listarProfessores);

router.post('/professores', professorController.criarProfessor);

router.put('/professores/:id', professorController.atualizarProfessor);

router.delete('/professores/:id', professorController.excluirProfessor);

module.exports = router;
