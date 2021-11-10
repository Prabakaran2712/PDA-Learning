
function check()
{
var p1=document.getElementById('ep').value;
var p2=document.getElementById('cp').value;
if(p1!=p2){
	document.getElementById('show').innerHTML="Incorrect";
return false;}
else{
	document.getElementById('show').innerHTML="Correct";}
}

function cname()
{
var na=document.getElementById("n").value;
var pt=/^[A-Za-z]+$/;

if(na==""){
document.getElementById("demo1").innerHTML="Please Enter your name";
return false;}
else{
document.getElementById("demo1").innerHTML="";}

if(na.match(pt))
true;
else{
document.getElementById("demo1").innerHTML="Invalid-Only Alphabets are allowed";
return false;}
}

function rcheck()
{
var sid=document.getElementById("uid").value;
var pt=/^[A-Za-z]+$/;
if(!sid.match(pt))
true;
else{document.getElementById("demo2").innerHTML="Only numbers are allowed";
return false;}
if(sid.length!=8){
document.getElementById("demo2").innerHTML="Roll number must be of length 8";
return false;}
else{
document.getElementById("demo2").innerHTML="";}
if(sid==""){
document.getElementById("demo2").innerHTML="Please Enter your Roll number";
return false;}
}

function rmail()
{
var e=document.getElementById("mail").value;
var p=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(e.match(p)){
document.getElementById("demo3").innerHTML="";
return true;
}
else{
document.getElementById("demo3").innerHTML="Invalid";
return false;}
}