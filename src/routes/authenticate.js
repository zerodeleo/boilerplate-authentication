const { Router } = require('express');
const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const router = new Router();

const initialState = {
  uid: '',
  username: '',
  bio: '',
  image: '',
};

router.route(`/signin/`).post(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    return res.json({ ...user, uid: user.uid, username, image: user.image, bio: user.bio });
  }

  const err = new Error('Wrong username or password');
  return res.status(401).json(err.message);
});

router.route(`/signup/`).post(async (req, res) => {
  try {
    const username = req.body.username.toLowerCase();
    const user = await User.findOne({ username })
    if (user) throw new Error('User already exists');

    const { password } = req.body;
    const uid = uuidv4();

    const newUser = new User({ uid, username, password });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();

    return res.status(201).json({ ...initialState, uid, username });
  } catch (err) {
    return res.status(401).json(err.message)
  }
});

module.exports = router;
