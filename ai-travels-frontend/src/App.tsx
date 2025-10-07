import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/molecules/destination-card";
import { DestinationCard } from "./components/molecules/destination-card";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<DestinationCard />
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</>
	);
}

export default App;
