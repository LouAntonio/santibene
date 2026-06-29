import { Link } from 'react-router-dom';

export default function AreaCard({ to, img, title }) {
	return (
		<Link to={to} className="col-lg-4 col-md-6 col-sm-6 mb-5">
			<div className="card">
				<div className="sub-card category">
					<span className="text_span text-center">RAMO</span>
				</div>
				<div className="card_container">
					<img src={img} alt="" className="image" />
				</div>
				<div className="sub-card named">
					<span className="text_span text-center">{title}</span>
				</div>
			</div>
		</Link>
	);
}
