import {
	UpdateUsersAction,
	FETCH_USERS,
	FETCH_USER,
	FetchUsersAction,
	ClearUserAction,
	CLEAR_USER
} from "./types";
import { Dispatch } from "redux";
import API from "src/services/API";
import endpoints from "src/endpoints";
import { parseArray, parse } from "sparkson";
import { User } from "src/models/userModel";

const updateUsersAction = (payload: User[]): UpdateUsersAction => ({
	type: FETCH_USERS,
	payload
});

const fetchUserAction = (payload: User): FetchUsersAction => ({
	type: FETCH_USER,
	payload
});

export const clearUserAction = (): ClearUserAction => ({
	type: CLEAR_USER,
	payload: null
});

export const updateUsers = () => (dispatch: Dispatch<UpdateUsersAction>) => {
	API(endpoints.getUsers)
		.then(r => {
			dispatch(updateUsersAction(parseArray(User, r.data)));
		})
		.catch(e => {
			console.error(e);
		});
};

export const fetchUser = (id: string) => (
	dispatch: Dispatch<FetchUsersAction>
) => {
	API(endpoints.getUser(id))
		.then(r => {
			dispatch(fetchUserAction(parse(User, r.data)));
		})
		.catch(e => {
			console.error(e);
		});
};

export const updateUser = (
	id: string,
	name: string,
	email: string,
	redirect: () => any
) => (dispatch: Dispatch<FetchUsersAction | UpdateUsersAction>) => {
	API.patch(endpoints.getUser(id), { name, email })
		.then(() => {
			updateUsers()(dispatch);
			redirect();
		})
		.catch(e => {
			console.error(e);
		});
};

export const deleteUser = (id: string) => (
	dispatch: Dispatch<FetchUsersAction | UpdateUsersAction>
) => {
	API.delete(endpoints.getUser(id))
		.then(() => {
			updateUsers()(dispatch);
		})
		.catch(e => {
			console.error(e);
		});
};

export const addUser = (name: string, email: string, redirect: () => any) => (
	dispatch: Dispatch<FetchUsersAction | UpdateUsersAction>
) => {
	API.post(endpoints.addUser, {name, email})
		.then(() => {
			updateUsers()(dispatch);
			redirect();
		})
		.catch(e => {
			console.error(e);
		});
};
