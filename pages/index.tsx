import {useState} from "react";
import {translateCode} from "../utils/translateUtils";
import {useForm} from "react-hook-form";

// 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

const Home = () => {
	const hookForm = useForm();

	const [apiKey, setApiKey] = useState<string>("");
	const [model, setModel] = useState<string>("gpt-3.5-turbo");

	console.log(apiKey);

	return (
		<form
			onSubmit={hookForm.handleSubmit(translateCode)}
			className="flex flex-col items-center h-screen">
			<h1 className="text-4xl mt-24 mb-5 text-center">
				AI Code Translator
			</h1>
			<input
				className="w-3/4 mb-3 px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
				type="password"
				placeholder="Enter API Key"
				{...hookForm.register("apiKey", {required: true})}
			/>
			<div className="flex space-x-4">
				<select
					value={model}
					className="h-[40px] w-[140px] rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
					onChange={e => setModel(e.target.value)}>
					<option value="gpt-3.5-turbo">GPT-3.5</option>
					<option value="gpt-4">GPT-4</option>
				</select>
				<button
					className="w-[140px] cursor-pointer rounded-md bg-violet-500 px-4 py-2 font-bold hover:bg-violet-600 active:bg-violet-700"
					type="submit">
					Translate
				</button>
			</div>
		</form>
	);
};

export default Home;
