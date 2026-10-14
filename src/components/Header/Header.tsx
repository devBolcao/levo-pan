import { LogOut, Moon, PanelLeftClose, PanelLeftOpen, Sun } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo6.png'
import './Header.scss'

type HeaderProps = {
  temaEscuro: boolean
  aoAlternarTema: () => void
  menuRecolhido: boolean
  aoAlternarMenu: () => void
}

export const Header = ({
  temaEscuro,
  aoAlternarTema,
  menuRecolhido,
  aoAlternarMenu,
}: HeaderProps) => {
  const navegar = useNavigate()

  function sair() {
    navegar('/login')
  }

  return (
    <header className="header">
      <div className="header__esquerda">
        <div className="header__logo-area">
          <img className="header__logo" src={logo} alt="Pan" />
        </div>

        <button
          type="button"
          className="header__botao"
          onClick={aoAlternarMenu}
          aria-label={menuRecolhido ? 'Expandir menu' : 'Recolher menu'}
          aria-expanded={!menuRecolhido}
          title={menuRecolhido ? 'Expandir menu' : 'Recolher menu'}
        >
          {menuRecolhido ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
        </button>
      </div>

      <div className="header__acoes">
        <button
          type="button"
          className="header__botao"
          onClick={aoAlternarTema}
          aria-label={temaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro'}
          title={temaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          {temaEscuro ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button type="button" className="header__botao" onClick={sair}>
          <LogOut size={20} />
          <span>Sair</span>
        </button>
      </div>
    </header>
  )
}
