import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import AreaCard from '../components/AreaCard.jsx'

export default function Areas() {
  return (
    <>
      <Header />
      <Breadcrumb title="Áreas de Negócio" />

      <section className="section awards p-0 mb-3 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-">
              <div className="row">
                <AreaCard to="/areas/alimentar" img="/images/ramos/a.png" title="Alimentar" />
                <AreaCard to="/areas/construcao" img="/images/ramos/construction.png" title={<>Construção, Projectos <br /> e Equipamentos</>} />
                <AreaCard to="/areas/farmaceutica" img="/images/ramos/farmaceutica.png" title={<>Farmacêutica <br />e Material Hospitalar</>} />
                <AreaCard to="/areas/it" img="/images/ramos/it.png" title={<>Consumíveis <br />e Equipamentos Informáticos</>} />
                <AreaCard to="/areas/office" img="/images/ramos/office.png" title="Material de Escritório" />
                <AreaCard to="/areas/office-mob" img="/images/ramos/office2.jpg" title="Mobiliário de Escritório" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
