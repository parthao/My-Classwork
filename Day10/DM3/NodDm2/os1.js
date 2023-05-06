const myos=require('os');
 var speed=new myos.cpus();
 var host = new myos.hostname();
console.log(speed[0].times.sys);
console.log(host);