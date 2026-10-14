import { useState } from 'react';
import type { FormEvent } from 'react';
import { Lock, LogIn, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export const Login = () => {
  const navegar = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    navegar('/app/home');
  }

  return (
    <div className="login">
      <form className="login__cartao" onSubmit={entrar}>
        <h1 className="login__titulo">Entrar</h1>

        <label className="login__campo">
          <span>E-mail</span>
          <div className="login__entrada">
            <Mail size={18} />
            <input
              type="email"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
              placeholder="voce@exemplo.com"
              autoComplete="email"
              required
            />
          </div>
        </label>

        <label className="login__campo">
          <span>Senha</span>
          <div className="login__entrada">
            <Lock size={18} />
            <input
              type="password"
              value={senha}
              onChange={(evento) => setSenha(evento.target.value)}
              placeholder="Sua senha"
              autoComplete="current-password"
              required
            />
          </div>
        </label>

        <button type="submit" className="login__botao">
          <LogIn size={18} />
          Entrar
        </button>
      </form>
    </div>
  );
};
