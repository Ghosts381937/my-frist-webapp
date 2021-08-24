const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM courses", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    });
});

// Route to get one post
app.get("/api/getFromName/:name", (req, res) => {

    const name = req.params.name;
    db.query("SELECT * FROM courses WHERE name = ?", name,
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        });
});

// Route for creating the post
app.post('/api/create', (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const teacher = req.body.teacher;
    const vacancy = req.body.vacancy;

    db.query("INSERT INTO courses (id, name, vacancy, teacher) VALUES (?,?,?,?)", [id, name, vacancy, teacher], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result);
        res.send("succes");
    });
})

// Route to like a post
app.post('/api/enroll/:id', (req, res) => {

    const id = req.params.id;
    db.query("UPDATE courses SET vacancy = vacancy - 1 WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
        res.send("enrolled");
    });
});

app.post('/api/unenroll/:id', (req, res) => {

    const id = req.params.id;
    db.query("UPDATE courses SET vacancy = vacancy + 1 WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
        res.send("unenrolled");
    });
});

// Route to delete a post

app.post('/api/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM courses WHERE id= ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send("deleted");
    })
})

app.listen(PORT, () => {
    if(db.connect((err) => {err ? console.log('fail') : console.log('succes')}));
    console.log(`Server is running on ${PORT}`)
})