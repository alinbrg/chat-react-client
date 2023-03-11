import "./Infobar.css";

export default function Infobar({ room }) {
	return (
		<div className="infobar">
			<div className="left-inner">
				<span className="online-icon"></span>
				<h3>{room}</h3>
			</div>
			<div className="right-inner">
				<a href="/" className="close-icon">
					🗙
				</a>
			</div>
		</div>
	);
}
