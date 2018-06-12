'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const UserSchema = Schema ({
    username: { type: String, require:true},
    email: { type: String , require: true},
    name: String,
    lastname: String,
    password: { type: String, minlength: 8 },
    salt: String,
    roles: [{ type: Schema.Types.ObjectId, ref: 'Role'}],
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
})

// Example virtual
UserSchema.virtual("full_name").get( function(){
    return this.name + " " + this.lastname + " XD"
}).set( function(full_name) {
    var words = full_name.split(" ")
    this.name = words[0]
    this.lastname = words[1]
})

UserSchema.virtual("password_confirmation").get( () => {
    return this.p_c;
}).set( (password) => {
    this.p_c = password
})

UserSchema.pre('save', function (next) {
    let user = this
    bcrypt.genSalt(10, function (err, salt) {       
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err)
            user.salt = salt
            user.password = hash
            next()
        });
    });
});

UserSchema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.password, (err, isMatch) => callback(err, isMatch));
};

module.exports = mongoose.model('User', UserSchema)