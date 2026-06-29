export default function LogisticsCard({ img, label }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="award-img lsa">
        <img src={img} alt="" className="img-fluid" />
        <span>{label}</span>
      </div>
    </div>
  )
}
