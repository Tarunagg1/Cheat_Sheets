///////////////////////// databse operation
show dbs;
use dbname;
show collections;
db.createCollection("col-name")  ///////// create collection
db.collectionname.drop();    ////////////// drop collection

/////////////////////////////////  insert data
db.collections-name.find();
db.collections-name.insertOne({name:"nokia",price:1500,rating:4.6,qty:50,sold:50})
db.collections-name.insertMany([{name:"nokia",price:1500,rating:4.6,qty:600,sold:500},{name:"nokiapart2",price:15000,rating:5.0,qty:500,sold:50} ,{name:"nokiapart3",price:15000,rating:5.0,qty:500,sold:50} ])

/////////////////////////////////////////   serching queries or Read data
db.collections-name.find();   /////////////////// it gives all data
db.collections-name.find({rating:5.0});  //////// it give acc to ratting
/////////////////////////////////////////////////////// grater then
db.collections-name.find({rating:{$gte:3.5}});   /////////////////// grater then equle op($gte)
db.collections-name.find({rating:{$gt:3.5}}); /////////////////// grater then only ($gt)
db.collections-name.find({rating:{$gt:3.5}, price:{$gte:1500}}); /////////////////// grater then with use add op(,)
db.collections-name.find({rating:{$lt:3.5}, price:{$gte:1500}}); /////////////////// lesss then operator op($lt)
db.collections-name.find({$or:[{rating: {$lt:3.5}},{price:{$gt:5000}}]}); /////////////////// grater then with use add op($or)

/////////////////////////////////////////////////////////////////////// delete data
db.collections-name.deleteOne({name:"mi"});
db.collections-name.deleteMany({name:"mi"});

/////////////////////////////////////////////////////////////////////// updating data
db.collections-name.updateOne({name:"mi"},{$set:{price:2}})   /////// passs 2 document 1 is selector and 2 is what to set
db.collections-name.updateMany({name:"mi"},{$set:{price:2}})   /////// passs 2 document 1 is selector and 2 is what to set
db.collections-name.updateMany({name:"mi"},{$set:{price:2 , rating:2}})   /////// passs 2 document 1 is selector and 2 is what to set

/////////////////////////////////////////////////////////////  equal 
db.collectionname.find(colname:{$eq:"some-conition"})/////////////// use for equal


///////////////////////////////////////////////////////////////////////////////////////// comparisan operator
db.collectionname.find({colname:{$in:["some-name"]}})
db.collectionname.find({colname:{$nin:["some-name"]}})

///////////////////////////////////////////////////////  and or operator
db.collectionname.find({$and:[ {col-name:"conditoon"},{colname:"condition"} ]})  //////// and
db.collectionname.find({$or:[ {col-name:"conditoon"},{colname:"condition"} ]}) /////////// or
db.collectionname.find({colname:{$not:{$gt:"data"}}})  ////////////// not   


/////////////////////////////////////////////////////////////////////////////////////////// projection to find some specific column
db.collections-name.aggregate([{$project:{"col-name-which-display":1,"col-name-which-display":1,"col-name-which-display":1}}]); //pass 1 or  0 at a time
db.collections-name.find({},{"name":1,"price":1}); ///// to find limited column data [it is second method witout projection]

/////////////////////////////////////////////////////////////////////////////////////// sort data in db
db.collections-name.find().sort({"col-name":-1}) /////////////// sort decending 
db.collections-name.find().sort({"col-name":1})     /////////////// sort assecending 

/////////////////////////////////////////////////////////////////////////////////////////  skip is use row
db.collections-name.find().skip(13) ////////////////////////////////////////////////// to skip number of row

/////////////////////////////////////////////////////////////////////////////////////////  limit is use row
db.collections-name.find().limit(13) ////////////////////////////////////////////////// to limit number of row

/////////////////////////////////////////////////////////////////////////////////////////////////  indexer
db.collections-name.getIndexes({"col-name":1})  //////////////////// view all index

db.collections-name.createIndex({"col-name":1})  //////////////////// create index

db.collectionname.find().count() ////////////////////////// count collection

////////////////////////////////////////////////////////////////////////////////////// dorp database
use dbname               ///////////// move inside db
db.dropDatabser()        ////////////////// drop database

////////////////////////////////////////////////////////////////////////////////////// data backup and restore
mongodump ////////////////////////////////////////////////////////////// it is use to take backup
mongorestore ////////////////////////////////////////// to restore all database














