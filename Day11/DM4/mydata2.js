const http = require("http");
const ownsql = require("mysql");

var query = "select * from emp;"

var connection = ownsql.createConnection(
    {
        host: "localhost",
        user: "Sunbeam",
        password: "123",
        database: "testdb"
    }
);

var server = http.createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    if (request.url == "/mysql") 
    {

        
        connection.query(query,(error, result) => 
        {
            
            if (error == null) 
            {

                response.setHeader("content-type", "application/json");
                var data = JSON.stringify(result);
                response.write(data);
                //connection.end();
                response.end();
            }
            else
            {
                var errdata = JSON.stringify(error);
                response.write(errdata)
                //connection.end();
                response.end();
            }
            
            
        });
        
    }
    else {
        response.write("No Idea");
        response.end();
    }
    
});



server.listen(3001, () => {
    console.log("I am Working");
});