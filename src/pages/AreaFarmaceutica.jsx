import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { BreadcrumbNav } from '../components/Breadcrumb.jsx';

export default function AreaFarmaceutica() {
	const { t } = useTranslation();
	useDocumentTitle(t('areaFarmaceutica.pageTitle'));

	return (
		<>
			<Header />
			<section className="page-title bg-1">
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center">
								<span className="text-white">{t('areaFarmaceutica.title')}</span>
								<BreadcrumbNav
									items={[
										{ to: '/', label: t('breadcrumb.home') },
										{ to: '/areas', label: t('areas.title') },
										{ label: t('areaFarmaceutica.title') },
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
								<h3 className="text-md">{t('areaFarmaceutica.subtitle')}</h3>
								<div className="divider my-4"></div>
								<p>{t('areaFarmaceutica.text')}</p>
							</div>
						</div>
						<div className="col-lg-4">
							<img
								src="/images/ramos/farmaceutica.png"
								style={{ borderRadius: '5px' }}
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
