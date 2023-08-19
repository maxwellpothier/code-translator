import {useState} from "react";
import {translateCode} from "../utils/translateUtils";
import {useForm} from "react-hook-form";
import LanguageSelect from "@/components/LanguageSelect";

// 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

const Home = () => {
	const hookForm = useForm({
		defaultValues: {
			apiKey: "",
			model: "gpt-3.5-turbo",
			inputLanguage: "Python",
		},
	});

	return (
		<form
			onSubmit={hookForm.handleSubmit(translateCode)}
			className="flex flex-col items-center h-screen px-4">
			<h1 className="text-4xl mt-24 mb-5 text-center">
				AI Code Translator
			</h1>
			<input
				className="w-3/4 mb-3 px-4 py-2 border rounded-lg bg-white text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
				type="password"
				placeholder="Enter API Key"
				{...hookForm.register("apiKey", {required: true})}
			/>
			<div className="flex space-x-4 mb-5">
				<select
					className="h-[40px] w-[140px] rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
					{...hookForm.register("model", {required: true})}>
					<option value="gpt-3.5-turbo">GPT-3.5</option>
					<option value="gpt-4">GPT-4</option>
				</select>
				<button
					className="w-[140px] cursor-pointer rounded-md bg-violet-500 px-4 py-2 font-bold hover:bg-violet-600 active:bg-violet-700"
					type="submit">
					Translate
				</button>
			</div>
			<h3 className="text-center text-xl font-bold mb-3">Input</h3>
			<LanguageSelect hookForm={hookForm} />
		</form>
	);
};

export default Home;
