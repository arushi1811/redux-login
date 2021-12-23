
const loggedReducer = (state={}, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                name: action.payload.name,
                email: action.payload.email
            }
        case "LOGOUT":
            return {}
        default:
            return state
    }
}

export default loggedReducer