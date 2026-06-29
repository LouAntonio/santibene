import { Link } from 'react-router-dom'

export default function Breadcrumb({ title, bgImage, breadcrumbs }) {
  const heroStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    : {}

  return (
    <section className="page-title bg-1" style={heroStyle}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block text-center">
              <span className="text-white">{title}</span>
              {breadcrumbs && <BreadcrumbNav items={breadcrumbs} />}
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
            <span className="text-white-50">{item.label}</span>
          )}
          {i < items.length - 1 && <span className="text-white"> / </span>}
        </li>
      ))}
    </ul>
  )
}
