"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const profile_1 = __importDefault(require("../middlewares/profile"));
const UserRoutes = (0, express_1.Router)();
UserRoutes.put("/upload_profile/:id", profile_1.default.single("ProfilePicture"), UserController_1.profileUploadController);
UserRoutes.put("/update/:id", profile_1.default.single("ProfilePicture"), UserController_1.profileUpdateController);
UserRoutes.delete("/admin/delete-user/:userId", UserController_1.AdminUserDelete);
UserRoutes.get("/image/:ImageName", UserController_1.imageRetrival);
UserRoutes.put("/fill_profile", UserController_1.fillProfile);
UserRoutes.put("/fill", UserController_1.fill);
UserRoutes.put("/add_pin", UserController_1.AddPin);
UserRoutes.get("/get_user/:id", UserController_1.GetUserById);
UserRoutes.get("/get_mentor", UserController_1.getMentors);
UserRoutes.put("/change/:id", UserController_1.updateSetting);
UserRoutes.get("/number/:id", UserController_1.getNumber_of_unseen_messages);
UserRoutes.put("/not/:id", UserController_1.updateSeenNotification);
UserRoutes.get("/notification/:id", UserController_1.GetNotificationById);
UserRoutes.put("/savetoken", UserController_1.PushNotification);
exports.default = UserRoutes;
