require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const UserRouter = require('./routes/user_routes')
const models = require('./models/models')
const app = express()

app.use(cors())
app.use(express.json())
console.log(UserRouter, 'UserRouter')
app.use('/api', UserRouter)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()