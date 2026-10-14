import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { MenuLateral } from '../../components/MenuLateral/MenuLateral'
import './LayoutApp.scss'

export const LayoutApp = () => {
  const [temaEscuro, setTemaEscuro] = useState(
    () => document.documentElement.dataset.tema === 'escuro',
  )
  const [menuRecolhido, setMenuRecolhido] = useState(false)

  function alternarTema() {
    const proximoTemaEscuro = !temaEscuro

    setTemaEscuro(proximoTemaEscuro)
    document.documentElement.dataset.tema = proximoTemaEscuro
      ? 'escuro'
      : 'claro'
  }

  function alternarMenu() {
    setMenuRecolhido((atual) => !atual)
  }

  return (
    <div className="layout">
      <Header
        temaEscuro={temaEscuro}
        aoAlternarTema={alternarTema}
        menuRecolhido={menuRecolhido}
        aoAlternarMenu={alternarMenu}
      />

      <div className="layout__corpo">
        <MenuLateral recolhido={menuRecolhido} />
        <main className="layout__conteudo">
          <Outlet />
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  )
}
