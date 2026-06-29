import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { BreadcrumbNav } from '../components/Breadcrumb.jsx';

export default function AreaFarmaceutica() {
	useDocumentTitle('Farmacêutica e Material Hospitalar | Santibene');

	return (
		<>
			<Header />
			<section className="page-title bg-1">
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center">
								<span className="text-white">
									Farmacêutica e Material Hospitalar
								</span>
								<BreadcrumbNav
									items={[
										{ to: '/', label: 'Home' },
										{ to: '/areas', label: 'Áreas de negócio' },
										{ label: 'Farmacêutica e Material Hospitalar' },
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
								<h3 className="text-md">Farmacêutica e Material Hospitalar</h3>
								<div className="divider my-4"></div>
								<p>
									Com presença em angola, comercializamos a principais marcas de
									medicamentos, equipamentos e consumíveis na área da Saúde.
								</p>
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
