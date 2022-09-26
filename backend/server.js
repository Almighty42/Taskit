import express from 'express'

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import cors from 'cors'
import jwt from 'jsonwebtoken'

import User from './models/User.js';
import Todo from "./models/Todo.js";

import path from 'path'
import { config } from 'dotenv'

config({ path: path.resolve('../URL.env') })

await mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.log);

const port = 4000
const app = express();
app.use(bodyParser.json({ extended: true }))
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}))

app.get('/', (req, res) => {
  res.send('Hello world')
})

//TODO Vrati:
//TODO cors:origin: https://taskit-bf0af.web.app
//TODO Zameni http://localhost:4000 sa https://taskit-dev.herokuapp.com/
//TODO Zameni "secret123" sa 



app.post('/userCheck', (req, res) => {
  if (!req.body.id) {
    return res.json({});
  }
  const payload = jwt.verify(req.body.id, "secret123");
  User.findById(payload.id)
    .then(userInfo => {
      if (!userInfo) {
        return res.json({});
      }
      res.json({ id: userInfo._id, email: userInfo.email, username: userInfo.username, id2: userInfo.id });
    });
})

app.post('/userGet', (req, res) => {
  if (!req.body.userToken) {
    return res.json({});
  }

  const payload = jwt.verify(req.body.userToken, "secret123");
  User.findById(payload.id)
    .then(userInfo => {
      if (!userInfo) {
        return res.json({});
      }
      res.json({ id: userInfo._id, email: userInfo.email, username: userInfo.username, id2: userInfo.id });
    });

});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Check if username already exists
  User.findOne({ username: username })
    .then(userInfo => {
      if (userInfo === null) {
        // Check if email already exists
        User.findOne({ email: email })
          .then(userInfo => {
            if (userInfo === null) {
              const id = JSON.stringify(Math.floor(Math.random() * 10000) + 1)
              const hashPassword = bcrypt.hashSync(password, 10);
              const user = new User({ password: hashPassword, email: email, username: username, id: id });
              user.save().then((userInfo) => {
                jwt.sign({ id: userInfo._id, email: userInfo.email, username: userInfo.username, id2: userInfo.id }, "secret123", (err, token) => {
                  if (err) {
                    console.log(err)
                    res.sendStatus(500);
                  } else {
                    res.cookie('token', token).json({ id: userInfo._id, email: userInfo.email, username: userInfo.username, id2: userInfo.id, status: true, userToken: token });
                  }
                })
              })
            } else {
              res.json({ status: false, val: 'email' })
            }
          })

      } else {
        res.json({ status: false, val: 'username' })
      }
    })
})

app.post('/login', (req, res) => {
  const { password, username } = req.body;
  User.findOne({ username })
    .then(userInfo => {
      if (!userInfo) {
        return res.json(false);
      }
      const passOk = bcrypt.compareSync(password, userInfo.password);
      if (passOk) {
        jwt.sign({ id: userInfo._id, username }, "secret123", (err, token) => {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          } else {
            res.cookie('token', token).json({ id: userInfo._id, username: userInfo.username, userToken: token });
          }
        });
      } else {
        res.sendStatus(401);
      }
    })
});

app.post('/changeUserDetails', (req, res) => {
  const payload = jwt.verify(req.body.userToken, "secret123");
  if (req.body.option == 'username') {
    User.findOne({ username: req.body.usernameVal })
      .then(userInfo => {
        if (userInfo === null) {
          User.updateOne({
            id: req.body.Id,
            user: new mongoose.Types.ObjectId(payload.id)
          }, {
            username: req.body.usernameVal
          }).then(() => {
            res.json();
          })
        } else {
          res.json(false)
        }
      })
  } else if (req.body.option == 'email') {
    User.findOne({ email: req.body.emailVal })
      .then(userInfo => {
        if (userInfo === null) {
          User.updateOne({
            id: req.body.Id,
            user: new mongoose.Types.ObjectId(payload.id)
          }, {
            email: req.body.emailVal
          }).then(() => {
            res.json();
          })
        } else {
          res.json(false)
        }
      })
  } else if (req.body.option == 'password') {
    const hashPassword = bcrypt.hashSync(req.body.passwordVal, 10);
    User.updateOne({
      id: req.body.Id,
      user: new mongoose.Types.ObjectId(payload.id)
    }, {
      password: hashPassword
    }).then(() => {
      res.json();
    })
  }
})

app.post('/logout', (req, res) => {
  res.cookie('token', '').send();
});

app.put('/todos', (req, res) => {
  const payload = jwt.verify(req.body.userToken, "secret123");
  const todo = new Todo({
    title: req.body.title,
    disc: req.body.disc,
    color: req.body.color,
    border: req.body.border,
    id: req.body.id,
    menu: req.body.menu,
    check: req.body.check,
    user: new mongoose.Types.ObjectId(payload.id),
  });
  todo.save().then(todo => {
    res.json(todo);
  })
});

app.post('/todosGet', (req, res) => {
  if (req.body.userToken == '') {
    res.json(false)
  } else {
    const payload = jwt.verify(req.body.userToken, "secret123");
    Todo.where({ user: new mongoose.Types.ObjectId(payload.id) })
      .find((err, todos) => {
        res.json(todos);
      })
  }
});

app.post('/todos', (req, res) => {
  const payload = jwt.verify(req.body.userToken, "secret123");
  Todo.updateOne({
    _id: new mongoose.Types.ObjectId(req.body.id),
    user: new mongoose.Types.ObjectId(payload.id)
  }, {
    done: req.body.done,
  }).then(() => {
    res.sendStatus(200);
  });
});

app.post('/todosDel', (req, res) => {
  const payload = jwt.verify(req.body.userToken, "secret123");
  Todo.deleteOne({
    id: req.body.id,
    user: new mongoose.Types.ObjectId(payload.id)
  }).then(() => {
    res.sendStatus(200)
  })
})

app.post('/todosDisc', (req, res) => {
  const payload = jwt.verify(req.body.userToken, "secret123");
  Todo.updateOne({
    id: req.body.id,
    user: new mongoose.Types.ObjectId(payload.id)
  }, {
    disc: req.body.disc
  }).then(() => {
    res.json()
  })
})

app.post('/todosCheck', (req, res) => {
  const payload = jwt.verify(req.body.userToken, "secret123");
  Todo.updateOne({
    id: req.body.id,
    user: new mongoose.Types.ObjectId(payload.id)
  }, {
    check: req.body.check
  }).then(() => {
    res.json()
  })
})

app.listen(process.env.PORT || port, () => {
});