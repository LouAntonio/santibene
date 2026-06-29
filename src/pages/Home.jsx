import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import StatsCounter from '../components/StatsCounter.jsx';
import OrcamentoForm from '../components/OrcamentoForm.jsx';

export default function Home() {
	useDocumentTitle('Santibene');

	return (
		<>
			<Header />

			<section className="banner">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12 col-xl-7">
							<div className="block">
								<div className="divider mb-3"></div>
								<span
									className="text-uppercase text-sm letter-spacing"
									style={{ fontWeight: 900 }}
								>
									Santibene Group
								</span>
								<h1 className="mb-3 mt-3">We supply your demands</h1>
								<div className="btn-container">
									<Link
										to="/sobre"
										className="btn btn-main-2 btn-icon btn-round-full"
									>
										Saiba Mais <i className="icofont-simple-right ml-2"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="features">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="feature-block d-lg-flex">
								<FeatureCard
									icon="icofont-bullseye"
									title="Missão"
									text="A SANTIBENE tem como missão pensar em formas de solucionar, hoje, os desafios do amanhã. Buscamos mantermo-nos como referência no nosso mercado, primando pela inovação, solidez e eficiência dos serviços oferecidos."
								/>
								<FeatureCard
									icon="icofont-sand-clock"
									title="Visão"
									text="Somos apaixonados por aquilo que fazemos. Os nossos clientes são como o bater do nosso coração. É por eles que procuramos sempre a excelência, mantendo o espírito de equipe e o rigor da nossa força de trabalho."
								/>
								<FeatureCard
									icon="icofont-handshake-deal"
									title="Valores"
									text="Nossos valores estão fundamentados na ética, transparência e no comprometimento do Grupo."
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section about">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4 col-sm-6">
							<div className="about-img">
								<img src="/images/about/new/1.jpg" alt="" className="img-fluid" />
								<img
									src="/images/about/new/2.jpg"
									alt=""
									className="img-fluid mt-4"
								/>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6">
							<div className="about-img mt-4 mt-lg-0">
								<img src="/images/about/new/3.jpg" alt="" className="img-fluid" />
							</div>
						</div>
						<div className="col-lg-4">
							<div className="about-content pl-4 mt-4 mt-lg-0">
								<h2 className="title-color">Sobre Nós</h2>
								<p className="mt-4 mb-5">
									A SANTIBENE é uma empresa jovem, dinâmica e versátil e procura
									ir ao encontro das necessidades dos seus clientes. Atua no
									mercado como o departamento de procurement dos seus clientes,
									procurando sempre as melhores soluções ao melhor preço. Dispomos
									de condições logísticas o que nos permite efetuar todo o
									armazenamento e distribuição das encomendas, otimizando ao
									máximo o transporte aéreo e contentorizado.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<StatsCounter />

			<section className="section service gray-bg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 text-center">
							<div className="section-title">
								<h2>Nosso portfólio inclui serviços como:</h2>
								<div className="divider mx-auto my-4"></div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-6">
							<Link
								to="/areas/alimentar"
								className="service-item mb-4 row justify-content-center text-center mx-0"
							>
								<div className="icon d-flex align-items-center col-12 justify-content-center">
									<i className="icofont-food-basket text-lg"></i>
								</div>
								<h4 className="mt-3 mb-3">Alimentar</h4>
								<div className="content">
									<p className="mb-4">
										Soluções completas na área alimentar: fornecimento,
										catering, consultoria e produção de refeições com qualidade,
										personalização e conveniência.
									</p>
								</div>
							</Link>
						</div>

						<ServiceCard
							to="/areas/construcao"
							icon="icofont-under-construction"
							title="Construção, Projectos e Equipamentos"
							text="Serviços completos em construção, equipamentos e projetos: qualidade, eficiência e soluções personalizadas para cada necessidade."
						/>
						<ServiceCard
							to="/areas/farmaceutica"
							icon="icofont-pills"
							title="Farmacêutica e Material Hospitalar"
							text="Com presença em angola, comercializamos a principais marcas de medicamentos, equipamentos e consumíveis na área da Saúde."
						/>
						<ServiceCard
							to="/areas/it"
							icon="icofont-printer"
							title="Consumíveis e Equipamentos Informáticos"
							text="Soluções seguras e sigilosas em TI: fornecimento, manutenção e descarte de equipamentos com total privacidade e conveniência."
						/>
						<ServiceCard
							to="/areas/office"
							icon="icofont-brain-alt"
							title="Material de Escritório"
							text="Comercializamos um vasto leque de consumíveis e oferecemos soluções chave na mão para o apetrechamento de salas para escritório."
						/>

						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="service-item mb-4 row justify-content-center text-center mx-0">
								<div className="icon d-flex align-items-center col-12 justify-content-center">
									<i className="icofont-info-circle text-lg"></i>
								</div>
								<div className="content">
									<p className="mb-4">
										Tudo isso para que não se preocupe em buscar serviços
										noutros sítios
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section appoinment">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="appoinment-content">
								<img src="/images/about/1.jpg" alt="" className="img-fluid" />
								<div className="emergency">
									<h2 className="text-md">
										<a href="tel:+351919294239" style={{ color: 'white' }}>
											<i className="icofont-phone-circle text-md"></i>+351 919
											294 239
										</a>
										<br />
										<a href="tel:+244949410940" style={{ color: 'white' }}>
											<i className="icofont-phone-circle text-md"></i>+244 949
											410 940
										</a>
									</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-10">
							<div className="appoinment-wrap mt-5 mt-lg-0">
								<h2 className="mb-2 title-color">Pedido de Orçamento</h2>
								<p className="mb-4">Precisa de um orçamento? Fale connosco!</p>
								<OrcamentoForm />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section clients d-none">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7">
							<div className="section-title text-center">
								<h2>Nossas Marcas</h2>
								<div className="divider mx-auto my-4"></div>
								<p>
									Com a ajuda de nossos parceiros, superamos nossos limites e
									provemos serviços de melhor qualidade para si
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row clients-logo">
						{[1, 2, 3, 4, 5, 6, 3, 4, 5, 6].map((n, i) => (
							<div className="col-lg-2" key={i}>
								<div className="client-thumb">
									<img
										src={`/images/about/${n}.png`}
										alt=""
										className="img-fluid"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
