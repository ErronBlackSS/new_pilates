const bcrypt = require('bcrypt')
const uuid = require('uuid')
const MailService = require('./MailService')
const TokenService = require('./TokenService')
const UserHelpers = require('../helpers/UserHelpers')
const UserDTO = require('../dtos/UserDTO')
const ApiError = require('../exceptions/ApiError')
const e = require('express')

/*
    {
        "name": "Antonio",
        "email": "antony_band@yandex.ru",
        "phone": "18901234566",
        "password": "wbu[fqkm",
        "lastname": "Banderos"
    }
*/

async function registration (name, email, phone, password, lastname) {
    const candidate = await UserHelpers.findOne({ field: 'email', value: email })
    if (candidate) {
        throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const activation_link = uuid.v4()
    const user = await UserHelpers.create({ name, email, hashPassword, lastname, phone, activation_link })
    const userDto = new UserDTO(user)
    await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activation_link}`)

    const tokens = TokenService.generateTokens({ ...userDto })

    await TokenService.saveToken(userDto.id, tokens.refreshToken)
    return { ...tokens, user: userDto }
}

async function activate(activationLink) {
    const user = await UserHelpers.findOne({field: 'activation_link', value: activationLink})
    if (!user) {
        throw ApiError.BadRequest('Неккоректная ссылка активации')
    }
    return await UserHelpers.activate(user.id);
}

async function login(email, password) {
    const user = await UserHelpers.findOne({ field: 'email', value: email })
    if (!user) {
        throw ApiError.BadRequest('Пользователь с таким email не найден')
    }
    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
        throw ApiError.BadRequest('Неверный пароль')
    }
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({...userDto})

    await TokenService.saveToken(userDto.id, tokens.refreshToken)
    return {...tokens, user: userDto}
}

async function logout(refreshToken) {
    const token = await TokenService.removeToken(refreshToken)
    return token
}

async function refresh(refreshToken) {
    if (!refreshToken) {
        throw ApiError.UnauthorizedError()
    }
    const userData = TokenService.validateRefreshToken(refreshToken)
    const tokenFromDb = await TokenService.findToken(refreshToken)
    if (!userData || !tokenFromDb) {
        throw ApiError.UnauthorizedError()
    }
    const user = await UserHelpers.findOne({ field: 'id', value: userData.id })
    const userDto = new UserDto(user)
    const tokens = TokenService.generateTokens({...userDto})

    await TokenService.saveToken(userDto.id, tokens.refreshToken)
    return {...tokens, user: userDto}
}

module.exports = {
    registration,
    activate,
    login,
    logout,
    refresh
}