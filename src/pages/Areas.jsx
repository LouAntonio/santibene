import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import AreaCard from '../components/AreaCard.jsx';

export default function Areas() {
	const { t } = useTranslation();
	useDocumentTitle(t('areas.pageTitle'));

	return (
		<>
			<Header />
			<Breadcrumb
				title={t('areas.title')}
				breadcrumbs={[{ to: '/', label: t('breadcrumb.home') }, { label: t('areas.title') }]}
			/>

			<section className="section awards p-0 mb-3 mt-5">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-">
							<div className="row">
								<AreaCard
									to="/areas/alimentar"
									img="/images/ramos/a.png"
									title={t('areas.alimentar')}
								/>
								<AreaCard
									to="/areas/construcao"
									img="/images/ramos/construction.png"
									title={
										<>
											{t('areas.construcaoLine1')} <br /> {t('areas.construcaoLine2')}
										</>
									}
								/>
								<AreaCard
									to="/areas/farmaceutica"
									img="/images/ramos/farmaceutica.png"
									title={
										<>
											{t('areas.farmaceuticaLine1')} <br />{t('areas.farmaceuticaLine2')}
										</>
									}
								/>
								<AreaCard
									to="/areas/it"
									img="/images/ramos/it.png"
									title={
										<>
											{t('areas.itLine1')} <br />{t('areas.itLine2')}
										</>
									}
								/>
								<AreaCard
									to="/areas/office"
									img="/images/ramos/office.png"
									title={t('areas.office')}
								/>
								<AreaCard
									to="/areas/office-mob"
									img="/images/ramos/office2.jpg"
									title={t('areas.officeFurniture')}
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
