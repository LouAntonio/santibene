import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { BreadcrumbNav } from '../components/Breadcrumb.jsx';

export default function AreaConstrucao() {
	const { t } = useTranslation();
	useDocumentTitle(t('areaConstrucao.pageTitle'));

	return (
		<>
			<Header />
			<section className="page-title bg-1">
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center">
								<span className="text-white">{t('areaConstrucao.title')}</span>
								<BreadcrumbNav
									items={[
										{ to: '/', label: t('breadcrumb.home') },
										{ to: '/areas', label: t('areas.title') },
										{ label: t('areaConstrucao.title') },
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
								<h3 className="text-md">{t('areaConstrucao.subtitle')}</h3>
								<div className="divider my-4"></div>
								<p>
									<strong>{t('areaConstrucao.construction')}:</strong>{' '}
									{t('areaConstrucao.constructionText')} <br />
									<strong>{t('areaConstrucao.equipmentSupply')}:</strong>{' '}
									{t('areaConstrucao.equipmentSupplyText')} <br />
									<strong>{t('areaConstrucao.projectManagement')}:</strong>{' '}
									{t('areaConstrucao.projectManagementText')} <br />
									<strong>{t('areaConstrucao.technicalConsulting')}:</strong>{' '}
									{t('areaConstrucao.technicalConsultingText')}
								</p>
								<h4>{t('areaConstrucao.benefits')}</h4>
								<ul className="list-unstyled mt-4">
									<li>
										<i className="icofont-check"></i>{' '}
										<strong>{t('areaConstrucao.quality')}:</strong>{' '}
										{t('areaConstrucao.qualityText')}
									</li>
									<li>
										<i className="icofont-check"></i>{' '}
										<strong>{t('areaConstrucao.efficiency')}:</strong>{' '}
										{t('areaConstrucao.efficiencyText')}
									</li>
									<li>
										<i className="icofont-check"></i>{' '}
										<strong>{t('areaConstrucao.customization')}:</strong>{' '}
										{t('areaConstrucao.customizationText')}
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<img
								src="/images/ramos/construction.png"
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
