const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: [true, "Username is required"],
          unique: true,
          trim: true,
          minlength: [3, "Username must be at least 3 characters long"],
        },
        email: {
          type: String,
          required: [true, "Email is required"],
          unique: true,
          trim: true,
          lowercase: true,
        },
        password: {
          type: String,
          required: [true, "Password is required"],
          minlength: [6, "Password must be at least 6 characters long"],
        },
        refreshToken: {
            type: String,
            default: null,
        }
      },
      {
        timestamps: true, 
      }
);

module.exports = mongoose.model('User', userSchema);