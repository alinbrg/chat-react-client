import "./Message.css";
import ReactEmoji from "react-emoji";

export default function Message({ message: { user, text }, name }) {
	let isSentByCurrencUser = false;
	const trimName = name.trim().toLowerCase();

	if (user === trimName) {
		isSentByCurrencUser = true;
	}

	return (
		<>
			{isSentByCurrencUser ? (
				<div className="message-container justify-end">
					<h5 className="user-name pr-10">{trimName}</h5>
					<div className="message-box bg-blue">
						<p className="message-text">{ReactEmoji.emojify(text)}</p>
					</div>
				</div>
			) : (
				<div className="message-container justify-start">
					<div
						className={
							user === "admin"
								? "message-box bg-light admin-message"
								: "message-box bg-light"
						}
					>
						<p className="message-text color-dark">
							{ReactEmoji.emojify(text)}
						</p>
					</div>
					<h5 className="user-name pl-10">{user}</h5>
				</div>
			)}
		</>
	);
}
