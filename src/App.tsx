import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { LayoutApp } from './layouts/LayoutApp/LayoutApp';
import { Configuracoes } from './pages/Configuracoes/Configuracoes';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Teste } from './pages/Teste/Teste';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/app" element={<LayoutApp />}>
        <Route index element={<Navigate to="/app/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="teste" element={<Teste />} />
        <Route path="configuracoes" element={<Configuracoes />} />
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </BrowserRouter>
)
