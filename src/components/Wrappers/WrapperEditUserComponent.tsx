import * as React from "react";
import { RouterProps, match } from "react-router";
import { connect } from "react-redux";
import { AppState } from "src/store";
import {
	fetchUser,
	updateUser,
	addUser,
	clearUserAction
} from "src/store/users/actions";
import { User } from "src/models/userModel";
import { FormUserComponent } from "../forms/FormUserComponent";

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
}

interface OwnProps {
	match: match<{ id: string }>;
}

export const WrapperEditUserComponent = (
	props: MethodProps & Props & RouterProps & OwnProps
) => {
	const userId = props.match.params.id;

	React.useEffect(() => {
		props.fetchUser(userId);
	}, []);

	const handleSubmit = (user: { name: string; email: string } | null) => {
		if (!user) {
			props.history.push("/");
			return;
		}

		props.updateUser(userId, user.name, user.email, () =>
			props.history.push("/")
		);
	};

	return (
		<>
			{props.user && (
				<FormUserComponent
					name={props.user.name}
					email={props.user.email}
					submit={handleSubmit}
				/>
			)}
		</>
	);
};

const mapStateToProps = ({ user }: AppState): Props => ({
	user
});

const mapDispatchToProps: MethodProps = {
	fetchUser,
	updateUser
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WrapperEditUserComponent);
