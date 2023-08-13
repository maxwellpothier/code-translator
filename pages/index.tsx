import {useState} from "react";

const Home = () => {
	const [apiKey, setApiKey] = useState("");

	console.log(apiKey);

	return (
		<div className="flex flex-col items-center h-screen">
			<h1 className="text-4xl mt-24 mb-5">AI Code Translator</h1>
			<input
				className="px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
				type="password"
				placeholder="Enter API Key"
				value={apiKey}
				onChange={e => setApiKey(e.target.value)}
			/>
		</div>
	);
};

export default Home;
