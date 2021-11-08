const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
const schema=mongoose.Schema
const Schema = new schema({
    name: String,
    rollnumber:Number,
    password:String,
    email:String
  });

  const mymodel = mongoose.model('studentdetails', Schema);
  module.exports=mymodel;


// mymodel.find()
// .then((result)=>{console.log(result)})
// .catch((err)=>{console.log(err)});
// mymodel.deleteMany({ rollnumber:2020506062 }, function (err) {
//     if(err) console.log(err);
//     console.log("Successful deletion");
//   });
