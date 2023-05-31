import { createContext, useReducer, useContext, useRef } from "react";

export const State = createContext();

export const StateProvider = (props) => {
	const [state, dispatch] = useReducer(stateReducer, {recipes: []});

	const ref = useRef();

	return (
		<State.Provider value={{ state, dispatch, refs: { ref } }}>
			{props.children}
		</State.Provider>
	);
};

export const useGlobalState = () => {
	return useContext(State);
};

export const stateReducer = (state, action) => {
	if (action.type === "recipes fetched") {
		return { ...state, recipes: [...action.data] }
	}
};
