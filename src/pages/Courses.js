import React, {useState, useEffect }  from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';
import url from '../url';
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#453ec9',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});
const Enroll = (id) => {
    Axios.post(`${url}/api/enroll/${id}`)
    .then((response) => alert("enrolled"));
}
const UnEnroll = (id) => {
    Axios.post(`${url}/api/unenroll/${id}`)
    .then((response) => alert("unenrolled"));
}
const Delete = (id) => {
    Axios.post(`${url}/api/delete/${id}`)
    .then((response) => alert("Deleted"));
}
export default function CustomizedTables(props) {
    const classes = useStyles();
    const [courseList,setCourseList] = useState([]);
    const [courseName,setCourseName] = useState("");
    const getCource = (name) => {
        if(name !== "") {
            Axios.get(`${url}/api/getFromName/${name}`).then((data) => {
            setCourseList(data.data);
        });
        }
        else {
            Axios.get(`${url}/api/get`).then((data) => {
                setCourseList(data.data);
            });
        }
    };
    useEffect(() => {
        Axios.get(`${url}/api/get`).then((data) => {
                setCourseList(data.data);
        });
    },[])
    if(props.isLoggedIn === undefined) {
        return null;
    }
    return (
        <div>
            <div className='search'>
                <form onSubmit={(e) => {getCource(courseName);e.preventDefault();}}>
                    <input type='text' onChange={(e) => setCourseName(e.target.value)} placeholder='CourseName'/>
                </form>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>CourseName</StyledTableCell>
                            <StyledTableCell align="right">Id</StyledTableCell>
                            <StyledTableCell align="right">Vacancy</StyledTableCell>
                            <StyledTableCell align="right">Teacher</StyledTableCell>
                            <StyledTableCell align="right">Enroll / UnEnroll</StyledTableCell>
                            <StyledTableCell align="right">Delete Course</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {courseList.map((course) => (
                            <StyledTableRow key={course.id}>
                                <StyledTableCell component="th" scope="row">
                                    {course.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{course.id}</StyledTableCell>
                                <StyledTableCell align="right">{course.vacancy}</StyledTableCell>
                                <StyledTableCell align="right">{course.teacher}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <input type='button' value='+' onClick={() => {Enroll(course.id);getCource(courseName)}}/>
                                    <input type='button' value='-' onClick={() => {UnEnroll(course.id);getCource(courseName)}}/>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <input type='button' value='Delete' onClick={() => {Delete(course.id);getCource(courseName)}}/>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
