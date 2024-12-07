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
exports.courseimageRetrival = exports.courseprofileUploadController = exports.GetCourseByCategory = exports.fileRetrival = exports.CourseFileAdding = exports.courseDelete = exports.courseUpdate = exports.getCourses = exports.courseAdding = void 0;
const User_1 = __importDefault(require("../models/User"));
const Courses_1 = __importDefault(require("../models/Courses"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const courseAdding = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { title, description, content_type, category, is_active } = req.body;
        const user = yield User_1.default.findOne({ where: { id: userId } });
        if ((user === null || user === void 0 ? void 0 : user.role) === "admin") {
            const course = yield Courses_1.default.create({
                title,
                description,
                content_type,
                category,
                created_by: Number(userId),
                is_active,
            });
            res.status(200).json({ message: "course created successfully", course });
        }
        else {
            res.json({ message: "you are not allowed adding courses" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.courseAdding = courseAdding;
const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.title) {
            const { title } = req.body;
            const courseFound = yield Courses_1.default.findAll({ where: { title } });
            if (!courseFound) {
                res.json({ message: "course not found" });
            }
            res.status(200).json({ message: "course found", courses: courseFound });
        }
        else {
            const courses = yield Courses_1.default.findAll();
            res.status(200).json({ message: "all courses", courses });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.getCourses = getCourses;
const courseUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { courseId, title, description, content_type, created_by, is_active, } = req.body;
        const user = yield User_1.default.findOne({ where: { id: userId } });
        if ((user === null || user === void 0 ? void 0 : user.role) === "admin") {
            const updatedCourse = yield Courses_1.default.update({ title, description, content_type, created_by, is_active }, { where: { id: courseId } });
            res
                .status(200)
                .json({ message: "course updated successfully", updatedCourse });
        }
        else {
            res.json({ message: "you are not allowed updating courses" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.courseUpdate = courseUpdate;
const courseDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { courseId } = req.body;
        const user = yield User_1.default.findOne({ where: { id: userId } });
        if ((user === null || user === void 0 ? void 0 : user.role) === "admin") {
            const deletedCourse = yield Courses_1.default.destroy({ where: { id: courseId } });
            res
                .status(200)
                .json({ message: "course deleted successfully", deletedCourse });
        }
        else {
            res.json({ message: "you are not allowed deleting courses" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.courseDelete = courseDelete;
const CourseFileAdding = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { userId, courseTitle, category, courseDescription, contentType } = req.body;
        const user = yield User_1.default.findOne({ where: { id: userId } });
        if ((user === null || user === void 0 ? void 0 : user.role) === "admin") {
            if (!req.file) {
                res.status(400).json({ message: "No file uploaded" });
            }
            yield Courses_1.default.create({
                title: courseTitle,
                description: courseDescription,
                content_type: contentType,
                category,
                created_by: userId,
                file: (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename,
            });
            res.status(200).json({
                message: "course uploaded successfully",
                file: req.file,
            });
        }
        else {
            res.json({ message: "you are not allowed adding courses" });
        }
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.CourseFileAdding = CourseFileAdding;
const fileRetrival = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fileName } = req.params;
    const filePath = path_1.default.join(__dirname, "../../uploads/courses", fileName);
    fs_1.default.access(filePath, fs_1.default.constants.F_OK, (err) => {
        if (err) {
            res.status(404).json({ error: "file not found" });
        }
        res.sendFile(filePath);
    });
});
exports.fileRetrival = fileRetrival;
const GetCourseByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.params;
        const courses = yield Courses_1.default.findAll({ where: { category } });
        res.status(201).json({ courses });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.GetCourseByCategory = GetCourseByCategory;
const courseprofileUploadController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const course = yield Courses_1.default.findOne({ where: { id } });
        if (course) {
            if (req.file) {
                course.profile_image = req.file.path;
                course.save();
                res.json({ message: "course image uploaded successfully", course });
            }
            else {
                res.status(400).json({ message: "no course file uploaded" });
            }
        }
        else {
            res.status(404).json({ message: "course not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
});
exports.courseprofileUploadController = courseprofileUploadController;
const courseimageRetrival = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ImageName } = req.params;
    const filePath = path_1.default.join(__dirname, "../../uploads", ImageName);
    fs_1.default.access(filePath, fs_1.default.constants.F_OK, (err) => {
        if (err) {
            res.status(404).json({ error: "Image not found" });
        }
        res.sendFile(filePath);
    });
});
exports.courseimageRetrival = courseimageRetrival;
