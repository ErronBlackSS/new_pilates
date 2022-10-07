async function findOne (userId) {
    return await pool.query('SELECT * from users WHERE email = $1', [email])
}

function validateAccessToken(token) {
    try {
        const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        return userData;
    } catch (e) {
        return null;
    }
}

function validateRefreshToken(token) {
    try {
        const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        return userData;
    } catch (e) {
        return null;
    }
}

module.exports = {
    findOne,
    validateRefreshToken,
    validateAccessToken
}