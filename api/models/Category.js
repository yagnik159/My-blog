const mongooes = require("mongoose")

const CategorySchema=  new mongooes.Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true}
);

module.exports=mongooes.model("Category",CategorySchema);