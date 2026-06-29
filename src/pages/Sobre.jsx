import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';

export default function Sobre() {
	const { t } = useTranslation();
	useDocumentTitle(t('sobre.pageTitle'));

	return (
		<>
			<Header />
			<Breadcrumb
				title={t('sobre.title')}
				breadcrumbs={[
					{ to: '/', label: t('breadcrumb.home') },
					{ label: t('sobre.title') },
				]}
			/>

			<section className="features">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="feature-block d-lg-flex">
								<FeatureCard
									icon="icofont-bullseye"
									title={t('sobre.missionTitle')}
									text={t('sobre.missionText')}
								/>
								<FeatureCard
									icon="icofont-sand-clock"
									title={t('sobre.visionTitle')}
									text={t('sobre.visionText')}
								/>
								<FeatureCard
									icon="icofont-handshake-deal"
									title={t('sobre.valuesTitle')}
									text={t('sobre.valuesText')}
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
								<h3 className="text-md">{t('sobre.companyName')}</h3>
								<div className="divider my-4"></div>
								<p className="lead">{t('sobre.companySlogan')}</p>
								<p>{t('sobre.companyText')}</p>
							</div>
						</div>
						<div className="col-lg-4">
							<img src="/images/about/new/4.jpg" style={{ width: '100%' }} alt="" />
							<div className="sidebar-widget schedule-widget mt-5 d-none">
								<h5 className="mb-4">{t('sobre.scheduleTitle')}</h5>
								<ul className="list-unstyled">
									<li className="d-flex justify-content-between align-items-center">
										<a href="#">{t('sobre.weekdays')}</a>
										<span>9:00 - 17:00</span>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<a href="#">{t('sobre.saturday')}</a>
										<span>9:00 - 16:00</span>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<a href="#">{t('sobre.sunday')}</a>
										<span>Fechado</span>
									</li>
								</ul>
								<div className="sidebar-contatct-info mt-4">
									<p className="mb-0">{t('sobre.urgentNeeds')}</p>
									<h3>
										<a href="#">+244 912 345 678</a>
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
