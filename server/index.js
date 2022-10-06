require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const UserRouter = require('./routes/users')
const LessonsRouter = require('./routes/lessons')
const LessonTypesRouter = require('./routes/lesson_types')
const AuthRouter = require('./routes/authRouter')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', UserRouter)
app.use('/api', LessonsRouter)
app.use('/api', LessonTypesRouter)
app.use('/api', AuthRouter)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
