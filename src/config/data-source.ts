import { DataSource } from "typeorm";
import env from "./env";

const AppDataSource = new DataSource({
  type: "mysql",
  host: env.DB.HOST,
  username: env.DB.USERNAME,
  password: env.DB.PASSWORD,
  port: env.DB.PORT,
  database: env.DB.NAME,
});

export default AppDataSource;
