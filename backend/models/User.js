import mongoose from "mongoose";

const User = mongoose.model('User', new mongoose.Schema({
    email: {type:String,unique:true},
    password: {type:String},
    username: {type:String,unique:true},
    id: {type:String, uniqe:true}
}))

export default User