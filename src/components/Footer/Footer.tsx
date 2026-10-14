import './Footer.scss';

const anoAtual = new Date().getFullYear();

export const Footer = () => (
  <footer className="footer">
    <span className="footer__texto">Pan &copy; {anoAtual}</span>
  </footer>
);
