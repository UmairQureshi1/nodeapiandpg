var express = require('express');
var app = express();
var path = require("path");
var formidable = require('formidable');
const { Pool, Client } = require('pg')

const conString = 'postgresql://postgres:password@localhost:5433/test'

const pool = new Pool({
    connectionString: conString,
})



const client = new Client({
    connectionString: conString,
})

client.connect();
const query = {
    text: 'INSERT INTO emps(firstname,lastname) VALUES($1,$2)',
    values : ['test','test'],
}
client.query(query, (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log(res.rows[0])
    }
})
// const query = {
//     text: 'INSERT INTO emps(firstname,lastname) VALUES($1,$2)',
//     values : ['ff','ggf'],
// }
// client.query(query, (err, res) => {
//     if (err) {
//         console.log(err.stack)
//     } else {
//         console.log(res.rows[0])
//     }
// })
var formidable = require("formidable");
var form = new formidable.IncomingForm();
app.post('/login', function(req, res){
    form.parse(req, function (err, fields) {
        var firstname = fields.firstname;
        var lastname = fields.lastname;
        console.log(firstname);

        if (firstname && lastname){
            const query = {
                text: 'INSERT INTO emps(firstname,lastname) VALUES($1,$2)',
                values : ['test1','test2'],
            }
            client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Tinniam', 'Ganesh']);
             client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", [firstname, lastname]);
            res.send('Login Successfully');
        }else{
            res.send('Wrong firstname/lastname');
        }
    });
});

pool.query('SELECT * from  emps', (err, res) => {
    console.log(err, res)
    pool.end()
})

app.use(express.static(__dirname + '/front-end'));
app.set('port', (process.env.PORT || 3000)) // set port
app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})