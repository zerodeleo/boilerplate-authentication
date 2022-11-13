const { Router } = require('express');
const User = require('../models/User');
const cloudinary = require('../config/cloudinary');
const uploader = require('../config/cloudinary/multer');

const router = new Router();

router.route(`/:uid`).get(async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({ uid }, { password: 0 });

    if (!user) throw new Error('go hack yourself');

    return res.json({ ...user });
  } catch (err) {
    return res.status(418).json(err.message);
  }
});

router.route('/:uid/image').put(uploader.single("file"), async (req, res) => {
  try {
        const { uid } = req.params;
        const uploadedResponse = await cloudinary.v2.uploader.upload(req.file.path, {
            folder: `/boilerplate/${uid}`
        })
        const image = uploadedResponse.secure_url;
        await User.findOneAndUpdate({ uid }, { image })
        return res.status(201).json({ image });
    } catch (err) {
        res.status(401).json(err.message).end();
    }
});

const editUsername = async (req, res) => {
  try {
    const { uid } = req.params;
    const username = req.body.username.toLowerCase();

    const currentUser = await User.findOne({ username });

    if (currentUser && currentUser.uid !== uid ) {
      throw new Error(`Username ${currentUser.username} is taken`);
    }

    await User.findOneAndUpdate({ uid }, { username });
    return res.status(201).json({ username }).end();
  } catch (err) {
    return res.status(401).json(err.message);
  }
};

const editBio = async (req, res) => {
  try {
    const { uid } = req.params;
    const { bio } = req.body;
    await User.findOneAndUpdate({ uid }, { bio });
    return res.status(201).json({ bio }).end();
  } catch (err) {
    return res.status(401).json(err.message);
  }
};

router.route(`/:uid`).put(async (req, res) => {
  req.body.username && await editUsername(req, res);
  req.body.bio && await editBio(req, res);
});

router.route('/:uid').delete( async (req, res) => {
  const { uid } = req.params;
  try {
    await User.findOneAndDelete({ uid })
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json('Deleting user impossible')
  };
});

module.exports = router;
