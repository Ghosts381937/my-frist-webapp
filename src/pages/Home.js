export default function Home(props) {
    if(props.isLoggedIn === undefined) {
        return null;
    }
    return (
        <div style={{textAlign: 'center'}}>
        {
            props.isLoggedIn === true ? <h1>Hello User!</h1> : <h1>Hello Guest!</h1>
            
        }
        </div>
    );
}
