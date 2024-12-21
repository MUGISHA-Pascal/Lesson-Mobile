import { DataTypes, Model } from "sequelize";
import { moduleInterface } from "../interfaces/mouleInterface";
import postgresConnectionSequelize from "../config/postgres";

class ModuleInt extends Model<moduleInterface> implements moduleInterface {
  public id!: number;
  public title!: string;
  public description!: string;
  public lessonIds!: number[];
}
const Module = postgresConnectionSequelize.define(
  "Module",

  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    lessonIds: {
      type: DataTypes.ARRAY(DataTypes.NUMBER).dialectTypes,
    },
  }
);
