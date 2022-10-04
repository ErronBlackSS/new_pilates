require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const UserRouter = require('./routes/user_routes')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', UserRouter)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
