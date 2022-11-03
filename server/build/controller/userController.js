"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const userSchema_1 = __importDefault(require("../models/userSchema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const message_1 = require("../message/message");
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var newPassword;
    try {
        let { id, fname, lname, email, Aadhar_number, Mobile_number, Wallet_address, password } = yield req.body;
        const query = yield userSchema_1.default.findOne({ Aadhar_number });
        const salt = 10;
        if (query) {
            res.status(200).json({ status: 200, message: `User already exists by Aadhar Number ${Aadhar_number}` });
        }
        else {
            yield bcrypt_1.default.hash(password, salt).then((result) => {
                password = result;
            });
            yield userSchema_1.default.create({
                id,
                fname,
                lname,
                email,
                Aadhar_number,
                Mobile_number,
                Wallet_address,
                password
            });
            res.status(200).json({ status: 200, message: message_1.message.userRegistered });
        }
    }
    catch (err) {
        res.status(200).json({ status: 400, message: err.message });
    }
});
exports.register = register;
