import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
	const { pathname } = useLocation();
	const { t, i18n } = useTranslation();

	const isActive = (path) => {
		if (path === '/') return pathname === '/';
		return pathname.startsWith(path);
	};

	return (
		<header>
			<nav className="navbar navbar-expand-lg navigation" id="navbar">
				<div className="container">
					<Link className="navbar-brand" to="/">
						<img src="/images/santibene.png" width="125" alt="" className="img-fluid" />
					</Link>

					<button
						className="navbar-toggler collapsed"
						type="button"
						data-toggle="collapse"
						data-target="#navbarmain"
						aria-controls="navbarmain"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="icofont-navigation-menu"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarmain">
						<ul className="navbar-nav ml-auto">
							<li className={`nav-item${isActive('/') ? ' active' : ''}`}>
								<Link className="nav-link" to="/">
									{t('header.home')}
								</Link>
							</li>
							<li className={`nav-item${isActive('/sobre') ? ' active' : ''}`}>
								<Link className="nav-link" to="/sobre">
									{t('header.about')}
								</Link>
							</li>
							<li className={`nav-item${isActive('/areas') ? ' active' : ''}`}>
								<Link className="nav-link" to="/areas">
									{t('header.businessAreas')}
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/files/catalogo.pdf" download>
									{t('header.catalog')}
								</a>
							</li>
							<li className={`nav-item${isActive('/logistica') ? ' active' : ''}`}>
								<Link className="nav-link" to="/logistica">
									{t('header.logistics')}
								</Link>
							</li>
							<li className={`nav-item${isActive('/instalacoes') ? ' active' : ''}`}>
								<Link className="nav-link" to="/instalacoes">
									{t('header.facilities')}
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/files/portfolio.pdf" download>
									{t('header.portfolio')}
								</a>
							</li>
							<li className={`nav-item${isActive('/contacto') ? ' active' : ''}`}>
								<Link className="nav-link" to="/contacto">
									{t('header.contact')}
								</Link>
							</li>
							<li className="nav-item ml-lg-3" style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '15px' }}>
								<button
									className={`btn btn-sm ${i18n.language === 'pt' ? 'btn-primary' : 'btn-outline-light'} mr-1`}
									onClick={() => i18n.changeLanguage('pt')}
									style={{ fontSize: '0.8rem' }}
								>
									PT
								</button>
								<button
									className={`btn btn-sm ${i18n.language === 'en' ? 'btn-primary' : 'btn-outline-light'}`}
									onClick={() => i18n.changeLanguage('en')}
									style={{ fontSize: '0.8rem' }}
								>
									EN
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
