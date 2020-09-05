import {SET_USER} from '../actions/actionTypes'

const INITIAL_STATE = {
    user: null
};


const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SET_USER:
            //logic to adding items to basket
            let newState = {
                ...state,
                user: action.payload,
            }
            console.log("payload after", action.payload)
            console.log("new stats:" + JSON.stringify(newState))

            return newState;


        default:
            return state;
    }
};
export default userReducer;
