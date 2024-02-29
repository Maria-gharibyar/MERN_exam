const express=require('express');
const cors=require('cors');
const app=express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


require('./config/project.config')
require('./route/project.model')(app)

app.listen(8000,()=>{
    console.log("The port is 8000")
})