const express = require ('express');
const app = express ();
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://sudsarkar13:bP8ctucxDgPKVQLk@cluster0.wysx6kz.mongodb.net/testDB")

// Create a data schema
const testSchema = {
    title: String,
    content: String
}

app.get('/', function(req, res){
    res.send("express server is up and running");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});