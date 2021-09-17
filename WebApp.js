const http = require('http')
const port = 4000
const table = [];

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "amank3112",
    database: "Sprint 0 - Spike 2"
});



con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('SELECT * FROM Example', (err, rows) => {
        if(err) throw err;
            rows.forEach((row) => {
            printRow = (`First Name: ${row.firstName}  Last Name: ${row.lastName}`)
            table.push(printRow)

        })
    })
});


const server = http.createServer(function (req, res) {
    res.write("Hello World")
    table.forEach((row)=> {
        res.write("\n" + row)
    })
    res.end()
})



server.listen(port, function (error) {
    if (error) {
        console.log("Something went wrong", error)
    } else {
        console.log("Server is working! " + port)
    }
})