"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(name, email, password) {
    var user = {
        name: name,
        email: email,
        password: password,
    };
    return user;
}
exports.default = createUser;
