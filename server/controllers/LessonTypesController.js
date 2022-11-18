const pool = require('../db')
const helpers = require('../helpers/general')
const LessonTypeHelper = require('../helpers/LessonTypeHelper')
const LessonTypeDTO = require('../dtos/LessonTypeDTO')
const fs = require('fs')
const e = require('express')

async function create (req, res) {
  try {
    const { title, description, global_lesson_type, duration } = req.body
    const newLessonType = await pool.query(`
      INSERT INTO lesson_types (title, description, global_lesson_type, duration) VALUES ($1, $2, $3, $4) RETURNING *`, 
      [title, description, global_lesson_type, duration]
    )
    const lessonType = new LessonTypeDTO(newLessonType.rows[0])
    res.json(lessonType)
  }  catch (e) {
    console.log(e)
    //next(e)
  }
}

async function getAll (req, res) {
  try {
    const lessonTypes = await pool.query('SELECT * from lesson_types LEFT JOIN lesson_type_image ON lesson_types.id = lesson_type_image.lesson_type_id')
    const lessonTypesDTO = lessonTypes.rows.map(lessonType => new LessonTypeDTO(lessonType))
    res.json(lessonTypesDTO)
  } catch (e) {
    next(e)
  }
}

async function getAllByGroup (req, res) {
  try {
    const lessonTypes = await pool.query('SELECT id, title, description, duration, global_lesson_type, lesson_type_image.image_url  from lesson_types LEFT JOIN lesson_type_image ON lesson_types.id = lesson_type_image.lesson_type_id')
    let arr = {}
    lessonTypes.rows.forEach((lessonType) => {
      if (!arr.hasOwnProperty(lessonType.global_lesson_type)) {
        arr[lessonType.global_lesson_type] = []
        arr[lessonType.global_lesson_type].push(lessonType)
      } else {
        arr[lessonType.global_lesson_type].push(lessonType)
      }
    })
       
    res.json(arr)
  } catch (e) {
    console.log(e)
  }
}

async function saveImage (req, res) {
  try {
    const id = req.query.id
    const file = req.files
    const fileName = file.file.name
    const server_path = process.env.FILE_PATH + '/lesson_types/' + fileName
    file.file.mv(server_path)
    const api_url = process.env.API_URL + '/files/lesson_types/' + fileName

    await pool.query(`
      INSERT INTO lesson_type_image (lesson_type_id, image_name, image_server_path, image_url)
      VALUES ($1, $2, $3, $4) RETURNING *`,
      [id, fileName, server_path, api_url]
    )

    res.json(api_url)
  } catch (e) {
    console.log(e)
    //next(e)
  }
}

async function removeFile (req, res) {
  try {
    const id = req.query.id
    const lessonImage = await LessonTypeHelper.getImagePath(id)

    const isImageDuplicated = await LessonTypeHelper.checkDuplicateImage(lessonImage)

    if (isImageDuplicated) {
      fs.unlink(lessonImage, (err) => {
        if (err) {
          console.log(err)
        }
      })
    }

    await LessonTypeHelper.deleteImage(id)

    res.json({ message: 'File was deleted' })
  } catch (e) {
    console.log(e)
    //next(e)
  }
}

async function update (req, res) {
  try {
    const { id, title, description, global_lesson_type, duration } = req.body
    const lessonType = await pool.query(`
      UPDATE lesson_types 
      SET title = $1, description = $2, global_lesson_type = $3, duration = $4
      WHERE id = $5 RETURNING *`, 
      [title, description, global_lesson_type, duration, id]
    )
    res.json(lessonType.rows[0])
  } catch (e) {
    next(e)
  }
}

async function remove (req, res) {
  try {
    const { id } = req.body
    const lessonType = await pool.query(`
      DELETE FROM lesson_types 
      WHERE id = $1`, 
      [id]
    )
    res.json(lessonType.rows[0])
  } catch (e) {
    next(e)
  }
}

module.exports = {
    create,
    getAll,
    update,
    remove,
    saveImage,
    removeFile,
    getAllByGroup
}