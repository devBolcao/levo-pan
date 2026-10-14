import { useEffect, useRef, useState } from 'react';
import { LogOut, Settings, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './UsuarioMenu.scss';

type UsuarioMenuProps = {
  imagemUrl?: string;
};

export const UsuarioMenu = ({ imagemUrl }: UsuarioMenuProps) => {
  const navegar = useNavigate();
  const [aberto, setAberto] = useState(false);
  const contenedor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aberto) {
      return;
    }

    function aoClicarFora(evento: PointerEvent) {
      if (contenedor.current && !contenedor.current.contains(evento.target as Node)) {
        setAberto(false);
      }
    }

    function aoPressionarTecla(evento: KeyboardEvent) {
      if (evento.key === 'Escape') {
        setAberto(false);
      }
    }

    document.addEventListener('pointerdown', aoClicarFora);
    document.addEventListener('keydown', aoPressionarTecla);

    return () => {
      document.removeEventListener('pointerdown', aoClicarFora);
      document.removeEventListener('keydown', aoPressionarTecla);
    };
  }, [aberto]);

  function abrirConfiguracoes() {
    setAberto(false);
    navegar('/app/configuracoes');
  }

  function sair() {
    setAberto(false);
    navegar('/login');
  }

  return (
    <div className="usuario" ref={contenedor}>
      <button
        type="button"
        className="usuario__botao"
        onClick={() => setAberto((atual) => !atual)}
        aria-haspopup="menu"
        aria-expanded={aberto}
        aria-label="Menu do usuário"
        title="Conta"
      >
        {imagemUrl ? (
          <img className="usuario__imagem" src={imagemUrl} alt="Usuário" />
        ) : (
          <User size={20} />
        )}
      </button>

      {aberto ? (
        <div className="usuario__menu" role="menu">
          <button
            type="button"
            className="usuario__item"
            role="menuitem"
            onClick={abrirConfiguracoes}
          >
            <Settings size={18} />
            <span>Configurações</span>
          </button>

          <button type="button" className="usuario__item" role="menuitem" onClick={sair}>
            <LogOut size={18} />
            <span>Sair</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};
