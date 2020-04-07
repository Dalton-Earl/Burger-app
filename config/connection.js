var mysql = require("mysql");
var username = process.env.mySQL_username;
var password = process.env.mySQL_password;


var connection; 

if(process.env.JAWSDB_URL){
  console.log("you do it?");
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  console.log("not quite!")
  connection = mysql.createConnection({
    host: 'localhost',
    user: username,
    password: password,
    database: 'burgers_db'
  })
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;