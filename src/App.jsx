import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import Inicio from '@/pages/Inicio';
import Carta from '@/pages/carta';
import Nosotros from '@/pages/nosotros';
import Contacto from '@/pages/contacto';
import Login from '@/pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='carta' element={<Carta />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
