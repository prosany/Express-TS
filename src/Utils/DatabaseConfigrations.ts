import mongoose from "mongoose";
import Config from "../Config";

const mongooseDB_URI =
  Config.NODE_ENV === "development"
    ? `mongodb://${Config.DB_URL}/${Config.DB_NAME}`
    : `mongodb+srv://${Config.DB_USER}:${Config.DB_PASSWORD}@${Config.DB_URL}/${Config.DB_NAME}?retryWrites=true&w=majority`;

// const mongooseConfig = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// };

mongoose
  .connect(mongooseDB_URI)
  .then(() => console.log("Connection Successful."))
  .catch((err) => console.log("Connection Failed, ", err.message));

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to Database");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from Database");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
