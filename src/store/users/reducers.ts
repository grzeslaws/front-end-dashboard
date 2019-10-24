import { UpdateUsersAction, FETCH_USERS, FETCH_USER, FetchUsersAction, UPDATE_USER, UpdateUserAction, CLEAR_USER, ClearUserAction } from "./types";

export const usersReducer = (state = [], action: UpdateUsersAction) => {
  switch (action.type) {
    case FETCH_USERS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const userReducer = (state = null, action: FetchUsersAction | UpdateUserAction | ClearUserAction) => {
  switch (action.type) {
    case FETCH_USER: {
      return action.payload;
    }
    case UPDATE_USER: {
      return action.payload;
    }
    case CLEAR_USER: {
      return action.payload;
    }
    default:
      return state;
  }
};
