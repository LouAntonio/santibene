import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { BreadcrumbNav } from '../components/Breadcrumb.jsx';

export default function AreaIT() {
	const { t } = useTranslation();
	useDocumentTitle(t('areaIT.pageTitle'));

	return (
		<>
			<Header />
			<section className="page-title bg-1">
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center">
								<span className="text-white">{t('areaIT.title')}</span>
								<BreadcrumbNav
									items={[
										{ to: '/', label: t('breadcrumb.home') },
										{ to: '/areas', label: t('areas.title') },
										{ label: t('areaIT.title') },
									]}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section department-single">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="department-content mt-5">
								<h3 className="text-md">{t('areaIT.subtitle')}</h3>
								<div className="divider my-4"></div>
								<p>
									<strong>{t('areaIT.consumables')}:</strong>{' '}
									{t('areaIT.consumablesText')} <br />
									<strong>{t('areaIT.equipment')}:</strong>{' '}
									{t('areaIT.equipmentText')} <br />
									<strong>{t('areaIT.maintenance')}:</strong>{' '}
									{t('areaIT.maintenanceText')} <br />
									<strong>{t('areaIT.disposal')}:</strong>{' '}
									{t('areaIT.disposalText')} <br />
									<strong>{t('areaIT.consulting')}:</strong>{' '}
									{t('areaIT.consultingText')}
								</p>
								<h4>{t('areaIT.benefits')}:</h4>
								<ul className="list-unstyled mt-4">
									<li>
										<i className="icofont-check"></i>{' '}
										<strong>{t('areaIT.privacy')}:</strong>{' '}
										{t('areaIT.privacyText')}
									</li>
									<li>
										<i className="icofont-check"></i>{' '}
										<strong>{t('areaIT.convenience')}:</strong>{' '}
										{t('areaIT.convenienceText')}
									</li>
									<li>
										<i className="icofont-check"></i>{' '}
										<strong>{t('areaIT.security')}:</strong>{' '}
										{t('areaIT.securityText')}
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<img
								src="/images/ramos/it.png"
								style={{ borderRadius: '5px' }}
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="section awards p-0 mb-3 d-none">
				<div className="container">
					<div className="row mt-3">
						<div className="col-lg-4">
							<div className="divider"></div>
						</div>
						<div className="col-lg-8">
							<div className="row">
								{[1, 2, 3, 4, 5, 6].map((_, i) => (
									<div className="col-lg-4 col-md-6 col-sm-6" key={i}>
										<div className="award-img lsa">
											<img
												src="/images/ramos/produto.png"
												alt=""
												className="img-fluid"
											/>
											<span>Nome do Produto</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
