export default function FeatureCard({ icon, title, text }) {
  return (
    <div className="feature-item mb-5 mb-lg-0">
      <div className="feature-icon mb-4">
        <i className={icon}></i>
      </div>
      <h4 className="mb-3">{title}</h4>
      <p className="mb-4">{text}</p>
    </div>
  )
}
