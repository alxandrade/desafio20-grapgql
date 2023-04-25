import mongoose from "mongoose";

let schema = mongoose.Schema;

export default class User {
    static get model() {
        return "Usuarios";
      }

     static get schema() {
        return {
            first_name:{type:String,required:true},
            last_name:{type:String},
            email:{type:String, required:true,unique:true},
            password:{type:String,required:true},
            role:{type:String,default:'user'},
            avatar:{type: String, require: true},
            cart_id: String,
        };
    }
}