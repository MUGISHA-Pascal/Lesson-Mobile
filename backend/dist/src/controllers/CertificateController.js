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
exports.certificateRetrival = exports.CertificateGeneration = exports.CertificateFileRetrival = exports.certificateDelete = exports.certificateUpdate = exports.getcertificates = exports.certificateAdding = void 0;
const Certificates_1 = __importDefault(require("../models/Certificates"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const CertificateGenerate_1 = require("../middlewares/CertificateGenerate");
const User_1 = __importDefault(require("../models/User"));
const certificateAdding = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { course_id, certificate_url } = req.body;
        const certificate = yield Certificates_1.default.create({
            user_id: Number(userId),
            course_id,
            certificate_url,
        });
        res
            .status(200)
            .json({ message: "certificate added successfully", certificate });
    }
    catch (error) {
        console.log(error);
    }
});
exports.certificateAdding = certificateAdding;
const getcertificates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { courseId } = req.body;
        const certificate = yield Certificates_1.default.findAll({
            where: { user_id: userId, course_id: courseId },
        });
        res
            .status(200)
            .json({ message: "certificates found successfully", certificate });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getcertificates = getcertificates;
const certificateUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { certificateId } = req.params;
        const { course_id, issued_date, certificate_url, user_id } = req.body;
        const updatedCertificate = yield Certificates_1.default.update({ certificate_url }, { where: { id: certificateId, course_id, user_id, issued_date } });
        res.status(200).json({
            message: "certificate updated successfully",
            updatedCertificate,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.certificateUpdate = certificateUpdate;
const certificateDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { certificateId } = req.params;
        const deletedCertificate = yield Certificates_1.default.destroy({
            where: { id: certificateId },
        });
        res.status(200).json({
            message: "certificate deleted successfully",
            deletedCertificate,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.certificateDelete = certificateDelete;
const CertificateFileRetrival = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fileName } = req.params;
    const filePath = path_1.default.join(__dirname, "../../uploads/certificate", fileName);
    fs_1.default.access(filePath, fs_1.default.constants.F_OK, (err) => {
        if (err) {
            res.status(404).json({ error: "file not found" });
        }
        res.sendFile(filePath);
    });
});
exports.CertificateFileRetrival = CertificateFileRetrival;
const CertificateGeneration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        function containsSpace(str) {
            const spaceRegex = /\s/;
            return spaceRegex.test(str);
        }
        let { username, userId } = req.body;
        if (containsSpace(username))
            throw new Error("username must not contain space");
        function removeSpaces(inputString) {
            return inputString.replace(/\s+/g, "");
        }
        (0, CertificateGenerate_1.createCertificateWithImage)(username);
        username = removeSpaces(username);
        const userIssued = yield User_1.default.findOne({ where: { id: userId } });
        if (userIssued) {
            const certificate = yield Certificates_1.default.update({ certificate_url: `${username}_certificate.pdf` }, { where: { id: userId } });
            if (certificate) {
                res.status(201).json({
                    message: "certificate created",
                    certificateUrl: `${username}_certificate.pdf`,
                });
            }
            else {
                res.status(500).json({ message: "certificate not created" });
            }
        }
        else {
            res.status(404).json({ message: "user not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.CertificateGeneration = CertificateGeneration;
const certificateRetrival = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { certificateUrl } = req.params;
    const filePath = path_1.default.join(__dirname, "../../uploads/certificate", certificateUrl);
    fs_1.default.access(filePath, fs_1.default.constants.F_OK, (err) => {
        if (err) {
            res.status(404).json({ error: "certificate not found" });
        }
        res.sendFile(filePath);
    });
});
exports.certificateRetrival = certificateRetrival;
