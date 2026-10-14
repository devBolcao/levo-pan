import type { ReactNode } from 'react'
import './Pagina.scss'

type PaginaProps = {
  titulo: string
  subtitulo?: string
  children?: ReactNode
}

export const Pagina = ({ titulo, subtitulo, children }: PaginaProps) => (
  <section className="pagina">
    <header className="pagina__cabecalho">
      <h1 className="pagina__titulo">{titulo}</h1>
      {subtitulo ? <p className="pagina__subtitulo">{subtitulo}</p> : null}
    </header>

    {children ? <div className="pagina__cartao">{children}</div> : null}
  </section>
)
