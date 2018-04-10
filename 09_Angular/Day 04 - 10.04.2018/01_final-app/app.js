const express= require ('express');
const app=express();
app.use(express.static('./dist'));
app.listen(3500,()=>{console.log("server listening on port 3500")});