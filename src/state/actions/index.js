
export const add = (name, email, password) => {
    return (dispatch) => {
        dispatch({
            type: "ADD",
            payload: {
                name,
                email,
                password
            }
        })
    }
}

export const login = (name, email) => {
    return (dispatch) => {
        dispatch({type: "LOGIN",
        payload: {
            name,
            email
        }
    })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: "LOGOUT"
        })
    }
}