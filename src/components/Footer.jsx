import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="footer section gray-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 mr-auto col-sm-6">
						<div className="widget mb-5 mb-lg-0">
							<div className="logo mb-4">
								<p style={{ textAlign: 'center' }}>
									<Link to="/">
										<img
											src="/images/santibene.png"
											width="125"
											alt=""
											className="img-fluid"
										/>
									</Link>
								</p>
							</div>
							<h4
								className="text-capitalize mb-3 text-center"
								style={{ color: 'var(--cor-principal)' }}
							>
								Angola <span style={{ fontFamily: 'roboto' }}>&</span> Portugal
							</h4>
						</div>
					</div>

					<div className="col-lg-2 col-md-6 col-sm-12">
						<div className="widget mb-5 mb-lg-0">
							<h4 className="text-capitalize mb-3">Institucional</h4>
							<div className="divider mb-4"></div>

							<ul className="list-unstyled footer-menu lh-35">
								<li>
									<Link to="/sobre">A Empresa</Link>
								</li>
								<li>
									<Link to="/areas">Ramos</Link>
								</li>
								<li>
									<Link to="/logistica">Logística</Link>
								</li>
								<li>
									<Link to="/contacto">Contacto</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="widget widget-contact mb-5 mb-lg-0">
							<h4 className="text-capitalize mb-3">Entre em Contacto</h4>
							<div className="divider mb-4"></div>

							<div className="footer-contact-block mb-4">
								<div className="icon d-flex align-items-center">
									<i className="icofont-email mr-3"></i>
									<span className="h6 mb-0">Supporte 24/7</span>
								</div>
								<h4 className="mt-2">
									<a href="mailto:geral@santibene.com">geral@santibene.com</a>
								</h4>
							</div>

							<div className="footer-contact-block">
								<div className="icon d-flex align-items-center">
									<i className="icofont-support mr-3"></i>
									<span className="h6 mb-0">Fale Connosco</span>
								</div>
								<h4 className="mt-2">
									<a href="tel:+351919294239">+351 919 294 239</a>
								</h4>
								<h4 className="mt-2">
									<a href="tel:+244949410940">+244 949 410 940</a>
								</h4>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-btm py-4 mt-5">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6">
							<div className="copyright">
								&copy; <Link to="/">Santibene Group</Link>{' '}
								{new Date().getFullYear()} - Todos os Direitos Reservados
							</div>
						</div>
						<div className="col-lg-6">
							<div className="copyright text-right">
								Desenvolvido por{' '}
								<a
									href="https://www.louantonio.me/"
									target="_blank"
									rel="noreferrer"
								>
									LouAntonio
								</a>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4">
							<a className="backtop js-scroll-trigger" href="#top">
								<i className="icofont-long-arrow-up"></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<script
				dangerouslySetInnerHTML={{
					__html: `
          window.addEventListener('scroll', function() {
            var backtop = document.querySelector('.backtop');
            if (backtop) {
              if (window.scrollY > 70) {
                backtop.classList.add('reveal');
              } else {
                backtop.classList.remove('reveal');
              }
            }
          });
        `,
				}}
			/>
		</footer>
	);
}
