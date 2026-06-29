import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Breadcrumb, { BreadcrumbNav } from '../components/Breadcrumb.jsx';

export default function AreaAlimentar() {
	return (
		<>
			<Header />
			<section className="page-title bg-1">
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center">
								<span className="text-white">Alimentar</span>
								<BreadcrumbNav
									items={[
										{ to: '/', label: 'Home' },
										{ to: '/areas', label: 'Áreas de negócio' },
										{ label: 'Alimentar' },
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
								<h3 className="text-md">Alimentar</h3>
								<div className="divider my-4"></div>
								<p>
									<strong>Fornecimento de alimentos:</strong> Distribuição de
									produtos frescos, congelados ou secos, com foco em qualidade e
									procedência. <br />
									<strong>Catering e bufê:</strong> Serviços de alimentação para
									eventos, com cardápios personalizados e montagem no local.{' '}
									<br />
									<strong>Consultoria em nutrição:</strong> Elaboração de
									cardápios balanceados, planejamento dietético e treinamento para
									equipes. <br />
									<strong>Produção de refeições:</strong> Cozinha industrial para
									empresas, escolas ou hospitais, com controle rigoroso de higiene
									e nutrição.
								</p>
								<h4>Benefícios:</h4>
								<ul className="list-unstyled mt-4">
									<li>
										<i className="icofont-check"></i>{' '}
										<strong>Qualidade:</strong> Alimentos selecionados e
										preparados com padrões rigorosos;
									</li>
									<li>
										<i className="icofont-check"></i>{' '}
										<strong>Personalização:</strong> Soluções adaptadas às
										necessidades do cliente;
									</li>
									<li>
										<i className="icofont-check"></i>{' '}
										<strong>Conveniência:</strong> Serviços completos, desde o
										fornecimento até a execução.
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<img src="/images/ramos/a.png" style={{ borderRadius: '5px' }} alt="" />
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
