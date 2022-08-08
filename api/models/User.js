const mongooes = require("mongoose")

const UserSchema=  new mongooes.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    profilepic:{
        type:String,
        default:""
    },
},{timestamps:true}
);

module.exports=mongooes.model("User",UserSchema);