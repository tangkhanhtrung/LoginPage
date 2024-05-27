const express = require('express');
const db = require('./database');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
db.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    })
    // Login 
    app.post('/login', (req, res) => {
        // gọi username và password
        const sql = 'SELECT * FROM users WHERE username = ? AND password = ?'
        db.query(sql, [req.body.username, req.body.password], (err, data) => {
            console.log(req.body.username, req.body.password);
            if (err) return res.json({ error: "Login Failed" });
            if (data.length > 0) {
                return res.json("Login Successfully")
            } else {
                return res.json("No Record");
            }
        })
    });

// Định nghĩa route GET /users
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.listen(8081, () => {
    console.log("listening");

})