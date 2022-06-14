import dotenv from "dotenv";
dotenv.config();

interface IConfig {
  PORT: number;
}

const Config: IConfig = {
  PORT: Number(process.env.PORT) || 5365,
};

export default Config;
