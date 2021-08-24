import { useState } from "react";
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div style={{textAlign: 'center'}}>
            <form action="auth">
                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" required/><br/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}