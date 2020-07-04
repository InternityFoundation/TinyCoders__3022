const   express         = require('express'),
        mongoose        = require('mongoose'),
        fs              = require('fs'),
        path            = require('path'),
        session         = require('express-session'),
        Admin           = require('../models/admin'),
        User            = require('../models/users');



//User login authentication
function user_login_Authentication(req,res){
    User.findOne({userName : req.body.username,password : req.body.password},(err,found)=>{
        if(err){
            res.end(err);
        }
        else if(found==null){
            res.render('login',{err:1});
        }
        else{
            let sess = req.session;
            sess.name = req.body.username;
            sess.password = req.body.password;
            console.log(req.session);
            //alert('Login Succesful !');
            res.redirect('/index');            
        }
    });
}

//Admin login authentication
function admin_login_authentication(req,res){
    Admin.findOne({userName : req.body.username,password : req.body.password},(err,found)=>{
        console.log(req.body);
        if(err){
            res.end(err);
        }
        else if(found==null){
            res.render('adminlogin',{err:1});
        }
        else{
            let sess = req.session;
            sess.name = req.body.username;
            sess.password = req.body.password;
            sess.admin=1;
            console.log(req.session);
            //alert('Login Succesful !');
            res.redirect('/index');            
        }
        
    });
}

//New User Registeration
function user_registeration(req,res){
    const languages = req.body.languages.split(','),
          skills = req.body.Skills.split(',')  ;
    const new_user = new User({
        name : {
            fname : req.body.firstName,
            mname : req.body.middleName,
            lname : req.body.lastName
        },
        email : req.body.email,
        // contact : req.body.contact,
        // gender : req.body.gender,
        // languages : languages,
        // skills : skills,
        // education : req.body.education,
        // work : req.body.work,
        // salary : req.body.salary
    });
    console.log(new_user)
    new_user.save((err)=>{
        if(err)
            res.end(err);
        res.redirect('/login');
    });
}



module.exports = {  
                    user_login_Authentication,
                    admin_login_authentication,
                    user_registeration
                };