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

//06-12-2025
// import express from 'express';
// const app=express();
// app.get('/users',(req,res)=>{
//     res.send("hello this is from backend");
// })
// app.get('/getusers',(req,res)=>{
//     res.send("hello this is from backend");
// })
// app.listen(3007,()=>{
//     console.log("server running on port {3008}");
// });






//9-12-2025

// import express from 'express';
// // import bodyparser from 'body-parser';

// const app=express();

// app.use(express.json());
// // app.use(bodyParser().json());

// app.get('/get-user',(req,res)=>{
//     res.send("api success");
// });
// app.put('/edit-user',(req,res)=>{
//     res.send("data updated");
// });
// app.post('/add-user',(req,res)=>{
//     let data=req.body;
//     console.log(data);//undefined 
//     //logic to add data to database
//     res.send("data added");
// });
// app.delete('/delete-user',(req,res)=>{
//     res.send("data deleted");
// });
// app.listen(7007,()=>{
//     console.log("server running on port 3007");
// });




// import express from 'express';
// import cors from 'cors';
// import router from './routes/studentsroutes.js';
// const app=express();

// app.use(express.json());
// app.use(cors());
// app.use('/', router);

// app.listen(7007,()=>{
//     console.log("server running on port 7007");
// });



//24-12-2025

// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import studentRouter from './routes/studentsroutes.js';
// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb+srv://matsadevi07_db_user:Devi123@cluster0.txypznj.mongodb.net/").then(() => console.log("db connected"))
// .catch((error) => console.log(error));

// app.use('/', studentRouter);
// app.get('/users', (req, res) => {
//     console.log("hello this is");
//     res.send("hello this is from backend");
// })

// app.listen(7007, () => {
//     console.log("server running at port 7007")
// });




import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRouter from './routes/studentsroutes.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://matsadevi07_db_user:Devi123@cluster0.txypznj.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', studentRouter);
app.get('/users', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})

app.listen(7007, () => {
    console.log("server running at port 7007")
});