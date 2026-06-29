import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { BreadcrumbNav } from '../components/Breadcrumb.jsx'

export default function AreaOfficeMob() {
  return (
    <>
      <Header />
      <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Mobiliário de Escritório</span>
                <BreadcrumbNav items={[
                  { to: '/', label: 'Home' },
                  { to: '/areas', label: 'Áreas de negócio' },
                  { label: 'Mobiliário de Escritório' }
                ]} />
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
                <h3 className="text-md">Mobiliário de Escritório</h3>
                <div className="divider my-4"></div>
                <p>
                  Soluções completas para espaços corporativos, com foco em ergonomia, funcionalidade e design. <br />
                  <strong>Fornecimento de mobiliário:</strong> Mesas, cadeiras, armários e estações de trabalho com design moderno e materiais duráveis. <br />
                  <strong>Projetos personalizados:</strong> Layouts adaptados ao espaço disponível, promovendo conforto, produtividade e aproveitamento inteligente. <br />
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <img src="/images/ramos/office2.jpg" style={{ borderRadius: '5px' }} alt="" />
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
                {[1,2,3,4,5,6].map((_, i) => (
                  <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                    <div className="award-img lsa">
                      <img src="/images/ramos/produto.png" alt="" className="img-fluid" />
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
  )
}
