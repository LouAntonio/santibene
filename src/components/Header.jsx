import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()

  const isActive = (path) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/images/santibene.png" width="125" alt="" className="img-fluid" />
          </Link>

          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icofont-navigation-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${isActive('/') ? ' active' : ''}`}>
                <Link className="nav-link" to="/">Início</Link>
              </li>
              <li className={`nav-item${isActive('/sobre') ? ' active' : ''}`}>
                <Link className="nav-link" to="/sobre">A Empresa</Link>
              </li>
              <li className={`nav-item${isActive('/areas') ? ' active' : ''}`}>
                <Link className="nav-link" to="/areas">Áreas de Negócio</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/files/catalogo.pdf" download>Catálogo</a>
              </li>
              <li className={`nav-item${isActive('/logistica') ? ' active' : ''}`}>
                <Link className="nav-link" to="/logistica">Logística</Link>
              </li>
              <li className={`nav-item${isActive('/contacto') ? ' active' : ''}`}>
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
