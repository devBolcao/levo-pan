import { useState } from 'react'
import './App.scss'

export const App = () => {
  const [temaEscuro, setTemaEscuro] = useState(
    () => document.documentElement.dataset.tema === 'escuro',
  )

  function alternarTema() {
    const proximoTemaEscuro = !temaEscuro

    setTemaEscuro(proximoTemaEscuro)
    document.documentElement.dataset.tema = proximoTemaEscuro
      ? 'escuro'
      : 'claro'
  }

  return (
    <div className="app">
      <button type="button" onClick={alternarTema}>
        Ativar tema {temaEscuro ? 'claro' : 'escuro'}
      </button>
    </div>
  )
}


