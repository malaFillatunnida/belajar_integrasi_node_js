const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "coba_db_express",
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("koneksi berhasil !!");
  }
});

module.exports = connection;
