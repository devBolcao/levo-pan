import { Home, TestTube } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ItemMenu = {
  id: string
  rotulo: string
  caminho: string
  icone: LucideIcon
}

export const itensMenu: ItemMenu[] = [
  { id: 'home', rotulo: 'Home', caminho: '/app/home', icone: Home },
  { id: 'teste', rotulo: 'Teste', caminho: '/app/teste', icone: TestTube },
]
