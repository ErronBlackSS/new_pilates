const { users } = require('./users')
const { lessons } = require('./lessons')
const { lesson_types } = require('./lesson_types')
const { users_lessons_rel } = require('./users_lessons_rel')

module.exports = {
  users,
  lessons,
  lesson_types,
  users_lessons_rel
}