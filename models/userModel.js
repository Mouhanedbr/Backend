const crypto = require('crypto');
const mongoose = require('mongoose');
const validators = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({});

const User = mongoose.model('User', userSchema);

module.exports = User;