import React from "react";
import './Navbar.css';
export default function Navbar() {
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
        </div>
    );
}



