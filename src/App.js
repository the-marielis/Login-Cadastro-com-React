import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Redireciona a rota raiz para a página de login */}
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
