import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<section className="sign-in-container">
			<form
				action="chat"
				className="sign-in-inner"
				onSubmit={(e) => {
					(!name || !room) && e.preventDefault();
				}}
			>
				<h1 className="sign-in-heading">Sign In</h1>
				<div>
					<input
						name="name"
						value={name}
						placeholder="Name"
						className="sign-in-input"
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div>
				<div>
					<input
						name="room"
						value={room}
						placeholder="Room"
						className="sign-in-input"
						onChange={(e) => {
							setRoom(e.target.value);
						}}
					/>
				</div>
				{/* <Link
					to={`/chat?name=${name}&room=${room}`}
					onClick={(e) => {
						(!name || !room) && e.preventDefault();
					}}
					className="sign-in-btn"
				>
					Sign in
				</Link> */}
				<button type="submit" className="sign-in-btn">
					Sign In
				</button>
			</form>
		</section>
	);
}
