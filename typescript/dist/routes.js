"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function hello(req, res) {
    var user = CreateUser_1.default('Diego', 'diego@email.com', '123');
    return res.json(user);
}
exports.hello = hello;
;
