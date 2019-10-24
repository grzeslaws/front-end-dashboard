import * as React from "react";
import {
	Input,
	WrapperInput,
	Label,
	ErrorMessage
} from "src/theme/objects/Forms";

interface InputComponentProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
	name: string;
	fieldType: string;
	label?: string | null;
	errorMessage?: string;
	placeholder?: string;
	activePlaceholder?: boolean;
	marginBottom?: number;
	marginRight?: number;
	focused?: boolean;
	onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	clear?: boolean;
	value?: string | undefined;
}

export const InputComponent = (props: InputComponentProps) => {
	const focusedInput = React.useRef<HTMLInputElement>(null);

	const [value, setValue] = React.useState<string>("");

	React.useEffect(() => {
		if (props.focused) {
			focusedInput.current!.focus();
		} else {
			focusedInput.current!.blur();
		}

		if (props.clear) {
			setValue("");
		}
		if (props.value) {
			setValue(props.value);
		}
	}, [props.focused, props.clear, props.value]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		props.onChange(e);
	};

	return (
		<WrapperInput
			marginBottom={props.marginBottom}
			marginRight={props.marginRight}
		>
			{props.label && <Label>{props.label}</Label>}
			<Input
				ref={focusedInput as any}
				onChange={onChange}
				name={props.name}
				type={props.fieldType}
				placeholder={props.placeholder}
				activePlaceholder={props.activePlaceholder}
				step="0.01"
				onFocus={props.onFocus}
				onBlur={props.onBlur}
				value={value}
			/>
			<ErrorMessage>{props.errorMessage}</ErrorMessage>
		</WrapperInput>
	);
};
