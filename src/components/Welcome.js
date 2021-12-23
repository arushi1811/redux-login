import { useSelector } from "react-redux"

const Welcome = () => {

    const loggedIn = useSelector((store) => store.logged)
    return (
        <div>
            <h1>Welcome {Object.keys(loggedIn).length===0?"!":loggedIn.name}</h1>
        </div>
    )
}

export default Welcome
