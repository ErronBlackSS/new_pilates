const jwt = require('jsonwebtoken');

async function generateTokens (payload) {
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
  return {
    accessToken,
    refreshToken
  }
}

async function saveToken (userId, refreshToken) {
    const tokenData = await Token.findOne({user: userId})
    if (tokenData) {
        tokenData.refreshToken = refreshToken
        return tokenData.save()
    }
    const token = await Token.create({user: userId, refreshToken})
    return token
}

async function removeToken(refreshToken) {
    const tokenData = await tokenModel.deleteOne({refreshToken})
    return tokenData;
}

async function findToken(refreshToken) {
    const tokenData = await tokenModel.findOne({refreshToken})
    return tokenData;
}

module.exports = {
    generateTokens,
    saveToken,
    removeToken,
    findToken,
}