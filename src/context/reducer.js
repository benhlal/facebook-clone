export const actionTypes = {
    SET_USER: "SET_USER"
}

//action could be dispatch or any other action
const reducer = (state, action) => {
//dipatch contain object of type and user
    console.log("reducer data :" + action)

    switch (action.type) {
        case actionTypes.SET_USER:
            //logic to adding items to basket
            let newState = {
                ...state,
                user: action.user,
            }
            console.log("new stats:" + JSON.stringify(newState))

            return newState;


        default:
            return state;
    }
};
export default reducer;
