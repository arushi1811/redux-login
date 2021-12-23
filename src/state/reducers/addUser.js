import sha256 from "js-sha256"
let id = 0

const addUser = (state=[], action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {id: ++id, email: action.payload.email, password: sha256(action.payload.password), name: action.payload.name}]
        default:
            return state
    }
}

export default addUser