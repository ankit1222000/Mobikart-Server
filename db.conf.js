const mysql=require("mysql");

const conn=mysql.createConnection({
host:'localhost',
user:'Mobikart',
password:'Mobikart@1234',
database:'mobikartdb'


});

module.exports=conn;