import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t } = useTranslation();

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
								{t('footer.tagline')}
							</h4>
						</div>
					</div>

					<div className="col-lg-2 col-md-6 col-sm-12">
						<div className="widget mb-5 mb-lg-0">
							<h4 className="text-capitalize mb-3">{t('footer.institutional')}</h4>
							<div className="divider mb-4"></div>

							<ul className="list-unstyled footer-menu lh-35">
								<li>
									<Link to="/sobre">{t('footer.menuAbout')}</Link>
								</li>
								<li>
									<Link to="/areas">{t('footer.menuAreas')}</Link>
								</li>
								<li>
									<Link to="/logistica">{t('footer.menuLogistics')}</Link>
								</li>
								<li>
									<Link to="/contacto">{t('footer.menuContact')}</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="widget widget-contact mb-5 mb-lg-0">
							<h4 className="text-capitalize mb-3">{t('footer.contactUs')}</h4>
							<div className="divider mb-4"></div>

							<div className="footer-contact-block mb-4">
								<div className="icon d-flex align-items-center">
									<i className="icofont-email mr-3"></i>
									<span className="h6 mb-0">{t('footer.support247')}</span>
								</div>
								<h4 className="mt-2">
									<a href="mailto:geral@santibene.com">geral@santibene.com</a>
								</h4>
							</div>

							<div className="footer-contact-block">
								<div className="icon d-flex align-items-center">
									<i className="icofont-support mr-3"></i>
									<span className="h6 mb-0">{t('footer.talkToUs')}</span>
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
								&copy; <Link to="/">{t('footer.copyright')}</Link>{' '}
								{new Date().getFullYear()} - {t('footer.copyrightReserved')}
							</div>
						</div>
						<div className="col-lg-6">
							<div className="copyright text-right">
								{t('footer.developedBy')}{' '}
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
