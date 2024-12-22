import { DataTypes, Model } from "sequelize";
import { moduleInterface } from "../interfaces/moduleInterface";
import postgresConnectionSequelize from "../config/postgres";
import Course from "./Courses";

class ModuleInt extends Model<moduleInterface> implements moduleInterface {
  public id!: number;
  public moduleNumber!: number;
  public courseId!: number;
}
const Module = postgresConnectionSequelize.define<ModuleInt>(
  "Module",

  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      autoIncrement: true,
    },
    moduleNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.NUMBER,
      references: {
        key: "id",
        model: Course,
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  }
);
Course.hasMany(Module, {
  foreignKey: "courseId",
  sourceKey: "id",
  as: "modules",
});
Module.belongsTo(Course, {
  targetKey: "id",
  foreignKey: "courseId",
  as: "course",
});
export default Module;
