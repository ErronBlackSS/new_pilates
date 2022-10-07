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

async function update (req, res) {
  const query = helpers.parseUpdateData(req.body, 'users')
  const user = await pool.query(query, [])
  res.json(user.rows[0])
}

async function remove (req, res) {
  const { id } = req.body
  const user = await pool.query(`
      DELETE FROM users 
      WHERE id = $1`, 
      [id]
  )
  res.json(user.rows[0])
}

module.exports = {
  registration,
  login,
  logout,
  auth,
  refresh,
  activate,
  update,
  remove
}