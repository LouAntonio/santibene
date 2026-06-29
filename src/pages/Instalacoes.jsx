import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';

export default function Instalacoes() {
	const { t } = useTranslation();
	useDocumentTitle(t('instalacoes.pageTitle'));

	const officeImages = [
		'/images/about/new/1.jpg',
		'/images/about/new/2.jpg',
		'/images/about/about-1.jpg',
		'/images/about/img-1.jpg',
	];

	const warehouseImages = [
		'/images/about/img-2.jpg',
		'/images/about/img-3.jpg',
		'/images/about/about-4.jpg',
		'/images/logistica/land.png',
	];

	return (
		<>
			<Header />
			<Breadcrumb
				title={t('instalacoes.title')}
				breadcrumbs={[
					{ to: '/', label: t('breadcrumb.home') },
					{ label: t('instalacoes.title') },
				]}
			/>

			<section className="section about">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 text-center">
							<div className="section-title">
								<h2>{t('instalacoes.pageSubtitle')}</h2>
								<div className="divider mx-auto my-4"></div>
							</div>
						</div>
					</div>

					{/* Office Gallery */}
					<div className="row mb-5">
						<div className="col-12">
							<h3 className="mb-4" style={{ color: 'var(--cor-principal)' }}>
								<i className="icofont-building-alt mr-2"></i>
								{t('instalacoes.officeTitle')}
							</h3>
							<p className="mb-4 text-muted">{t('instalacoes.officeDesc')}</p>
						</div>
						{officeImages.map((src, i) => (
							<div className="col-lg-3 col-md-6 col-sm-6 mb-4" key={`office-${i}`}>
								<div className="card border-0 shadow-sm">
									<img
										src={src}
										alt={`${t('instalacoes.officeTitle')} ${i + 1}`}
										className="card-img-top"
										style={{ height: '200px', objectFit: 'cover' }}
									/>
								</div>
							</div>
						))}
					</div>

					{/* Warehouse Gallery */}
					<div className="row">
						<div className="col-12">
							<h3 className="mb-4" style={{ color: 'var(--cor-principal)' }}>
								<i className="icofont-warehouse mr-2"></i>
								{t('instalacoes.warehouseTitle')}
							</h3>
							<p className="mb-4 text-muted">{t('instalacoes.warehouseDesc')}</p>
						</div>
						{warehouseImages.map((src, i) => (
							<div className="col-lg-3 col-md-6 col-sm-6 mb-4" key={`warehouse-${i}`}>
								<div className="card border-0 shadow-sm">
									<img
										src={src}
										alt={`${t('instalacoes.warehouseTitle')} ${i + 1}`}
										className="card-img-top"
										style={{ height: '200px', objectFit: 'cover' }}
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
