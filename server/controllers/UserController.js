const UserService = require('../services/UserService')
const UserHelpers = require('../helpers/UserHelpers')
const { validationResult } = require('express-validator')
const ApiError = require('../exceptions/ApiError')
const helpers = require('../helpers/general')
const pool = require('../db')
const logger = require('../logger')
const { ROLES } = require('../constants')

async function registration (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
    }
    const { name, email, phone, password, lastname } = req.body
    const userData = await UserService.registration(name, email, phone, password, lastname)
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
    const message = 'Пользователь ' + email + ' зарегистрирован'
    logger.info(message)
    res.json(userData)
  } catch (e) {
    next(e)
  }
}

async function login (req, res, next) {
  try {
    const {email, password} = req.body
    const userData = await UserService.login(email, password)
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
    const message = 'Пользователь ' + email + ' вошел'
    logger.info(message)
    return res.json(userData)
  } catch (e) {
    next(e);
  }
}

async function reset (req, res, next) {
  try {
    const { email } = req.body
    const user = await UserService.resetSendMail(email)
    res.json(user)
  } catch (e) {
    next(e)
  }
}

async function resetPassword (req, res, next) {
  try {
    const { user_id, password } = req.body
    const userData = await UserService.resetPassword(user_id, password)
    res.json(userData)
  } catch (e) {
    next(e)
  }
}

async function activateReset (req, res, next) {
  try {
    const reset_link = req.params.link
    return res.redirect(process.env.CLIENT_URL + '/reset/' + reset_link)
  } catch (e) {
    next(e)
  }
}

async function logout(req, res, next) {
  try {
    const { refreshToken } = req.cookies
    const token = await UserService.logout(refreshToken)
    res.clearCookie('refreshToken')
    return res.json(token)
  } catch (e) {
    next(e)
  }
}

async function refresh(req, res, next) {
  try {
    const {refreshToken} = req.cookies;
    const userData = await UserService.refresh(refreshToken);
    res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
    return res.json(userData);
  } catch (e) {
    next(e);
  }
}

async function activate (req, res, next) {
  try {
    const activationLink = req.params.link
    await UserService.activate(activationLink)
    return res.redirect(process.env.CLIENT_URL)
  } catch (e) {
    next(e)
  }
}

async function getUsers (req, res, next) {
  try {
    const users = await UserHelpers.getAllUsers()
    const message = 'Получить всех пользователей'
    logger.info(message)
    res.json(users)
  } catch (e) {
    next(e)
  }
}

async function update (req, res, next) {
  try {
    const query = helpers.parseUpdateData(req.body, 'users')
    const user = await pool.query(query, [])
    res.json(user.rows[0])
  } catch (e) {
    next(e)
  }
}

async function remove (req, res, next) {
  try {
    const { id } = req.body
    await pool.query(`
      DELETE FROM users 
      WHERE id = $1`, 
      [id]
    )
    res.json({ message: 'Пользователь удален' })
  } catch (e) {
    next(e)
  }
}

async function setCoachRole (req, res, next) {
  try {
    const { id } = req.body
    await pool.query('UPDATE users SET role = $1 WHERE id = $2 RETURNING *', [ROLES.COACH, id])
    res.json({ message: 'success' })
  } catch (e) {
    next(e)
  }
}

async function setUserRole (req, res, next) {
  try {
    const { id } = req.body
    await pool.query('UPDATE users SET role = $1 WHERE id = $2 RETURNING *', [ROLES.USER, id])
    res.json({ message: 'success' })
  } catch (e) {
    next(e)
  }
}

async function setAdminRole (req, res, next) {
  try {
    const { id } = req.body
    await pool.query('UPDATE users SET role = $1 WHERE id = $2 RETURNING *', [ROLES.ADMIN, id])
    res.json({ message: 'success' })
  } catch (e) {
    next(e)
  }
}

async function getUserByResetToken (req, res, next) {
  try {
    const reset_link = req.params.link
    const user = await UserHelpers.getUserByResetToken(reset_link)
    res.json(user)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  registration,
  login,
  logout,
  reset,
  resetPassword,
  refresh,
  activate,
  update,
  remove,
  activateReset,
  getUserByResetToken,
  getUsers,
  setCoachRole,
  setUserRole,
  setAdminRole
}