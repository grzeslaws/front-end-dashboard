import { User } from "src/models/userModel"; 

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USER = "FETCH_USER";
export const UPDATE_USER = "UPDATE_USER";
export const CLEAR_USER = "CLEAR_USER";

export interface UpdateUsersAction {
	type: typeof FETCH_USERS;
	payload: User[];
}

export interface FetchUsersAction {
	type: typeof FETCH_USER;
	payload: User;
}

export interface UpdateUserAction {
	type: typeof UPDATE_USER;
	payload: User;
}

export interface ClearUserAction {
	type: typeof CLEAR_USER;
	payload: null;
}
