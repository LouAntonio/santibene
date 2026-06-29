import { Link } from 'react-router-dom'

export default function Breadcrumb({ title, bgImage }) {
  return (
    <section className="page-title bg-1" style={bgImage ? { background: `url(${bgImage}) 50% 50% !important` } : {}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block text-center">
              <span className="text-white">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BreadcrumbNav({ items }) {
  return (
    <ul className="list-inline breadcumb-nav">
      {items.map((item, i) => (
        <li className="list-inline-item" key={i}>
          {item.to ? (
            <Link to={item.to} className="text-white">{item.label}</Link>
          ) : (
            <a href="#" className="text-white-50">{item.label}</a>
          )}
          {i < items.length - 1 && <span className="text-white"> / </span>}
        </li>
      ))}
    </ul>
  )
}
