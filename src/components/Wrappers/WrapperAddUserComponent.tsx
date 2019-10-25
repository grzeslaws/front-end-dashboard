import * as React from "react";
import { RouterProps } from "react-router";
import { connect } from "react-redux";
import { addUser } from "src/store/users/actions";
import { FormUserComponent } from "../forms/FormUserComponent";

interface MethodProps {
	addUser: (name: string, email: string, redirect: () => any) => any;
}

export const WrapperEditUserComponent = (props: MethodProps & RouterProps) => {
	const handleSubmit = (user: { name: string; email: string } | null) => {
		if (!user) {
			props.history.push("/");
			return;
		}

		props.addUser(user.name, user.email, () => props.history.push("/"));
	};

	return <FormUserComponent name={""} email={""} submit={handleSubmit} />;
};

const mapDispatchToProps: MethodProps = {
	addUser
};

export default connect(
	null,
	mapDispatchToProps
)(WrapperEditUserComponent);
