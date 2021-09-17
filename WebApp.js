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
});

var deleterows = "DELETE FROM Example"
con.query(deleterows, function (err, rows) {
    if (err) throw err;
    console.log("Rows Deleted");
});

var entry1 = "INSERT INTO Example (firstName, lastName) VALUES ('Software', 'Dev')";
con.query(entry1, function (err, rows) {
    if (err) throw err;
    console.log("1 record inserted");
});

var entry2 = "INSERT INTO Example (firstName, lastName) VALUES ('Tony', 'Stark')";
con.query(entry2, function (err, rows) {
    if (err) throw err;
    console.log("1 record inserted");
});

var sql = "UPDATE Example SET firstName = 'Iron', lastName = 'Man' WHERE firstName = 'Tony'";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record updated");
});

con.query('SELECT * FROM Example', (err, rows) => {
    if(err) throw err;
        rows.forEach((row) => {
            printRow = (`First Name: ${row.firstName}  Last Name: ${row.lastName}`)
            table.push(printRow)
        })
    })


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