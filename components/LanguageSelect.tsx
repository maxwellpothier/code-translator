import type {FC} from "react";
import {languages} from "../data/languages";

interface Props {
	hookForm: any;
	name: string;
}

const LanguageSelect: FC<Props> = ({hookForm, name}) => {
	return (
		<select
			className="w-full rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200 mb-3"
			{...hookForm.register(name, {required: true})}>
			{languages
				.sort((a, b) => a.label.localeCompare(b.label))
				.map((language, index) => (
					<option key={index} value={language.value}>
						{language.label}
					</option>
				))}
		</select>
	);
};

export default LanguageSelect;
