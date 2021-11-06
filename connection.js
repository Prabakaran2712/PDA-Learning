const mongoClient = require('mongodb').MongoClient;
url="mongodb://localhost:27017/pdaweb";
mongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Sorry unable to connect to MongoDB Error:', err);
    } else {
        console.log("Connected successfully to server", url);
        var collection = db.collection('studentdetails');
  
        console.log("Print persons collection:- ");
  
        collection.find({}).toArray(function(err, person) {
            console.log(JSON.stringify(person, null, 2));
        });
  
        db.close();
    }
});