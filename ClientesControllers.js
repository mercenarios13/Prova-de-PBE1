const connection = require('../config/dbConnect');

exports.createCliente = (req, res) => {
  const { nome, cpf, email, endereco, data_nascimento } = req.body;
  const query = 'INSERT INTO clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES (?, ?, ?, ?, ?, CURDATE())';
  connection.query(query, [nome, cpf, email, endereco, data_nascimento], (err) => {
    if (err) throw err;
    res.status(201).send('Cliente criado com sucesso');
  });
};

exports.getClientes = (req, res) => {
  connection.query('SELECT * FROM clientes', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.updateCliente = (req, res) => {
  const { id } = req.params;
  const { endereco, email } = req.body;
  const query = 'UPDATE clientes SET endereco = ?, email = ? WHERE cliente_id = ?';
  connection.query(query, [endereco, email, id], (err) => {
    if (err) throw err;
    res.send('Cliente atualizado com sucesso');
  });
};

exports.deleteCliente = (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM clientes WHERE cliente_id = ?', [id], (err) => {
    if (err) throw err;
    res.send('Cliente deletado com sucesso');
  });
};
