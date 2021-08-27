import Tables from './Table';
import '../App.css';
function MainPage(props) {
    if(props.isLoggedIn === undefined) {
        return null;
    }
    return (
        <Tables />
    )
}
export default MainPage;