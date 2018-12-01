const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:password@localhost:5433/test'
//const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'

const pool = new Pool({
    connectionString: connectionString,
})

pool.query('SELECT * from  dbtest', (err, res) => {
    console.log(err, res)
    pool.end()
})

const client = new Client({
    connectionString: connectionString,
})
client.connect()
const query = {
    text: 'INSERT INTO dbtest(id,str) VALUES($1,$2)',
    values : [5,'f'],
}
client.query(query, (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log(res.rows[0])
    }
})




// const text = 'INSERT INTO dbtest(id, Name) VALUES($1, $2) RETURNING *'
// const values = ['3', 'brian']
//
// // callback
// client.query(text, values, (err, res) => {
//     if (err) {
//         console.log(err.stack)
//     } else {
//         console.log(res.rows[0])
//         // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
//     }
// })

client.query('SELECT * from dbtest', (err, res) => {
    console.log(err, res)
    client.end()
})
