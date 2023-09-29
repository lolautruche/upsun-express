const express = require('express')
const app = express()
const mysql = require("mysql");
var port = (process.env.PORT || '3000');

function openConnection() {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });
}

function createTable(connection) {
    return connection.query(
        `CREATE TABLE IF NOT EXISTS platforminfo (
      uid INT(10) NOT NULL AUTO_INCREMENT,
      username VARCHAR(64) NULL DEFAULT NULL,
      departname VARCHAR(128) NULL DEFAULT NULL,
      created DATE NULL DEFAULT NULL,
      PRIMARY KEY (uid)
    ) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`,
    function (err, result) {
        if (err) throw err;
        console.log("table created");
    });
}

function insertData(connection) {
    return connection.query(
        "INSERT INTO platforminfo (username, departname, created) VALUES ('platform', 'Deploy Friday', '2023-09-29')"
        , function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
}

function readData(connection) {
    return connection.query("SELECT * FROM platforminfo", function (err, result, fields) {
        if (err) throw err;
        var string=JSON.stringify(result);
        console.log(string);
        var json =  JSON.parse(string);
        // to get one value here is the option
        console.log(json[0].username);
        return json[0]
    });
}

function dropTable(connection) {
    return connection.query("DROP TABLE platforminfo");
}

// Define the main route.
app.get('/', async function(req, res){

    // Connect to MariaDB.
    const connection = await openConnection();
    await createTable(connection);
    await insertData(connection);

    const rows = await readData(connection);

    console.log(rows)
    // console.log(rows[0].username)

    const droppedResult = await dropTable(connection);

    // Make the output.
    const outputString = `Hello, World! - A simple Express web framework template for Platform.sh

MariaDB Tests:

* Connect and add row:
  - Row ID (1): ${rows.username}
  `;

    connection.end();
    res.set('Content-Type', 'text/plain');
    res.send(outputString);

});

// Get PORT and start the server
app.listen(port, function() {
    console.log(`Listening on port ${port}`)
});
