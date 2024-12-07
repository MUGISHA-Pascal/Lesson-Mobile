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
exports.GetUserById = exports.AddPin = exports.fillProfile = exports.imageRetrival = exports.AdminUserDelete = exports.profileUploadController = void 0;
const User_1 = __importDefault(require("../models/User"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const profileUploadController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield User_1.default.findOne({ where: { id } });
        if (user) {
            if (req.file) {
                user.profilePicture = req.file.path;
                user.save();
                res.json({ message: "user image uploaded successfully", user });
            }
            else {
                res.status(400).json({ message: "no image file uploaded" });
            }
        }
        else {
            res.status(404).json({ message: "user not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
});
exports.profileUploadController = profileUploadController;
const AdminUserDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { deleteUserId } = req.body;
        const user = yield User_1.default.findOne({ where: { id: userId } });
        if ((user === null || user === void 0 ? void 0 : user.role) === "admin") {
            const deletedUsers = yield User_1.default.destroy({ where: { id: deleteUserId } });
            res.json({ message: "user deleted successfully", deletedUsers });
        }
        else {
            res.status(403).json({ message: "you are not eligible to delete users" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
});
exports.AdminUserDelete = AdminUserDelete;
const imageRetrival = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ImageName } = req.params;
    const filePath = path_1.default.join(__dirname, "../../uploads", ImageName);
    fs_1.default.access(filePath, fs_1.default.constants.F_OK, (err) => {
        if (err) {
            res.status(404).json({ error: "Image not found" });
        }
        res.sendFile(filePath);
    });
});
exports.imageRetrival = imageRetrival;
const fillProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullname, nickname, gender, phone_number, email, id } = req.body;
        const userUpdated = yield User_1.default.update({ username: fullname, nickName: nickname, gender, phone_number, email }, { where: { id } });
        console.log(userUpdated);
        res.status(201).json({ user: userUpdated });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.fillProfile = fillProfile;
const AddPin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pin, id } = req.body;
        const userUpdated = yield User_1.default.update({ pin }, { where: { id } });
        console.log(userUpdated);
        res.status(201).json({ user: userUpdated });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.AddPin = AddPin;
const GetUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield User_1.default.findByPk(id);
        if (user) {
            res.status(201).json(user);
        }
        else {
            res.status(404).json({ message: "user not found" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.GetUserById = GetUserById;
