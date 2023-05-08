var express = require("express");
var mysql = require("mysql");

var app=express();

app.use(express.json());


app.get("/emp",(req,res)=>
{
    var connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"123",
        database:"node"

    });

    connection.query("select * from EMP;",(err,result)=>
    {
        if(err==null)
        {
            var data = JSON.stringify(result)
            
            res.send(data);
            connection.end();
        }
        else{

        }
    });
});

app.post("/emp",(req,res)=>
{
    console.log(req.body);
    var connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"123",
        database:"node"

    });

    var inRecord = `insert into EMP values(${req.body.No},'${req.body.Name}','${req.body.City}')`;
    
    connection.query(inRecord,(err,result)=>
    {
        if(err==null)
        {
            res.setHeader("Content-Type","application/json");
            
            var data = JSON.stringify(result)
            console.log(data);
            res.send(data);
            connection.end();
        }
        else{
            res.setHeader("Content-Type","application/json");
            console.log(data);
            var err = JSON.stringify(err);
            res.send(err);
            connection.end();
        }
    });
});

app.put("/emp/:No",(req,res)=>
{
    console.log(req.body);
    var connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"123",
        database:"node"

    });

    var updateRecord =`update EMP set Name = '${req.body.Name}',City = '${req.body.City}' where No = ${req.params.No}`;

    connection.query(updateRecord,(err,result)=>
    {
        if(err==null)
        {
            res.setHeader("Content-Type","application/json");
            
            var data = JSON.stringify(result)
            console.log(data);
            res.send(data);
            connection.end();
        }
        else{
            res.setHeader("Content-Type","application/json");
            console.log(data);
            var err = JSON.stringify(err);
            res.send(err);
            connection.end();
        }
    });
});


app.delete("/emp/:No",(req,res)=>
{
    console.log(req.body);
    var connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"123",
        database:"node"

    });

    var delectRecord =`delete from EMP where No = ${req.params.No}`;

    connection.query(delectRecord,(err,result)=>
    {
        if(err==null)
        {
            res.setHeader("Content-Type","application/json");
            
            var data = JSON.stringify(result)
            console.log(data);
            res.send(data);
            connection.end();
        }
        else{
            res.setHeader("Content-Type","application/json");
            console.log(data);
            var err = JSON.stringify(err);
            res.send(err);
            connection.end();
        }
    });
});

app.listen(3000,()=>{console.log("Server is Working")});