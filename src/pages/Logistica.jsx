import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import LogisticsCard from '../components/LogisticsCard.jsx';

export default function Logistica() {
	useDocumentTitle('Logística | Santibene');

	return (
		<>
			<Header />
			<Breadcrumb
				title="Logística"
				bgImage="/images/about/logistica.jpg"
				breadcrumbs={[{ to: '/', label: 'Home' }, { label: 'Logística' }]}
			/>

			<section className="section department-single">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="department-content mt-5">
								<div className="divider my-4"></div>
								<p className="lead">Ar, Mar e Terra</p>
								<p>
									A Santibene Comércio e Serviços é uma empresa especializada em
									importação e exportação de produtos, com forte atuação no
									mercado nacional e internacional.
									<br />
									Operamos com excelência em logística internacional, oferecendo
									soluções completas para o transporte de mercadorias por vias
									marítima, aérea e terrestre, garantindo agilidade, segurança e
									eficiência em todas as etapas do processo.
									<br />
									Nosso compromisso é conectar mercados, encurtar distâncias e
									entregar resultados com qualidade e responsabilidade, sempre
									respeitando as normas e exigências de cada país.
									<br />
									Com uma equipe altamente capacitada e parceiros estratégicos ao
									redor do mundo, a Santibene se posiciona como uma empresa
									confiável e versátil para atender às demandas de comércio
									exterior, independente do segmento.
									<br />
								</p>
								<p className="lead">
									Santibene. Conectando o mundo aos seus negócios.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section awards p- mb-3">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<h3 className="title-color">Gostaria de Saber Mais? </h3>
							<div className="divider mt-4 mb-5 mb-lg-0"></div>
							<p>
								<Link to="/contacto">Fale Connosco</Link>
							</p>
						</div>
						<div className="col-lg-8">
							<div className="row">
								<LogisticsCard img="/images/logistica/land.png" label="Terra" />
								<LogisticsCard img="/images/logistica/sea.png" label="Mar" />
								<LogisticsCard img="/images/logistica/air.png" label="Ar" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
