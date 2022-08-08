const mongooes = require("mongoose")

const PostSchema=  new mongooes.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:true
    },
    categories:{
        type:Array, 
        required:false
    }
},{timestamps:true}
);

module.exports=mongooes.model("Post",PostSchema);