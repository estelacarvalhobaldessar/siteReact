import Logo from './Logo'
import Menu from './Menu'

function Header({paginaAtiva, aoMudarPagina}) {
    // Header combina Logo e Menu para formar o topo fixo do layout.
    return(
        <header className="header">
            <Logo />
            <Menu paginaAtiva={paginaAtiva} aoMudarPagina={aoMudarPagina} />
            </header>
    )
}

export default Header