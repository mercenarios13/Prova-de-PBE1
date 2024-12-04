const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  especialidade: { 
    type: String, 
    required: true 
  }
}, {
  timestamps: true 
});

const Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;
