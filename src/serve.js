var mysql = require('mysql');
 
var c = mysql.createConnection({
  database: 'donjondragon',
  host: "localhost",
  user: "root",
  password: ""
});

c.on('error', function(err) {
    console.log(err.code); // example : 'ER_BAD_DB_ERROR'
});
  
exports.connection = function() {
    return c;
};