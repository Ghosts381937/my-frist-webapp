import React from "react";
import './Navbar.css';
export default function Navbar(props) {
    if(props.isLoggedIn === undefined) {
        return null;
    }
    return (
        <div className='Navbar'>
            <a href="/">
                Home
            </a>
            <a href="/course">
                Course
            </a>
            <a href="/createcourse">
                CreateCourse
            </a>
            <a href="/login">
                {props.isLoggedIn === true ? 'Logout' : 'Login'}
            </a>
        </div>
    );
}



