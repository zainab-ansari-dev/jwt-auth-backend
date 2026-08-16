const jwt = require('jsonwebtoken');

const {randomBytes} = require('crypto');

function createTokenForUser(user)
{
    const payload = {
        id : user._id,
        email : user.email,
    }
    const token = jwt.sign(payload,process.env.JWT_SECRET);
    return token;
}

function validateToken(token)
{
    const payload = jwt.verify(token,process.env.JWT_SECRET);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken
}