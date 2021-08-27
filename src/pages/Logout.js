import url from "../url";
import Axios from "axios";
export default function Login(props) {
    const userLogout = () => {
        Axios.post(`${url}/api/logout`,{},{withCredentials: true})
        .then((response) => {alert(response.data);window.location.replace("/");});
    }
    if(props.isLoggedIn === undefined) {
        return null;
    }
    return (
        <div style={{textAlign: 'center'}}>
            <form onSubmit={(e) => {userLogout();e.preventDefault();}}>
                <input type="submit" value="Logout" />
            </form>
        </div>
    )
}