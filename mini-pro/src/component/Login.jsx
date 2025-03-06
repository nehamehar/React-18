import React,{useState, useContext} from "react";
import userContext from "../assets/context/UserContext";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(userContext) // ON USERCONTEXT  we pass props through which we use here and get data if we want tonadd something to we use setUser instead of User

    const handleSubmit = (e) => {
        e.preventDefault()     //we use prevvent default as when you submit by default value goes through url anywhere so it prevent from that if we use prevent default
        setUser({username, password})  //passing username, pass in setUser
    }
    return(
        <div>
            <h1>Login</h1>
            <input type= "text" 
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}></input>
            <input type= "text" 
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>  
        </div>
    )
}
export default Login