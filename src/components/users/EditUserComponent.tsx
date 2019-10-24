import * as React from "react";
import { H2 } from "src/theme/elements/Headings";
import { Button } from "src/theme/objects/Buttons";
import { connect } from "react-redux";
import { User } from "src/models/userModel";
import {
	fetchUser,
	updateUser,
	addUser,
	clearUserAction
} from "src/store/users/actions";
import { AppState } from "src/store";
import { match } from "react-router-dom";
import { Form } from "src/theme/objects/Forms";
import { InputComponent } from "../forms/InputComponent";
import { WrapperButtons } from "./usersStyled";
import { RouterProps } from "react-router";
import { validateEmail } from "src/services/validateEmail";

interface Props {
	user: User | null;
}

interface MethodProps {
	fetchUser: (id: string) => any;
	updateUser: (
		id: string,
		name: string,
		email: string,
		redirect: () => any
	) => any;
	addUser: (name: string, email: string, redirect: () => any) => any;
	clearUser: () => any;
}

interface OwnProps {
	match: match<{ id: string }>;
	newUser: boolean;
}

interface State {
	name: string;
	email: string;
}

const EditUserComponent = (
	props: Props & MethodProps & OwnProps & RouterProps
) => {
	const isAdd = props.match.path === "/add" ? true : false;
	const userId = props.match.params.id;

	const [state, setState] = React.useState<State>({
		name: "",
		email: ""
	});

	React.useEffect(() => {
		if (!isAdd) {
			props.fetchUser(userId);
		}
		return () => props.clearUser();
	}, []);

	React.useEffect(() => {
		if (state.name === "") {
			setState({
				...state,
				name: props.user ? props.user.name : "",
				email: props.user ? props.user.email : ""
			});
		}
	}, [props.user]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): any => {
		e.persist();
		setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const isEmailError = state.email && !validateEmail(state.email);
	const invalidForm =
		[!state.email, !state.name, !!isEmailError].indexOf(true) !== -1;

	const save = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (invalidForm) {
			return;
		}

		props.updateUser(userId, state.name, state.email, () =>
			props.history.push("/")
		);
	};

	const addUserMethod = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (invalidForm) {
			return;
		}

		props.addUser(state.name, state.email, () => props.history.push("/"));
	};

	const cancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		props.history.push("/");
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
					value={props.user ? props.user.name : ""}
					errorMessage={!state.name ? "Reqired" : ""}
				/>
				<InputComponent
					label="email"
					name="email"
					fieldType="text"
					onChange={onChange}
					value={props.user ? props.user.email : ""}
					errorMessage={isEmailError ? "Incorrect address email" : ""}
				/>
				<WrapperButtons>
					<Button onClick={cancel} marginRight={10} variant="error">
						Cancel
					</Button>
					<Button
						disabledState={invalidForm}
						onClick={!isAdd ? save : addUserMethod}
					>
						Submit
					</Button>
				</WrapperButtons>
			</Form>
		</>
	);
};

const mapStateToProps = ({ user }: AppState): Props => ({
	user
});

const mapDispatchToProps: MethodProps = {
	fetchUser,
	updateUser,
	addUser,
	clearUser: clearUserAction
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	null,
	{ pure: false }
)(EditUserComponent);
