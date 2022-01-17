const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: {
            type: String,
            required: true,
            maxlength: 10
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: 1
        },
        password: {
            type: String,
        },
        confirmPassword: {
            type: String,
        },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ],
        moderatorBlocked: {
            type:Boolean,
        }
    })
);

module.exports = User;