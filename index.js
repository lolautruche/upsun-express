const express = require('express')
const app = express()
const mysql = require('mysql')
var port = (process.env.PORT || '3000');

// function openConnection() {
//     // var credentials = JSON.stringify(process.env.RELATIONSHIPS_JSON)
//     //
//     // console.log(credentials)
//     //
//     // return mysql.createConnection({
//     //     host: credentials['host'],
//     //     port: credentials['port'],
//     //     user: credentials['username'],
//     //     password: credentials['password'],
//     //     database: credentials['path']
//     // });
// }
//
// function createTable(connection) {
//     return connection.execute(
//         `CREATE TABLE IF NOT EXISTS platforminfo (
//       uid INT(10) NOT NULL AUTO_INCREMENT,
//       username VARCHAR(64) NULL DEFAULT NULL,
//       departname VARCHAR(128) NULL DEFAULT NULL,
//       created DATE NULL DEFAULT NULL,
//       PRIMARY KEY (uid)
//     ) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`
//     );
// }
//
// function insertData(connection) {
//     return connection.execute(
//         "INSERT INTO platforminfo (username, departname, created) VALUES ('platform', 'Deploy Friday', '2019-06-17')"
//     );
// }
//
// function readData(connection) {
//     return connection.query("SELECT * FROM platforminfo");
// }
//
// function dropTable(connection) {
//     return connection.execute("DROP TABLE platforminfo");
// }

// Define the main route.
app.get('/', (req, res) => {




        // var obj = JSON.parse(process.env.RELATIONSHIPS_JSON);
        // var res = [];
        //
        // for(var i in obj)
        //     res.push(obj[i]);
        //
        // res.push("Array of values - ["
        //     + res + "]");
        //










//     // Connect to MariaDB.
//     const connection = await openConnection();
//
//     await createTable(connection);
//     await insertData(connection);
//
//     const [rows] = await readData(connection);
//
//     const droppedResult = await dropTable(connection);
//
//     // Make the output.
    var credentials = JSON.parse(process.env.RELATIONSHIPS_JSON)
    var database =credentials.mariadb;

    const outputString = `Hello, World! - A simple Express web framework template for Platform.sh

MariaDB Tests: ${process.env.RELATIONSHIPS_JSON}

` + JSON.parse(process.env.RELATIONSHIPS_JSON) + ' ' + credentials + `
         host:` + database['host'];

    res.set('Content-Type', 'text/plain');
    res.send(outputString);

});

// Get PORT and start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
