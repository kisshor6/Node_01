const express = require('express');
const app = express();
const connection = require('./_DB');
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {

    connection.query(`SELECT * FROM thread`, (err, result) => {
        res.send(result);
    })
})

app.post("/add", (req, res) => {
    const data = req.body;
    connection.query('INSERT INTO thread SET ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result)
    })
})


app.put("/update/:id", (req, res) => {
    const data = [req.body.title, req.body.desc, req.params.id];
    connection.query('UPDATE thread SET thread_title=?, thread_desc=? WHERE thread_id=?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result)
    })
})

app.delete("/rem/:id", (req, res) => {
    const data = [req.params.id];
    connection.query('DELETE FROM thread WHERE  thread_id=?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result)
    })
})

app.listen(port, () => {
    console.log(`Listening on port no ${port}`);
})