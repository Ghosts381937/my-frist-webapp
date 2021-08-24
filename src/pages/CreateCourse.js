import {useState} from 'react';
import Axios from 'axios';
import url from '../url';
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
        <div className='cratePost' style={{textAlign: 'center'}}>
            <input type='text' onChange={(e) => {setId(e.target.value)}} placeholder='Id'/><br/>
            <input type='text' onChange={(e) => {setName(e.target.value)}} placeholder='Name'/><br/>
            <input type='text' onChange={(e) => {setVacancy(e.target.value)}} placeholder='Vacancy'/><br/>
            <input type='text' onChange={(e) => {setTeacher(e.target.value)}} placeholder='Teacher'/><br/>
            <button onClick={submitPost}>Submit</button>
        </div>
    )
}