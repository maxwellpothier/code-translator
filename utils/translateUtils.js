import OpenAI from "openai";
import endent from "endent";

export const checkForErrors = formContent => {
	const {apiKey, model, inputLanguage, inputCode, outputLanguage} =
		formContent;

	const maxCodeLength = model === "gpt-3.5-turbo" ? 6000 : 12000;

	if (!inputCode) {
		throw new Error("Input code cannot be empty");
	}

	if (inputLanguage === outputLanguage) {
		throw new Error("Languages must be different");
	}

	if (inputCode.length > maxCodeLength) {
		throw new Error(
			`Please enter code less than ${maxCodeLength} characters. You are currently at ${inputCode.length} characters.`
		);
	}
};

export const getPrompt = ({inputLanguage, outputLanguage, inputCode}) => {
	return endent`
      You are an expert programmer in all programming languages. Translate the "${inputLanguage}" code to "${outputLanguage}" code. Do not include \`\`\`.
  
      Example translating from JavaScript to Python:
  
      JavaScript code:
      for (let i = 0; i < 10; i++) {
        console.log(i);
      }
  
      Python code:
      for i in range(10):
        print(i)
      
      ${inputLanguage} code:
      ${inputCode}

      ${outputLanguage} code (no \`\`\`):
     `;
};

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
