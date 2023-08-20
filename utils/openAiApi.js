import OpenAI from "openai";

export const getTranslatedCode = async (apiKey, model, prompt, setCode) => {
	const openai = new OpenAI({
		apiKey: apiKey,
		dangerouslyAllowBrowser: true,
	});

	try {
		const response = await openai.chat.completions.create({
			model: model,
			messages: [{role: "system", content: prompt}],
			temperature: 0,
			stream: true,
		});

		for await (const chunk of response) {
			if (chunk.choices[0].delta.content === undefined) return;
			setCode(prev => prev + chunk.choices[0].delta.content);
		}
	} catch (error) {
		throw new Error(error);
	}
};
