module.exports = class UserDto {
    id
    title
    description
    duration
    global_lesson_type
    lesson_image

    constructor(model) {
        this.id = model.id
        this.title = model.title
        this.description = model.description
        this.duration = model.duration
        this.type = model.global_lesson_type
        this.image = model.lesson_image
    }
}