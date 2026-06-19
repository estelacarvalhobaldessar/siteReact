import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Empresa from './pages/Empresa.jsx';
import Produtos from './pages/Produtos.jsx';
import Contato from './pages/Contato.jsx';
import './App.css';

function App() {
// Estado que controla qual página aparece no conteúdo principal.
const [paginaAtiva, setPaginaAtiva] = useState('Home')

// Esta função escolhe a página com base no valor de paginaAtiva.
function renderizarPagina() {
if (paginaAtiva === 'Empresa') return <Empresa />
if (paginaAtiva === 'Produtos') return <Produtos />
if (paginaAtiva === 'Contato') return <Contato />

// Home é o retorno padrão para manter o projeto previsível.
return <Home />
 }

return (
<>
<Header paginaAtiva={paginaAtiva} aoMudarPagina={setPaginaAtiva} />
<main className="conteudo-principal">
{renderizarPagina()}
 </main>

 <Footer />
</>
    )
 }

export default App

