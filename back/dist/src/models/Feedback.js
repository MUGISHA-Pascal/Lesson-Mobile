"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgres_1 = __importDefault(require("../config/postgres"));
const { DataTypes } = require("sequelize");
class FeedbackInt extends sequelize_1.Model {
}
const Feedback = postgres_1.default.define("Feedback", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "users",
            key: "id",
        },
        onUpdate: "NO ACTION",
        onDelete: "CASCADE",
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "courses",
            key: "id",
        },
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
    },
    feedback_text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    createdAt: true,
    updatedAt: true,
    tableName: "feedback",
    schema: "public",
    timestamps: false,
});
exports.default = Feedback;
