module.exports = class UserDto {
    email;
    id;
    isActivated;
    name;
    lastname;
    phone;

    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.isActivated = model.isActivated;
        this.name = model.name;
        this.lastname = model.lastname;
        this.phone = model.phone;
    }
}