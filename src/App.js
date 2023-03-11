import { Route, Routes } from "react-router-dom";
import Join from "./components/SignIn/SignIn";
import Chat from "./components/Chat/Chat";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Join />} />
			<Route path="/chat" element={<Chat />} />
		</Routes>
	);
}

export default App;
