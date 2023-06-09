
// Requiring express in our server
const express =  require('express');
const app = express();
  const cors=require('cors');
// Defining get request at '/' route
app.get('/', function(req, res) {
  res.json({
    number: 1
  });
});
  
// Defining get request at '/multiple' route
app.get('/multiple', cors() ,function(req, res) {
  res.json({
    number: 1,
    name: 'John',
    gender: 'male'
  });
});
  
// Defining get request at '/array' route
app.get('/array', function(req, res) {
  res.json([{
      number: 1,
      name: 'John',
      gender: 'male'
    },
    {
      number: 2,
      name: 'Ashley',
      gender: 'female'
    }
  ]);
});
  
// Setting the server to listen at port 3000
app.listen(3000, function(req, res) {
  console.log("Server is running at port 3000");
});