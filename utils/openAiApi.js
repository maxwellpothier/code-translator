import OpenAI from "openai";

const getPrompt = ({inputLanguage, outputLanguage, inputCode}) => {
	return "Are you working??";
};

export const getTranslatedCode = async formContent => {
	const openai = new OpenAI({
		apiKey: formContent.apiKey,
		dangerouslyAllowBrowser: true,
	});

	try {
		console.log("Loading...");
		const response = await openai.chat.completions.create({
			model: formContent.model,
			messages: [{role: "system", content: getPrompt(formContent)}],
			temperature: 0,
			stream: true,
		});

		console.log(response);
	} catch (error) {
		console.log(error);
	} finally {
		console.log("Done");
	}
};
