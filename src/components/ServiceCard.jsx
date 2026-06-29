import { Link } from 'react-router-dom'

export default function ServiceCard({ to, icon, title, text }) {
  return (
    <Link to={to} className="col-lg-4 col-md-6 col-sm-6">
      <div className="service-item mb-4 row justify-content-center text-center mx-0">
        <div className="icon d-flex align-items-center col-12 justify-content-center">
          <i className={`${icon} text-lg`}></i>
        </div>
        <h4 className="mt-3 mb-3">{title}</h4>
        <div className="content">
          <p className="mb-4">{text}</p>
        </div>
      </div>
    </Link>
  )
}
