const bcrypt = require('bcrypt')
const uuid = require('uuid')
const MailService = require('./mailService')
const TokenService = require('./TokenService')
const UserHelpers = require('../helpers/UserHelpers')
const UserDTO = require('../dtos/UserDTO')
const ApiError = require('../exceptions/ApiError')

/* 
    {
        "name": "Antonio",
        "email": "antony_band@yandex.ru",
        "phone": "18901234566",
        "password": "wbu[fqkm",
        "lastname": "Banderos"
    }
*/

async function registration () {
    const candidate = await UserHelpers.findOne({ field: 'email', value: email })
    if (candidate) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Пользователь с данным email уже существует')
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const activationLink = uuid.v4()

    const user = await UserHelpers.Create({ email, password: hashPassword, activationLink, tokens })
    const userDto = new UserDto(user);

    await MailService.sendActivcationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

    const tokens = TokenService.generateTokens({ ...userDto })
    await TokenService.saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
}

async function activate(activationLink) {
    const user = await UserHelpers.findOne({field: 'activationLink', value: activationLink})
    if (!user) {
        throw ApiError.BadRequest('Неккоректная ссылка активации')
    }
    await UserHelpers.Activate(user.id);
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
    return token;
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
