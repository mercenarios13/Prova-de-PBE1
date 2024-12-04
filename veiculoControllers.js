const Veiculo = require('../models/veiculo'); 

const listarVeiculos = async (req, res) => {
  try {
    const veiculos = await Veiculo.find(); 
    res.status(200).json(veiculos); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar veículos', error }); 
  }
};

const criarVeiculo = async (req, res) => {
  const { modelo, marca, ano, cor } = req.body; 

  if (!modelo || !marca || !ano || !cor) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
    const novoVeiculo = new Veiculo({
      modelo,
      marca,
      ano,
      cor
    });

    await novoVeiculo.save(); 
    res.status(201).json(novoVeiculo); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar veículo', error }); 
  }
};

const atualizarVeiculo = async (req, res) => {
  const { id } = req.params; 
  const { modelo, marca, ano, cor } = req.body; 

  try {
    const veiculoAtualizado = await Veiculo.findByIdAndUpdate(id, { modelo, marca, ano, cor }, { new: true });

    if (!veiculoAtualizado) {
      return res.status(404).json({ message: 'Veículo não encontrado' }); 
    }

    res.status(200).json(veiculoAtualizado); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar veículo', error }); 
  }
};

const excluirVeiculo = async (req, res) => {
  const { id } = req.params; 

  try {
    const veiculoDeletado = await Veiculo.findByIdAndDelete(id);

    if (!veiculoDeletado) {
      return res.status(404).json({ message: 'Veículo não encontrado' }); 
    }

    res.status(200).json({ message: 'Veículo excluído com sucesso' }); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir veículo', error }); 
  }
};

module.exports = {
  listarVeiculos,
  criarVeiculo,
  atualizarVeiculo,
  excluirVeiculo
};
