import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { usersReducer, userReducer } from "./users/reducers";

const rootReducer = combineReducers({
	users: usersReducer,
	user: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
	const middlewares = [thunkMiddleware];
	const middleWareEnhancer = applyMiddleware(...middlewares);

	const store = createStore(
		rootReducer,
		composeWithDevTools(middleWareEnhancer)
	);

	return store;
};

export default configureStore;
