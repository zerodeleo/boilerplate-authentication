const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    uid: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String, required: false },
    image: { type: String, required: false }
},{
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
