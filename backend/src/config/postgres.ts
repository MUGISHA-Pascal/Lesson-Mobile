import { Sequelize } from "sequelize";
export const postgresConnectionSequelize = new Sequelize({
  username: "postgres",
  password: "theo123",
  database: "LessonTracker",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

export default postgresConnectionSequelize;
