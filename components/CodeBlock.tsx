import {FC} from "react";
import CodeMirror from "@uiw/react-codemirror";
import {StreamLanguage} from "@codemirror/language";
import {go} from "@codemirror/legacy-modes/mode/go";
import {tokyoNight} from "@uiw/codemirror-theme-tokyo-night";

interface Props {
	hookForm: any;
}

const CodeBlock: FC<Props> = ({hookForm}) => {
	return (
		<div className="w-full">
			<CodeMirror
				editable
				minHeight="300px"
				extensions={[StreamLanguage.define(go)]}
				theme={tokyoNight}
				value={hookForm.getValues("inputCode")}
				onChange={value => hookForm.setValue("inputCode", value)}
			/>
		</div>
	);
};

export default CodeBlock;
