"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgres_1 = __importDefault(require("../config/postgres"));
class ModuleInt extends sequelize_1.Model {
}
const Module = postgres_1.default.define("Module", {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    lessonIds: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.NUMBER).dialectTypes,
    },
});
