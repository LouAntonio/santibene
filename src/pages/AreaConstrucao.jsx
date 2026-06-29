import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { BreadcrumbNav } from '../components/Breadcrumb.jsx';

export default function AreaConstrucao() {
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
									Construção, Projectos e Equipamentos
								</span>
								<BreadcrumbNav
									items={[
										{ to: '/', label: 'Home' },
										{ to: '/areas', label: 'Áreas de negócio' },
										{ label: 'Construção, Projectos e Equipamentos' },
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
								<h3 className="text-md">Construção, Projectos e Equipamentos</h3>
								<div className="divider my-4"></div>
								<p>
									<strong>Construção civil:</strong> Edificações, reformas e
									infraestruturas, com execução profissional e cumprimento de
									prazos. <br />
									<strong>Fornecimento de equipamentos:</strong> Máquinas,
									ferramentas e materiais de construção de alta qualidade. <br />
									<strong>Gestão de projetos:</strong> Planejamento, execução e
									fiscalização de obras, garantindo eficiência e conformidade com
									normas. <br />
									<strong>Consultoria técnica:</strong> Análise de viabilidade,
									projetos personalizados e soluções sob medida para cada
									necessidade.
								</p>
								<h4>Benefícios</h4>
								<ul className="list-unstyled mt-4">
									<li>
										<i className="icofont-check"></i>{' '}
										<strong>Qualidade:</strong> Materiais e mão de obra
										especializada;
									</li>
									<li>
										<i className="icofont-check"></i>{' '}
										<strong>Eficiência:</strong> Gestão profissional para
										cumprimento de prazos e orçamentos;
									</li>
									<li>
										<i className="icofont-check"></i>{' '}
										<strong>Personalização:</strong> Projetos adaptados às
										necessidades do cliente.
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<img
								src="/images/ramos/construction.png"
								style={{ borderRadius: '5px' }}
								alt=""
							/>
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
