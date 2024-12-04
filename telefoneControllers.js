const Telefone = require('../models/Telefone');

const createTelefone = async (req, res) => {
    try {
        const { numero, tipo, professorId } = req.body;


        const novoTelefone = new Telefone({
            numero,
            tipo,
            professorId 
        });

        await novoTelefone.save(); 
        res.status(201).json({ message: 'Telefone criado com sucesso!', telefone: novoTelefone });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o telefone', error });
    }
};

const getAllTelefones = async (req, res) => {
    try {
        const telefones = await Telefone.find(); 
        res.status(200).json(telefones);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter os telefones', error });
    }
};

const getTelefoneById = async (req, res) => {
    try {
        const { id } = req.params;
        const telefone = await Telefone.findById(id);

        if (!telefone) {
            return res.status(404).json({ message: 'Telefone não encontrado!' });
        }

        res.status(200).json(telefone);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar o telefone', error });
    }
};

const updateTelefone = async (req, res) => {
    try {
        const { id } = req.params;
        const { numero, tipo, professorId } = req.body;

        const telefone = await Telefone.findByIdAndUpdate(id, {
            numero,
            tipo,
            professorId
        }, { new: true });

        if (!telefone) {
            return res.status(404).json({ message: 'Telefone não encontrado para atualização!' });
        }

        res.status(200).json({ message: 'Telefone atualizado com sucesso!', telefone });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o telefone', error });
    }
};

const deleteTelefone = async (req, res) => {
    try {
        const { id } = req.params;
        const telefone = await Telefone.findByIdAndDelete(id);

        if (!telefone) {
            return res.status(404).json({ message: 'Telefone não encontrado para exclusão!' });
        }

        res.status(200).json({ message: 'Telefone deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar o telefone', error });
    }
};

module.exports = {
    createTelefone,
    getAllTelefones,
    getTelefoneById,
    updateTelefone,
    deleteTelefone
};
const Telefone = require('../models/telefone'); 

const listarTelefones = async (req, res) => {
  try {
    const telefones = await Telefone.find(); 
    res.status(200).json(telefones);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar telefones', error });
  }
};

const criarTelefone = async (req, res) => {
  const { numero, tipo, clienteId } = req.body; 

  if (!numero || !tipo || !clienteId) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
    const novoTelefone = new Telefone({
      numero,
      tipo,
      clienteId, 
    });

    await novoTelefone.save();
    res.status(201).json(novoTelefone);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar telefone', error });
  }
};

const atualizarTelefone = async (req, res) => {
  const { id } = req.params;
  const { numero, tipo, clienteId } = req.body;

  try {
    const telefoneAtualizado = await Telefone.findByIdAndUpdate(id, { numero, tipo, clienteId }, { new: true });

    if (!telefoneAtualizado) {
      return res.status(404).json({ message: 'Telefone não encontrado' });
    }

    res.status(200).json(telefoneAtualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar telefone', error });
  }
};

const excluirTelefone = async (req, res) => {
  const { id } = req.params;

  try {
    const telefoneDeletado = await Telefone.findByIdAndDelete(id);

    if (!telefoneDeletado) {
      return res.status(404).json({ message: 'Telefone não encontrado' });
    }

    res.status(200).json({ message: 'Telefone excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir telefone', error });
  }
};

module.exports = {
  listarTelefones,
  criarTelefone,
  atualizarTelefone,
  excluirTelefone
};
