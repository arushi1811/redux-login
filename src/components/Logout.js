import { useDispatch } from "react-redux"
import {actions} from "../state"
import { bindActionCreators } from "redux"
import { useHistory } from "react-router"
import { useEffect } from "react"
const Logout = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {logout} = bindActionCreators(actions, dispatch)

    useEffect(()=> {
        logout()
        history.push("/")

    }, [history, logout])

    return (
        <div>
        </div>
    )
}

export default Logout
