import * as React from "react";
import { H2, H1 } from "src/theme/elements/Headings";
import { Td, Table, THead, Tr, TBody } from "src/theme/objects/Tables";
import { Button } from "src/theme/objects/Buttons";
import { connect } from "react-redux";
import { User } from "src/models/userModel";
import { updateUsers, deleteUser } from "src/store/users/actions";
import { AppState } from "src/store";
import {
	WrapperOptions,
	WrapperModal,
	ModalText,
	WrapperButtons,
	WrapperContent
} from "./usersStyled";
import { Link } from "react-router-dom";

interface Props {
	users: User[];
}

interface MethodProps {
	updateUsers: () => any;
	deleteUser: (id: string) => any;
}

const UsersComponent = (props: Props & MethodProps) => {
	React.useEffect(() => {
		props.updateUsers();
	}, []);

	const [currentUser, setCurrentUser] = React.useState<number | null>(null);

	const renderUsers = () => {
		return props.users.map(u => {
			return (
				<Tr key={u.id}>
					<Td>{u.id}</Td>
					<Td>{u.name}</Td>
					<Td>{u.username}</Td>
					<Td>{u.email}</Td>
					<Td>{u.address.city}</Td>
					<Td>
						<Link to={`/edit/${u.id}`}>
							<Button variant="success" small={true}>
								Edit
							</Button>
						</Link>
					</Td>
					<Td>
						<Button
							onClick={() => setCurrentUser(u.id)}
							variant="error"
							small={true}
						>
							Delete
						</Button>
					</Td>
				</Tr>
			);
		});
	};

	const deleteUserMethod = () => {
		if (!currentUser) {
			return;
		}
		props.deleteUser(String(currentUser));
		setCurrentUser(null);
	};

	return (
		<>
			{currentUser && (
				<WrapperModal>
					<WrapperContent>
						<H1>Delete</H1>
						<ModalText>Are you sure to delete this user?</ModalText>
						<WrapperButtons center={true}>
							<Button
								onClick={() => setCurrentUser(null)}
								marginRight={10}
								variant="error"
							>
								Cancel
							</Button>
							<Button onClick={() => deleteUserMethod()}>Submit</Button>
						</WrapperButtons>
					</WrapperContent>
				</WrapperModal>
			)}
			<WrapperOptions>
				<H2>User list</H2>
				<Link to="/add">
					<Button>Add new</Button>
				</Link>
			</WrapperOptions>
			<Table>
				<THead>
					<Tr>
						<Td>Id</Td>
						<Td>Name</Td>
						<Td>Username</Td>
						<Td>Email</Td>
						<Td>City</Td>
						<Td>Edit</Td>
						<Td>Delete</Td>
					</Tr>
				</THead>
				<TBody>{renderUsers()}</TBody>
			</Table>
		</>
	);
};

const mapStateToProps = ({ users }: AppState): Props => ({
	users
});

const mapDispatchToProps: MethodProps = {
	updateUsers,
	deleteUser
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	null,
	{ pure: false }
)(UsersComponent);
