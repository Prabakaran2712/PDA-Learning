//Node Modules 
var express=require('express');
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
const app=express();
app.use(express.static("public"));
//signup page
app.get('/',(req,res)=>{
return res.redirect("index.html");
});
app.listen(3000,console.log("App listening on port 3000"));
