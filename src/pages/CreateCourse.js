import {useState} from 'react';
import Axios from 'axios';
import url from '../url';
//import './CreateCourse.css';
export default function CreateCourse() {
    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [vacancy,setVacancy] = useState(0);
    const [teacher,setTeacher] = useState("");
    const submitPost = () => {
        Axios.post(`${url}/api/create`,{id: parseInt(id), name: name, vacancy: parseInt(vacancy), teacher: teacher})
        .then((response) => alert("Succes!"));
    };
    return (
        <div className='cratePost'>
            <label>id</label>
            <input type='text' onChange={(e) => {setId(e.target.value)}}/>
            <label>name</label>
            <input type='text' onChange={(e) => {setName(e.target.value)}}/>
            <label>vacancy</label>
            <input type='text' onChange={(e) => {setVacancy(e.target.value)}}/>
            <label>teacher</label>
            <input type='text' onChange={(e) => {setTeacher(e.target.value)}}/>
            <button onClick={submitPost}>Submit</button>
        </div>
    )
}