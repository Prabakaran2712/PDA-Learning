//Node Modules 
const express=require('express');
const model=require('./connection')
const fs=require('fs');
const dotenv=require("dotenv");
const bcrypt=require("bcrypt");
//For password hashing 
var flag=0;
//app creation
const app=express();
app.use(express.urlencoded({extended:true}));
//set viewengine
app.set('view-engine','ejs');
//static files
app.use(express.static("public"));
app.use(express.static("assets"));

//signup page
app.get('/',(req,res)=>{
 res.render("index.ejs",{error:"prope"});
});
//getting values from form and uploading it in db
app.post('/',async (req,res)=>{
  var flag=0;
  var error =new Array();
  var name1=req.body['name'];
  var rollnumber=req.body['id'];
  var password=req.body['pass'];
  var cpassword=req.body['cpass'];
  var email=req.body['email'];
  const salt=await bcrypt.genSalt();
  var count=0;
  const hashedpassword=await bcrypt.hash(password,salt);
  model.find({rollnumber:rollnumber}).count(function(err,val){
    if(err) console.log(err);
    console.log(val);
    
    if(val && !(password=="" || cpassword=="" || rollnumber==""|| email=="" || name1=="")){
      
      error.push("User already exits");
      flag=1;
      console.log(error);
      
      
    }
    if(rollnumber.length!=8){
      error.push("Enter a valid rollnumber");
      flag=1;
    }
    var pt=/^[A-Za-z]+$/;
    if((!(name1.match(pt)))&&(name1.length!=0)){
      error.push("Enter a valid Name ");
      flag=1;
    }
    if(cpassword!=password){
      error.push("Passwords donot match");
      flag=1;
    }
    if(password=="" || cpassword=="" || rollnumber==""|| email=="" || name1==""){
      error.push("All details needs to be filed");
      flag=1;
    }
    console.log(error);
    if(flag==1){
      var art=Array('ball','bat');
      console.log(error.indexOf('hey man'));
      console.log(error);
      res.render("index.ejs",{array:error});
    } 
    else{
      console.log("hi");
      var art=Array('ball','bat');
      const model1=new model({name: String(name1),
      rollnumber:rollnumber,
      password:hashedpassword,
      email:String(email)})
      model1.save();
      res.render("success.ejs",{array:art});
    }
  });

});

app.listen(3000,console.log("App listening on port 3000"));
;