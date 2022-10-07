const UserService = require('../services/UserService')

async function registration (req, res, next) {
  try {
    const { name, email, phone, password, lastname } = req.body
    const userData = await UserService.registration(name, email, phone, password, lastname)
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
    res.json(userData)
  } catch (e) {
    console.log(e)
  }
}

async function login (req, res, next) {
  try {

  } catch (e) {
    
  }
}

async function logout (req, res, next) {
  try {

  } catch (e) {
    
  }
}

async function auth (req, res, next) {
  try {

  } catch (e) {
    
  }
}

async function refresh (req, res, next) {
  try {

  } catch (e) {
    
  }
}

async function activate (req, res, next) {
  try {

  } catch (e) {
    
  }
}

module.exports = {
  registration,
  login,
  logout,
  auth,
  refresh,
  activate
}