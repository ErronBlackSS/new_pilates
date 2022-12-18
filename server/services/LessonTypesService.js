const pool = require('../db')
const LessonTypeHelper = require('../helpers/LessonTypeHelper')
const fs = require('fs')

async function saveImage (id, file) {
    try {
        const fileName = file.name
        const server_path = process.env.FILE_PATH + '/lesson_types/' + fileName
        file.mv(server_path)
        const api_url = process.env.API_URL + '/files/lesson_types/' + fileName
        
        await pool.query(`
          INSERT INTO lesson_type_image (lesson_type_id, image_name, image_server_path, image_url)
          VALUES ($1, $2, $3, $4) RETURNING *`,
          [id, fileName, server_path, api_url]
        )

        return api_url
    } catch (e) {
        console.log(e)
    }
}

async function checkImageExpists (id) {
    try {

      const lessonImage = await LessonTypeHelper.getImagePath(id)
  
      const isImageDuplicated = await LessonTypeHelper.checkDuplicateImage(lessonImage)
  
      if (isImageDuplicated) {
        fs.unlink(lessonImage, (err) => {
          if (err) {
            console.log(err)
          }
        })
        await LessonTypeHelper.deleteImage(id)
      }
  
      return true
    } catch (e) {
      console.log(e)
      //next(e)
    }
  }

module.exports = {
  saveImage,
  checkImageExpists
}