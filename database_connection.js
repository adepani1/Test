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
    con.query("SELECT * FROM Example", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

