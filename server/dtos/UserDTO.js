module.exports = class UserDto {
    email;
    id;
    role;
    isActivated;
    name;
    lastname;
    phone;

    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.role = model.role;
        this.isActivated = model.is_activated;
        this.name = model.name;
        this.lastname = model.lastname;
        this.phone = model.phone;
    }
}