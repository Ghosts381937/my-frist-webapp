import { useState } from "react";
import url from "../url";
import Axios from "axios";
export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const userLogin = () => {
        Axios.post(`${url}/api/login`,{username: username,password: password},{withCredentials: true})
        .then((response) => {alert(response.data);response.data === "Correct!" ? window.location.replace("/") : window.location.reload()});
    }
    if(props.isLoggedIn === undefined) {
        return null;
    }
    return (
        <div style={{textAlign: 'center'}}>
            <form onSubmit={(e) => {userLogin();e.preventDefault();}}>
                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" required/><br/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}