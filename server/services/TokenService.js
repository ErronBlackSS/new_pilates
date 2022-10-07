const jwt = require('jsonwebtoken');
const TokenHelper = require('../helpers/TokenHelper')

async function generateTokens (payload) {
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
  return {
    accessToken,
    refreshToken
  }
}

async function saveToken (userId, refreshToken) {
    const tokenData = await TokenHelper.findOne({ field: 'userId', value: userId })
    if (tokenData) {
        tokenData.refreshToken = refreshToken
        return tokenData.save()
    }
    const token = await TokenHelper.create({userId, refreshToken})
    return token.rows[0]
}

async function removeToken(refreshToken) {
    const tokenData = await TokenHelper.deleteOne({ field: 'refreshToken', value: refreshToken })
    return tokenData.rows[0]
}

async function findToken(refreshToken) {
    const tokenData = await TokenHelper.findOne({ field: 'refreshToken', value: refreshToken })
    return tokenData.rows[0]
}

function validateAccessToken(token) {
    try {
        const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
        return userData
    } catch (e) {
        console.log(e)
    }
}

function validateRefreshToken(token) {
    try {
        const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
        return userData
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    generateTokens,
    saveToken,
    removeToken,
    findToken,
    validateAccessToken,
    validateRefreshToken
}