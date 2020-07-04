const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name            : {
        fname : {type : String , required : true,lowercase : true},
        mname : {type : String , required : true,lowercase : true},
        lname : {type : String , required : true,lowercase : true}
    },
    email:{
        type: String,
        required:true
    },
    // contact : {
    //     type : Number,
    //     required : true //??
    // },
    // gender:{
    //     type: String,
    //     required: true
    // },
    // languages:{
    //     type : [String],
    //     required : true
    // },
    // skills : {
    //     type : [String],
    // },
    // education:{
    //     type: String,
    //     required: true
    // },
    // work : {
    //     type: Number,
    //     required: true
    // },
    // experience : {
    //     type : Number,
    //     required: true
    // },
    // salary : {
    //     type: Number,
    //     required : true
    // }

});

module.exports = mongoose.model('User', userSchema);

