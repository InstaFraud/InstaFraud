require('dotenv').config()
const express = require("express");
const router = express.Router();
const crypto = require('crypto'); 
const bcrypt = require('bcrypt'); 
const cors = require('cors');
const cookieParser = require("cookie-parser"); 
const { User, People } = require("../models");
const SALT_COUNT = 10; 


const jwt = require('jsonwebtoken');

// user registration 
router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body
    const bcrypassword = await bcrypt.hash(password, SALT_COUNT)
    const newUser = await User.create({ email: email, password: bcrypassword });
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET) // generates a token
    res.json(newUser);
  } catch (error) {
    next(error);
  }
});


// Get for signin
router.get("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body
    const existingUser = await User.findOne({ where: { email } }); //email:'email', password: hashed string
    const isAMatch = await bcrypt.compare(password, existingUser.password) // returns a boolean
    if (isAMatch) {
      next(email);
    } else {
      res.sendStatus(401).send('USER DOES NOT EXIST')
    }
  } catch (error) {
    console.error(error);
    next(error)
  }
})


module.exports = router;