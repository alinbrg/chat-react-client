import "./Input.css";
export default function Input({ sendMessage, message, setMessage }) {
	return (
		<form onSubmit={(e) => sendMessage(e)} className="message-form">
			<input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Type a message..."
			/>
			<button type="submit">Send</button>
		</form>
	);
}
