import { NavLink } from 'react-router-dom';
import { itensMenu } from '../../assets/data/menu';
import './MenuLateral.scss';

type MenuLateralProps = {
  recolhido: boolean;
};

export const MenuLateral = ({ recolhido }: MenuLateralProps) => (
  <aside className={recolhido ? 'menu-lateral menu-lateral--recolhido' : 'menu-lateral'}>
    <nav aria-label="Menu principal">
      <ul className="menu-lateral__lista">
        {itensMenu.map((item) => {
          const Icone = item.icone;

          return (
            <li key={item.id}>
              <NavLink
                to={item.caminho}
                title={item.rotulo}
                aria-label={item.rotulo}
                className={({ isActive }) =>
                  isActive
                    ? 'menu-lateral__link menu-lateral__link--ativo'
                    : 'menu-lateral__link'
                }
              >
                <Icone size={20} />
                <span className="menu-lateral__rotulo">{item.rotulo}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  </aside>
);
