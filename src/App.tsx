import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import SideBarAdmin from './components/SideBarAdmin';
import Home from './telas/Home';
import FormularioCadastroProduto from './telas/FormularioCadastroProduto';
import CadastroCategoiras from './telas/CadastroCategoiras';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path="/admin" element={<SideBarAdmin />}>
          <Route path="produto" element={<FormularioCadastroProduto />} />
          <Route path="categorias" element={<CadastroCategoiras />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
