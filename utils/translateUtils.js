import {toastError} from "./toastUtils";
import {getTranslatedCode} from "./openAiApi";

export const translateCode = async formContent => {
	const {apiKey, model, inputLanguage, inputCode, outputLanguage} =
		formContent;

	const maxCodeLength = model === "gpt-3.5-turbo" ? 6000 : 12000;

	if (!inputCode) {
		toastError("Input code cannot be empty");
		return;
	}

	if (inputLanguage === outputLanguage) {
		toastError("Languages must be different");
		return;
	}

	if (inputCode.length > maxCodeLength) {
		toastError(
			`Please enter code less than ${maxCodeLength} characters. You are currently at ${inputCode.length} characters.`
		);
		return;
	}

	const translatedCode = await getTranslatedCode(formContent);
	console.log(translatedCode);
};
