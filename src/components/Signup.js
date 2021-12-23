import { useSelector, useDispatch } from "react-redux"
import { useRef } from "react"
import { bindActionCreators } from "redux"
import {actions} from "../state"
import { useHistory } from "react-router"

const Signup = () => {
    const history = useHistory()
    const users = useSelector((store)=>store.add)
    const dispatch = useDispatch()

    const {add} = bindActionCreators(actions , dispatch)

    const name = useRef("")
    const email = useRef("")
    const pswd = useRef("")

    const handleSubmit = (e) => {
        e.preventDefault()
        for (const item of users) {
            if (item.email===email.current.value) {
                alert("Email already in use. Please login.")
                return
            }
        }
        add(name.current.value, email.current.value, pswd.current.value)
        history.push("/login")
        alert("Successfully signed up!")
    }

    return (
        <form>
            <h1>Sign Up</h1>
            <label htmlFor="name">Please enter your name</label>
            <input type="text" name="name" ref={name} />
            <label htmlFor="email">Please enter your email</label>
            <input type="email" name="email" ref={email} />
            <label htmlFor="password">Please enter a password</label>
            <input type="password" name="password" ref={pswd} />
            <button onClick={(e)=> handleSubmit(e)}>Submit</button>
        </form>
    )
}

export default Signup
