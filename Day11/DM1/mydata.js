const http = require("http");
const server = http.createServer((request, response) => {
    console.log("It is working");

    if (request.url == "/mywork") {
        console.log("My System is Working");
        response.write("Mywork");
    } 
    else if((request.url == "/sirwork"))
    {
        console.log("No Code");
        response.write("My life be like");
        
    }
    else{
        response.write("Kahi nahi ahe itheee");
    }
    response.end();
});
server.listen(3000, () => {
    console.log("Server is started");

});