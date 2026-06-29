import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import ContactForm from '../components/ContactForm.jsx';

export default function Contacto() {
	const { t } = useTranslation();
	useDocumentTitle(t('contacto.pageTitle'));

	return (
		<>
			<Header />
			<Breadcrumb
				title={t('contacto.title')}
				breadcrumbs={[{ to: '/', label: t('breadcrumb.home') }, { label: t('contacto.title') }]}
			/>

			<section className="section contact-info pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-sm-6 col-md-6">
							<div className="contact-block mb-4 mb-lg-0">
								<i className="icofont-live-support"></i>
								<h5>{t('contacto.phone')}</h5>
								<a href="tel:+351919294239">+351 919 294 239</a> <br />{' '}
								<a href="tel:+244949410940">+244 949 410 940</a>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 col-md-6">
							<div className="contact-block mb-4 mb-lg-0">
								<i className="icofont-support-faq"></i>
								<h5>{t('contacto.email')}</h5>
								<a href="mailto:geral@santibene.com">geral@santibene.com</a>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 col-md-6">
							<div className="contact-block mb-4 mb-lg-0">
								<i className="icofont-location-pin"></i>
								<h5>{t('contacto.location')}</h5>
								<p>
									{t('contacto.locationLine1')} <br />{' '}
									{t('contacto.locationLine2')}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="contact-form-wrap section">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="section-title text-center">
								<h2 className="text-md mb-2">{t('contacto.contactTitle')}</h2>
								<div className="divider mx-auto my-4"></div>
								<p className="mb-5">{t('contacto.contactText')}</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<ContactForm />
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
