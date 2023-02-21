const user = require('../model/user');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const secret = process.env.SECRET;

const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;

  if (fullname && email && password) {
    const hash = bcrypt.hashSync(password, saltRounds);
    user
      .create({ fullname, email, password: hash })
      .then((result) => {
        res.status(200).json(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log('enter user details');
  }
};

const userlogin = async (req, res) => {
  const { fullname, email, password } = req.body;
  if (fullname && email && password) {
    user
      .findOne({
        email: email,
      })
      .then((result) => {
        if (result) {
          console.log(result);
          const valid = bcrypt.compare(password, result.password);
          if (valid) {
            const token = jwt.sign({ result }, secret);
            res.status(200).json({ message: token });
            //console.log(result)
          } else {
            res.json({ message: 'incorrect password' });
            console.log('incorrect password');
          }
        } else {
          res.status(404).json({ message: 'user not found' });
        }
      });
  } else {
    console.log('no user details');
  }
};

module.exports = { registerUser, userlogin };
