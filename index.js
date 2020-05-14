const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose'),
      Book          = require('./models/book'),
      User          = require('./models/user')
      routes        = require('./routes/routes'),
      BorrowLog     = require("./models/borrow_log"),
      BorrowRequest = require("./models/borrow_request");


mongoose.connect("mongodb://localhost:27017/Library",{ useUnifiedTopology: true , useNewUrlParser: true },(err)=>{
    if(err){
        console.log("Error connecting to database");
    }
    else console.log("Database connected !");
});
var seedData    = require("./seed");

//seedData();
app.use(bodyParser.urlencoded({extended : false}));
//app.use('/index',(req,res,next)=>{console.log(Date(Date.now()).toString());next();})
app.set('view engine', 'ejs');
app.use(routes);

app.listen(1234,()=>{
    console.log("Server running...");
});