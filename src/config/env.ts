import * as dotenv from "dotenv";

dotenv.config();

const env = {
  APP: {
    PORT: Number(process.env.APP_PORT),
  },
  DB: {
    TYPE: process.env.DB_TYPE,
    HOST: process.env.DB_HOST,
    PORT: Number(process.env.DB_PORT),
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    NAME: process.env.DB_NAME,
  },
};

export default env;
