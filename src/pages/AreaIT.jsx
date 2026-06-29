import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { BreadcrumbNav } from '../components/Breadcrumb.jsx'

export default function AreaIT() {
  return (
    <>
      <Header />
      <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Consumíveis e Equipamentos Informáticos</span>
                <BreadcrumbNav items={[
                  { to: '/', label: 'Home' },
                  { to: '/areas', label: 'Áreas de negócio' },
                  { label: 'Consumíveis e Equipamentos Informáticos' }
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
                <h3 className="text-md">Consumíveis e Equipamentos Informáticos</h3>
                <div className="divider my-4"></div>
                <p>
                  <strong>Fornecimento de consumíveis:</strong> Cartuchos, toners, papel, baterias e acessórios, com entregas discretas e embalagens neutras. <br />
                  <strong>Venda/locação de equipamentos:</strong> Computadores, impressoras, monitores e periféricos, com transações sigilosas e entregas em locais privados. <br />
                  <strong>Manutenção e suporte técnico:</strong> Reparos, atualizações e recuperação de dados, realizados com total confidencialidade. <br />
                  <strong>Descarte seguro:</strong> Coleta e destruição de equipamentos e dados sensíveis, com certificado confidencial. <br />
                  <strong>Consultoria em TI:</strong> Análise de necessidades e planejamento de infraestrutura, com reuniões privadas e documentação protegida.
                </p>
                <h4>Benefícios:</h4>
                <ul className="list-unstyled mt-4">
                  <li><i className="icofont-check"></i> <strong>Privacidade total:</strong> Transações e serviços realizados de forma sigilosa.</li>
                  <li><i className="icofont-check"></i> <strong>Conveniência:</strong> Entregas e suporte personalizados.</li>
                  <li><i className="icofont-check"></i> <strong>Segurança:</strong> Métodos seguros para pagamento, entrega e descarte.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <img src="/images/ramos/it.png" style={{ borderRadius: '5px' }} alt="" />
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
