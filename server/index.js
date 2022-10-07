require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const UserRouter = require('./routes/UserRouter')
const LessonsRouter = require('./routes/LessonsRouter')
const LessonTypesRouter = require('./routes/LessonTypesRouter')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api', UserRouter)
app.use('/api', LessonsRouter)
app.use('/api', LessonTypesRouter)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
