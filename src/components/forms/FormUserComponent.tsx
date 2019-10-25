import * as React from "react";
import { H2 } from "src/theme/elements/Headings";
import { Button } from "src/theme/objects/Buttons";
import { Form } from "src/theme/objects/Forms";
import { InputComponent } from "./InputComponent";
import { WrapperButtons } from "../users/usersStyled";
import { validateEmail } from "src/services/validateEmail";

interface Props {
	name: string;
	email: string;
	submit: (user: { name: string; email: string } | null) => any;
}

interface State {
	name: string;
	email: string;
}

export const FormUserComponent = (props: Props) => {
	const [state, setState] = React.useState<State>({
		name: props.name,
		email: props.email
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): any => {
		e.persist();
		setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const isEmailError = state.email && !validateEmail(state.email);
	const invalidForm =
		[!state.email, !state.name, !!isEmailError].indexOf(true) !== -1;

	const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (invalidForm) {
			return;
		}

		props.submit({ name: state.name, email: state.email });
	};

	const cancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		props.submit(null);
	};

	return (
		<>
			<H2>Form </H2>
			<Form>
				<InputComponent
					label="name"
					name="name"
					fieldType="text"
					onChange={onChange}
					marginBottom={25}
					value={props.name}
					errorMessage={!state.name ? "Reqired" : ""}
				/>
				<InputComponent
					label="email"
					name="email"
					fieldType="text"
					onChange={onChange}
					value={props.email}
					errorMessage={isEmailError ? "Incorrect address email" : ""}
				/>
				<WrapperButtons>
					<Button onClick={cancel} marginRight={10} variant="error">
						Cancel
					</Button>
					<Button disabledState={invalidForm} onClick={submit}>
						Submit
					</Button>
				</WrapperButtons>
			</Form>
		</>
	);
};
