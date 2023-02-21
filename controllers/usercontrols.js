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
    const result = await user.create({ fullname, email, password: hash });
    if (result) {
      res.status(200).json({  message: result });
    } else {
      res.status(404).json({ message: console.error() });
    }
  } else {
    res.json({ message: 'enter user details' });
    console.log('enter user details');
  }
};

const userlogin = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const result = await user.findOne({
      email: email,
    });
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
      res.json({ message: 'user not found' });
    }
  } else {
    res.json({ message: 'enter user details' });
    console.log('enter user details');
  }
};

module.exports = { registerUser, userlogin };
