var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var cors = require('cors')
var multer=require('multer')
app.use(cors());


app.get('/getImage/:path',(req,res)=>{
    console.log(req.params.path);
    res.download('./uploads/'+req.params.path);
    //res.end("Ho Gaya")
})

var server=app.listen(5000,function(){
    console.log("Server has Started at port 5000")});
