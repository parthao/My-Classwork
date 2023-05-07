const ownsql = require("mysql"); 
var query = "select * from emp;"

var connection = ownsql.createConnection(
    {
        host:"localhost",
        user:"Sunbeam",
        password:"123",
        database:"testdb"
    }
);
connection.query(query,(error,result)=>
{
    if(error==null)
    {
        var data = JSON.stringify(result);
        console.log(data);
    }
    else{

    }
    connection.end();
});