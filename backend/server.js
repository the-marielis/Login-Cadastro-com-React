const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const app = express();
app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // altere conforme necessário
  password: '', // altere conforme necessário
  database: 'user_db',
});


db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL');
  }
});


app.post('/signup', (req, res) => {
  const { login, senha, nome, email, dataNascimento  } = req.body;
  const query = 'INSERT INTO usuario (login, senha, nome, email, dataNascimento) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [login, senha, nome, email, dataNascimento], (err, result) => {
    if (err) {
      console.error('Erro no cadastro:', err);
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});


app.post('/login', (req, res) => {
  const { login, senha } = req.body;
  const query = 'SELECT * FROM usuario WHERE login = ? AND senha = ?';
  db.query(query, [login, senha], (err, result) => {
    if (err || result.length === 0) {
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});


app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
