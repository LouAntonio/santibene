import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import LogisticsCard from '../components/LogisticsCard.jsx';

export default function Logistica() {
	const { t } = useTranslation();
	useDocumentTitle(t('logistica.pageTitle'));

	return (
		<>
			<Header />
			<Breadcrumb
				title={t('logistica.title')}
				bgImage="/images/about/logistica.jpg"
				breadcrumbs={[
					{ to: '/', label: t('breadcrumb.home') },
					{ label: t('logistica.title') },
				]}
			/>

			<section className="section department-single">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="department-content mt-5">
								<div className="divider my-4"></div>
								<p className="lead">{t('logistica.subtitle')}</p>
								<p>
									{t('logistica.paragraph1')}
									<br />
									{t('logistica.paragraph2')}
									<br />
									{t('logistica.paragraph3')}
									<br />
									{t('logistica.paragraph4')}
									<br />
								</p>
								<p className="lead">{t('logistica.slogan')}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section awards p- mb-3">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<h3 className="title-color">{t('logistica.knowMore')}</h3>
							<div className="divider mt-4 mb-5 mb-lg-0"></div>
							<p>
								<Link to="/contacto">{t('logistica.talkToUs')}</Link>
							</p>
						</div>
						<div className="col-lg-8">
							<div className="row">
								<LogisticsCard
									img="/images/logistica/land.png"
									label={t('logistica.land')}
								/>
								<LogisticsCard
									img="/images/logistica/sea.png"
									label={t('logistica.sea')}
								/>
								<LogisticsCard
									img="/images/logistica/air.png"
									label={t('logistica.air')}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
