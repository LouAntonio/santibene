import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { BreadcrumbNav } from '../components/Breadcrumb.jsx';

export default function AreaOfficeMob() {
	const { t } = useTranslation();
	useDocumentTitle(t('areaOfficeMob.pageTitle'));

	return (
		<>
			<Header />
			<section className="page-title bg-1">
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center">
								<span className="text-white">{t('areaOfficeMob.title')}</span>
								<BreadcrumbNav
									items={[
										{ to: '/', label: t('breadcrumb.home') },
										{ to: '/areas', label: t('areas.title') },
										{ label: t('areaOfficeMob.title') },
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
								<h3 className="text-md">{t('areaOfficeMob.subtitle')}</h3>
								<div className="divider my-4"></div>
								<p>
									{t('areaOfficeMob.text')} <br />
									<strong>{t('areaOfficeMob.furnitureSupply')}:</strong>{' '}
									{t('areaOfficeMob.furnitureSupplyText')} <br />
									<strong>{t('areaOfficeMob.customProjects')}:</strong>{' '}
									{t('areaOfficeMob.customProjectsText')} <br />
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<img
								src="/images/ramos/office2.jpg"
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
