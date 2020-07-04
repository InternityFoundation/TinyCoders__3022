const   express         = require('express'),
        mongoose        = require('mongoose'),
        session         = require('express-session'),
        router          = express.Router(),
        routerQuiz      = express.Router();
        path            = require('path'),
        controller      = require('../controllers/controller'),
        Admin           = require('../models/admin'),
        User            = require('../models/users');
        

//session used to store logged in users
router.use(session({
    secret : 'secretLOL',
    resave : true,
    saveUninitialized : false
}));

//main Library page 
router.get("/",(req,res)=>{
    res.render("landing.ejs");
});


router.post('/logout',(req,res)=>{
    req.session.destroy();
    console.log(req.session);
    res.redirect('/');
});

//********************************************** USER LOGIN **********************************************

//Renders the User Login Page 
router.get('/login',(req,res)=>{
    res.render('login.ejs');
});

//user login authentication
router.post('/login',controller.user_login_Authentication);


//********************************************** ADMIN LOGIN **********************************************

//Renders the Admin Login page
router.get('/adminlogin',(req,res)=>{
    res.render('adminlogin.ejs');
});

//admin login authentication 
router.post('/adminlogin',controller.admin_login_authentication);


//********************************************** USER REGISTERATION **********************************************

//Renders the Registeration page
router.get('/register',(req,res)=>{
    res.render('register.ejs');
});

//Registers a new user into the database
router.post('/register',controller.user_registeration);



//********************************************** ADMIN PAGE **********************************************

//Middleware to verify if Admin is Logged in
router.use("/admin",(req,res,next)=>{
    console.log(req.session);
    if(!(req.session!=undefined && req.session.admin==1)){
        res.send("Error! Make sure you are logged in.");
    }
    else{
        next();
    }
});

//Renders the admin page if the user is an Admin and logged in
router.get("/admin",(req,res)=>{
    res.render('admin');
})

//*********************************quiz**********************************************************/
//app.use('/quiz',quizRoutes);

router.get('/quiz', questionController.getQuestions);

// Quiz API Routes (/quiz/add)
router.post('/quiz/add', questionController.addQuestions);

// Quiz API Routes (/quiz/next)
router.post('/quiz/next', questionController.nextQuestion);


module.exports = router;