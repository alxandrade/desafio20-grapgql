import { Schema, model } from "mongoose";

const schema = new Schema({
    first_name:{type:String,required:true},
    last_name:{String},
    email:{type:String, required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,default:'user'}
})

export const userSchema = model('usuarios', schema);
