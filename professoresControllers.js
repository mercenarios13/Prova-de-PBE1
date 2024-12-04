const Professor = require('../models/professor'); 

const listarProfessores = async (req, res) => {
  try {
    const professores = await Professor.find(); 
    res.status(200).json(professores); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar professores', error });
  }
};

const criarProfessor = async (req, res) => {
  const { nome, email, especialidade } = req.body; 

  if (!nome || !email || !especialidade) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
    const novoProfessor = new Professor({
      nome,
      email,
      especialidade
    });

    await novoProfessor.save(); 
    res.status(201).json(novoProfessor); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar professor', error }); 
  }
};


const atualizarProfessor = async (req, res) => {
  const { nome, email, especialidade } = req.body; 

  try {
    const professorAtualizado = await Professor.findByIdAndUpdate(id, { nome, email, especialidade }, { new: true });

    if (!professorAtualizado) {
      return res.status(404).json({ message: 'Professor não encontrado' }); 
    }

    res.status(200).json(professorAtualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar professor', error });
  }
};

const excluirProfessor = async (req, res) => {
  const { id } = req.params; 
  try {
    const professorDeletado = await Professor.findByIdAndDelete(id);

    if (!professorDeletado) {
      return res.status(404).json({ message: 'Professor não encontrado' }); 
    }

    res.status(200).json({ message: 'Professor excluído com sucesso' }); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir professor', error }); 
  }
};

module.exports = {
  listarProfessores,
  criarProfessor,
  atualizarProfessor,
  excluirProfessor
};
