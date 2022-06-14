import dotenv from "dotenv";
dotenv.config();

interface IConfig {
  PORT: number;
  NODE_ENV: string;
  DB_URL: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
}

const Config: IConfig = {
  PORT: Number(process.env.PORT) || 5365,
  NODE_ENV: "development",
  DB_URL: process.env.DB_URL || "localhost",
  DB_NAME: process.env.DB_NAME || "",
  DB_USER: process.env.DB_USER || "",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
};

export default Config;
