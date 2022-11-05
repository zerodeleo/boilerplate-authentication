const { Router } = require('express');
const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const router = new Router();

router.route(`/:uid`).get(async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({ uid });

    if (!user) throw new Error('go hack yourself');

    return res.json({ uid: user.uid, username: user.username });
  } catch (err) {
    return res.status(418).json(err.message);
  }
});

router.route('/:uid').put(async (req, res) => {
  
  try {
    const username = req.body.username.toLowerCase();
    const { uid } = req.params;
    const userCheck = await User.findOne({ username });

    if (userCheck && userCheck.uid !== uid ) {
      throw new Error('Username is taken');
    }

    const { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(password, salt);
    await User.findOneAndUpdate({ uid }, { username, password: hashedPw })
    return res.status(201).json({ username });
  } catch (err) {
    res.status(401).json(err.message).end();
  }
});

router.route(`/signin/`).post(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && await bcrypt.compare(password, user.password)) {
    return res.json({ uid: user.uid, username: user.username });
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
    await newUser.save()

    return res.status(201).json({ uid, username });
  } catch (err) {
    return res.status(401).json(err.message)
  }
});

router.route('/:uid').delete((req, res) => {
  const { uid } = req.params;
  User.findOneAndDelete({ uid })
      .then(() => res.status(204).send())
      .catch(() => res.status(500).json('internal server error'));
});

module.exports = router;
