import {FC} from "react";
import CodeMirror from "@uiw/react-codemirror";
import {StreamLanguage} from "@codemirror/language";
import {go} from "@codemirror/legacy-modes/mode/go";
import {tokyoNight} from "@uiw/codemirror-theme-tokyo-night";

interface Props {
	hookForm?: any;
	outputCode?: string;
}

const CodeBlock: FC<Props> = ({hookForm, outputCode}) => {
	const value = hookForm?.getValues("inputCode") || outputCode;

	return (
		<div className="w-full mb-5">
			<CodeMirror
				editable
				minHeight="300px"
				extensions={[StreamLanguage.define(go)]}
				theme={tokyoNight}
				value={value}
				onChange={value => hookForm.setValue("inputCode", value)}
			/>
		</div>
	);
};

export default CodeBlock;
