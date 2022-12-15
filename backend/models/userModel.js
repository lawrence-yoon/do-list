const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    email: {
        type: String,
        required: [true, 'Please add email'],
        unique: [true, "Email Exists"]
    },
    password: {
        type: String,
        required: [true, 'Please add password']
    }
}, {
    timestamps: true
    }
)

module.exports = mongoose.model.Users || mongoose.model('User', userSchema)