import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import StatsCounter from '../components/StatsCounter.jsx';
import OrcamentoForm from '../components/OrcamentoForm.jsx';

export default function Home() {
	const { t } = useTranslation();
	useDocumentTitle('Santibene');

	return (
		<>
			<Header />

			<section className="banner">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12 col-xl-7">
							<div className="block">
								<div className="divider mb-3"></div>
								<span
									className="text-uppercase text-sm letter-spacing"
									style={{ fontWeight: 900 }}
								>
									{t('home.bannerTitle')}
								</span>
								<h1 className="mb-3 mt-3">{t('home.bannerSubtitle')}</h1>
								<div className="btn-container">
									<Link
										to="/sobre"
										className="btn btn-main-2 btn-icon btn-round-full"
									>
										{t('home.knowMore')} <i className="icofont-simple-right ml-2"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="features">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="feature-block d-lg-flex">
								<FeatureCard
									icon="icofont-bullseye"
									title={t('home.missionTitle')}
									text={t('home.missionText')}
								/>
								<FeatureCard
									icon="icofont-sand-clock"
									title={t('home.visionTitle')}
									text={t('home.visionText')}
								/>
								<FeatureCard
									icon="icofont-handshake-deal"
									title={t('home.valuesTitle')}
									text={t('home.valuesText')}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section about">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4 col-sm-6">
							<div className="about-img">
								<img src="/images/about/new/1.jpg" alt="" className="img-fluid" />
								<img
									src="/images/about/new/2.jpg"
									alt=""
									className="img-fluid mt-4"
								/>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6">
							<div className="about-img mt-4 mt-lg-0">
								<img src="/images/about/new/3.jpg" alt="" className="img-fluid" />
							</div>
						</div>
						<div className="col-lg-4">
							<div className="about-content pl-4 mt-4 mt-lg-0">
								<h2 className="title-color">{t('home.aboutTitle')}</h2>
								<p className="mt-4 mb-5">{t('home.aboutText')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<StatsCounter />

			<section className="section service gray-bg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 text-center">
							<div className="section-title">
								<h2>{t('home.portfolioTitle')}</h2>
								<div className="divider mx-auto my-4"></div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-6">
							<Link
								to="/areas/alimentar"
								className="service-item mb-4 row justify-content-center text-center mx-0"
							>
								<div className="icon d-flex align-items-center col-12 justify-content-center">
									<i className="icofont-food-basket text-lg"></i>
								</div>
								<h4 className="mt-3 mb-3">{t('home.serviceAlimentar')}</h4>
								<div className="content">
									<p className="mb-4">{t('home.serviceAlimentarText')}</p>
								</div>
							</Link>
						</div>

						<ServiceCard
							to="/areas/construcao"
							icon="icofont-under-construction"
							title={t('home.serviceConstrucao')}
							text={t('home.serviceConstrucaoText')}
						/>
						<ServiceCard
							to="/areas/farmaceutica"
							icon="icofont-pills"
							title={t('home.serviceFarmaceutica')}
							text={t('home.serviceFarmaceuticaText')}
						/>
						<ServiceCard
							to="/areas/it"
							icon="icofont-printer"
							title={t('home.serviceIT')}
							text={t('home.serviceITText')}
						/>
						<ServiceCard
							to="/areas/office"
							icon="icofont-brain-alt"
							title={t('home.serviceOffice')}
							text={t('home.serviceOfficeText')}
						/>

						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="service-item mb-4 row justify-content-center text-center mx-0">
								<div className="icon d-flex align-items-center col-12 justify-content-center">
									<i className="icofont-info-circle text-lg"></i>
								</div>
								<div className="content">
									<p className="mb-4">{t('home.allInOneText')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section appoinment">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="appoinment-content">
								<img src="/images/about/1.jpg" alt="" className="img-fluid" />
								<div className="emergency">
									<h2 className="text-md">
										<a href="tel:+351919294239" style={{ color: 'white' }}>
											<i className="icofont-phone-circle text-md"></i>+351 919
											294 239
										</a>
										<br />
										<a href="tel:+244949410940" style={{ color: 'white' }}>
											<i className="icofont-phone-circle text-md"></i>+244 949
											410 940
										</a>
									</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-10">
							<div className="appoinment-wrap mt-5 mt-lg-0">
								<h2 className="mb-2 title-color">{t('home.budgetTitle')}</h2>
								<p className="mb-4">{t('home.budgetText')}</p>
								<OrcamentoForm />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section clients d-none">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7">
							<div className="section-title text-center">
								<h2>{t('home.ourBrands')}</h2>
								<div className="divider mx-auto my-4"></div>
								<p>{t('home.brandsText')}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row clients-logo">
						{[1, 2, 3, 4, 5, 6, 3, 4, 5, 6].map((n, i) => (
							<div className="col-lg-2" key={i}>
								<div className="client-thumb">
									<img
										src={`/images/about/${n}.png`}
										alt=""
										className="img-fluid"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
