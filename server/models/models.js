const users = require('./users')
const lessons= require('./lessons')
const lesson_types = require('./lesson_types')
const users_lessons_rel = require('./users_lessons_rel')

users.belongsToMany(lessons, {through: users_lessons_rel})
lessons.belongsToMany(users, {through: users_lessons_rel})

lesson_types.hasMany(lessons)
lessons.belongsTo(lesson_types)

module.exports = {
  users,
  lessons,
  lesson_types,
  users_lessons_rel
}

