import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import User from './models/User.js';
var secret = 'secret123';
await mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.log);
var port = 4000;
var app = express();
app.use(bodyParser.json({ extended: true }));
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.post('/register', function (req, res) {
    console.log(req.body);
    var _a = req.body, email = _a.email, password = _a.password;
    var hashPassword = bcrypt.hashSync(password, 10);
    var user = new User({ password: hashPassword, email: email });
    user.save().then(function (userInfo) {
        jwt.sign({ id: userInfo._id, email: userInfo.email }, secret, function (err, token) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                res.cookie('token', token).json({ id: userInfo._id, email: userInfo.email });
            }
        });
    });
});
app.listen(port, function () {
    console.log("Example app on port ".concat(port));
});
