import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Importa o CSS para a tela de cadastro


function Signup() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const navigate = useNavigate();


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        login,
        email,
        senha,
        nome,
        dataNascimento,
      });
      if (response.data.success) {
        alert('Cadastro realizado com sucesso!');
        navigate('/login');
      } else {
        alert('Erro no cadastro.');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
    }
  };


  return (
    <div className="signup-container">
   <div className="signup-box">
        <h2>Cadastro</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>Login</label>
            <input
              type="text"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Data de Nascimento</label>
            <input
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              required
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <p>
          Já tem uma conta?{' '}
          <button className="login-link" onClick={() => navigate('/login')}>
            Faça login
          </button>
        </p>
      </div>
    </div>
  );
}


export default Signup;
