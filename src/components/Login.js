import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'


function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        login,
        senha,
      });
      if (response.data.success) {
        navigate('/dashboard'); // Redireciona para o dashboard ou outra página
      } else {
        alert('Login falhou. Verifique suas credenciais.');
      }
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };


  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Login</label>
            <input
              type="text"
              placeholder="Digite seu login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p>
          Não tem conta?{' '}
          <a onClick={() => navigate('/signup')} className="signup-link">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
 
}


export default Login;