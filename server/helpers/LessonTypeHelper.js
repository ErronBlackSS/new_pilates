const pool = require('../db')

async function getImagePath (id) {
    const lessonTypeImage = await pool.query(`
        SELECT * from lesson_type_image WHERE lesson_type_id = $1`, [id]
    )
    const image = lessonTypeImage.rows[0]
    return image.image_server_path
}

async function deleteImage (id) {
    await pool.query(`
        DELETE FROM lesson_type_image WHERE lesson_type_id = $1`, [id]
    )
}

async function checkDuplicateImage (server_path) {
    const lessonTypeImage = await pool.query(`
        SELECT * from lesson_type_image WHERE image_server_path = $1`, [server_path]
    )
    const image = lessonTypeImage.rows
    if (image.length > 1) {
        return false
    } else {
        return true
    }
}

module.exports = {
  getImagePath,
  deleteImage,
  checkDuplicateImage
}