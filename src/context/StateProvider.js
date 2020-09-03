import React, {createContext, useContext, useReducer} from "react";

export const initialState = {
    user: null,
};


export const StateContext = createContext(initialState);

//Build a provider

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
