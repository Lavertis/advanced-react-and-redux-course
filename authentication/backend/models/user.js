const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Define our model
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function (next) {
    const user = this;

    bcrypt.genSalt(10, function (err, salt) {
        if (err)
            return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err)
                return next(err);

            user.password = hash;
            next();
        });
    });
});

// Create the model class
const model = mongoose.model('user', userSchema);

// Export the model
module.exports = model;