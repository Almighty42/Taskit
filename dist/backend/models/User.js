import mongoose from "mongoose";
var User = mongoose.model('User', new mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String },
}));
export default User;
