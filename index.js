// import http from 'http';
// const server=http.createServer((req,res)=>{
//     console.log(req.method);
//     if(req.url==="/users"){
//         res.writeHead(200,{"Content-Type":"application/json"});
//         res.end(JSON.stringify({name:"aditya"}))
//     }
//     else{
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end("hello server port 3007");
//     }
// });
// server.listen(3007,()=>{
//     console.log(`server running on port ${3007}`);
// });


import express from 'express';
const app=express();
app.get('/users',(req,res)=>{
    res.send("hello this is from backend");
})
app.get('/getusers',(req,res)=>{
    res.send("hello this is from backend");
})
app.listen(3007,()=>{
    console.log("server running on port {3008}");
});