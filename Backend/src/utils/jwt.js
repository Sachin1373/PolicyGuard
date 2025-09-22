const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const generateAccessToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            userName: user.name,
            email: user.email,
        }
    )
}

const generateRefreshToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
        }
    )
}

module.exports = {generateAccessToken,generateRefreshToken};