import { useTranslation } from 'react-i18next';

export default function StatsCounter() {
	const { t } = useTranslation();

	return (
		<section className="cta-section">
			<div className="container">
				<div className="cta position-relative">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="counter-stat">
								<i className="icofont-doctor"></i>
								<span className="h3">500</span>+<p>{t('statsCounter.satisfiedCustomers')}</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="counter-stat">
								<i className="icofont-flag"></i>
								<span className="h3">12</span>+<p>{t('statsCounter.establishedPartnerships')}</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="counter-stat">
								<i className="icofont-badge"></i>
								<span className="h3">2</span>+<p>{t('statsCounter.impactedCountries')}</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="counter-stat">
								<i className="icofont-globe"></i>
								<span className="h3">20</span>
								<p>{t('statsCounter.dedicatedEmployees')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
