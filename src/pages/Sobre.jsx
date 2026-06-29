import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import Breadcrumb, { BreadcrumbNav } from '../components/Breadcrumb.jsx'

export default function Sobre() {
  return (
    <>
      <Header />
      <Breadcrumb title="Quem Somos" />

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

      <section className="section department-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="department-content mt-5">
                <h3 className="text-md">SANTIBENE GROUP</h3>
                <div className="divider my-4"></div>
                <p className="lead">We supply your demands</p>
                <p>
                  A SANTIBENE é uma empresa jovem, dinâmica e versátil e procura ir ao encontro das necessidades dos seus clientes. Atua no mercado como o departamento de procurement dos seus clientes, procurando sempre as melhores soluções ao melhor preço. Dispomos de condições logísticas o que nos permite efetuar todo o armazenamento e distribuição das encomendas, otimizando ao máximo o transporte aéreo e contentorizado.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <img src="/images/about/new/4.jpg" style={{ width: '100%' }} alt="" />
              <div className="sidebar-widget schedule-widget mt-5 d-none">
                <h5 className="mb-4">Horário de Atendimento</h5>
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between align-items-center">
                    <a href="#">Segunda - Sexta</a>
                    <span>9:00 - 17:00</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <a href="#">Sábados</a>
                    <span>9:00 - 16:00</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <a href="#">Domingos e Feriados</a>
                    <span>Fehado</span>
                  </li>
                </ul>
                <div className="sidebar-contatct-info mt-4">
                  <p className="mb-0">Precisa de atendimento urgente?</p>
                  <h3><a href="#">+244 912 345 678</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
