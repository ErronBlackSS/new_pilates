const pool = require('../db')

async function Create (req, res) {
    const { coach_id, lesson_type_id, capacity, date, start_time, end_time } = req.body
    const newLesson = await pool.query(`
        INSERT INTO lessons (coach_id, lesson_type_id, capacity, date, start_time, end_time) 
        VALUES ($1, $2, $3, $4, $5, $6)`, 
        [coach_id, lesson_type_id, capacity, date, start_time, end_time])
    res.json(newLesson.rows[0])
}

// Пока хз нужна ли она
async function GetAll (req, res) {
    const lessons = await pool.query('SELECT * from lessons')
    res.json(lessons.rows)
}

async function Update (req, res) {
    const query = helpers.parseUpdateData(req.body, 'lessons')
    const lesson = await pool.query(query, [])
    res.json(lesson.rows[0])
}

async function Delete (req, res) {
    const { id } = req.body
    const lesson = await pool.query('DELETE FROM lessons WHERE id = $1', [id])
    res.json(lesson.rows[0])
}

async function bookLesson (req, res) {
    const { user_id, lesson_id } = req.body
    const lesson = await pool.query(`
        SELECT * FROM lessons 
        WHERE id = $1`, 
        [lesson_id]
    )
    if (availiableToBook(lesson.rows[0].capacity, lesson.rows[0].occupied)) {
        const newBooking = await pool.query(`
            INSERT INTO users_lessons_rel (user_id, lesson_id)
            VALUES ($1, $2)`,
            [user_id, lesson_id]
        )
        const newCapacity = await pool.query(`
            UPDATE lessons
            SET capacity = capacity - 1
            WHERE id = $1`,
            [lesson_id]
        )
        res.json(newBooking.rows[0])
    } else {
        res.json({ message: 'Lesson is full' })
    }
}

async function removeBooked (req, res) {
    const { lesson_id, user_id } = req.body
    const lesson = await pool.query(`
        SELECT * FROM lessons
        WHERE id = $1`,
        [lesson_id]
    )
    const newCapacity = await pool.query(`
        UPDATE lessons
        SET capacity = capacity + 1
        WHERE id = $1`,
        [lesson_id]
    )
    const booking = await pool.query(`
        DELETE FROM users_lessons_rel
        WHERE lesson_id = $1 AND user_id = $2`,
        [lesson_id, user_id]
    )
    res.json(booking.rows[0])
}
    
async function listBookedUsers (req, res) {
    const { lesson_id } = req.body
    const lessons = await pool.query(`
        SELECT * FROM lessons 
        INNER JOIN users_lessons_rel ON lessons.id = users_lessons_rel.lesson_id 
        WHERE users_lessons_rel.user_id = $1`, 
        [lesson_id])
    res.json(lessons.rows)
}

function availiableToBook (capacity, occupied) {
    return capacity - occupied > 0
}

module.exports = {
    Create,
    GetAll,
    Update,
    Delete,
    listBookedUsers,
    bookLesson,
    removeBooked
}
