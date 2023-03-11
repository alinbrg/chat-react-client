import "./Chat.css";
import { useState, useEffect } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";

import { useLocation } from "react-router-dom";
import Infobar from "../Infobar/Infobar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;

export default function Chat() {
	const location = useLocation();

	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	const ENDPOINT = "http://localhost:5000";

	// console.log(io(ENDPOINT));
	useEffect(() => {
		const { name, room } = queryString.parse(location?.search);

		socket = io(ENDPOINT);

		setName(name);
		setRoom(room);

		socket.emit("join", { name, room }, () => {});

		return () => {
			socket.disconnect();
			socket.off();
		};
	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on("message", (message) => {
			setMessages([...messages, message]);
		});
	}, [messages]);

	function sendMessage(e) {
		e.preventDefault();

		if (message) {
			socket.emit("sendMessage", message, () => setMessage(""));
		}
	}

	// console.log(message, messages);

	return (
		<section className="chat-section">
			<div className="container">
				<Infobar room={room} />
				<Messages messages={messages} name={name} />
				<Input
					sendMessage={sendMessage}
					message={message}
					setMessage={setMessage}
				/>
			</div>
		</section>
	);
}
