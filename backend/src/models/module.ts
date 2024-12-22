import { DataTypes, Model } from "sequelize";
import { moduleInterface } from "../interfaces/moduleInterface";
import postgresConnectionSequelize from "../config/postgres";

class ModuleInt extends Model<moduleInterface> implements moduleInterface {
  public id!: number;
}
const Module = postgresConnectionSequelize.define<ModuleInt>(
  "Module",

  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      autoIncrement: true,
    },
  }
);
export default Module;
