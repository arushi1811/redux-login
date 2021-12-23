import { useSelector, useDispatch } from "react-redux"
import { useRef } from "react"
import { sha256 } from "js-sha256"
import { useHistory } from "react-router"
import { bindActionCreators } from "redux"
import {actions} from "../state"
const Login = () => {

    let history = useHistory()

    const users = useSelector((store) => store.add)

    const email = useRef("")
    const pswd = useRef("")

    const dispatch = useDispatch()
    const {login} = bindActionCreators(actions, dispatch)

    const submitHandle = (e) => {
        e.preventDefault()
        let encrypt = sha256(pswd.current.value)
        for (const user of users) {
            if (user.email===email.current.value && user.password===encrypt) {
                localStorage.setItem("loggedIn", "true")
                login(user.name, user.email)
                history.push("/")
            }
        }

        // alert("user not found")

    }

    return (
        <form>
            <h1>Login</h1>
            <label htmlFor="email">Please enter your email</label>
            <input type="email" name="email" ref={email}/>
            <label htmlFor="password">Please enter a password</label>
            <input type="password" name="password" ref={pswd}/>
            <button onClick={(e)=>submitHandle(e)}>Login</button>
        </form>
    )
}

export default Login
