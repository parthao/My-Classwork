const myhttp = require("http");
const myserver = myhttp.createServer((request,response)=>{

    response.setHeader("Access-Control-Allow-Origin","*")
    
    if(request.url=="/showhtml")
    {
        var sit = `<h1>I am Demon</h1>`;
        response.setHeader("content-type","text/html")
        response.write(sit);
    }
    else if(request.url=="/json")
    {

        //var jsonx = ()

        response.setHeader("content-type","application/json");
        response.write(`[
            {"No":1,"Name":"Parthao"},
            {"No":2,"Name":"Drago"},
            {"No":3,"Name":"Swpanil"},
            {"No":4,"Name":"Akshya"},
            {"No":5,"Name":"Avinash"}]`);
    }
    else{
        response.write("No Data");
    }
    response.end();
});
myserver.listen(3400,()=>{
    console.log("I am working");
});