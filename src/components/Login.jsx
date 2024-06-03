import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-background">
      <div className="login-container">
        <h2>Entrar</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Email ou número de telefone" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Senha" />
          </div>
          <button type="submit" className="login-button">Entrar</button>
          <div className="form-options">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Lembre-se de mim</label>
            </div>
            <div>
              <a href="/">Precisa de ajuda?</a>
            </div>
          </div>
        </form>
        <div className="facebook-login">
          <a href="/">Conectar com Facebook</a>
        </div>
        <div className="signup-now">
          <span>Novo por aqui? </span>
          <a href="/">Assine agora</a>.
        </div>
      </div>
    </div>
  );
};

export default Login;
