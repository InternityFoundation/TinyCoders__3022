const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose'),
      User          = require('./models/users')
      routes        = require('./routes/routes'),



mongoose.connect("mongodb://localhost:27017/Job-portal",{ useUnifiedTopology: true , useNewUrlParser: true },(err)=>{
    if(err){
        console.log("Error connecting to database");
    }
    else console.log("Database connected !");
});
//var seedData    = require("./seed");

//seedData();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : false}));
app.set('view engine', 'ejs');
app.use(routes);


app.listen(1234,()=>{
    console.log("Server running on port 1234");
});