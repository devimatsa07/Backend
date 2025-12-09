
import express from 'express';
// import bodyparser from 'body-parser';

const app=express();

app.use(express.json());
// app.use(bodyParser().json());

app.get('/get-user',(req,res)=>{
    res.send("api success");
});
app.put('/edit-user',(req,res)=>{
    res.send("data updated");
});
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);//undefined 
    //logic to add data to database
    res.send("data added");
});
app.delete('/delete-user',(req,res)=>{
    res.send("data deleted");
});
app.listen(3000,()=>{
    console.log("server running on port 3000");
});