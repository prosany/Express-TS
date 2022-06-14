import { Schema, model } from "mongoose";
import UUID from "../Helpers/UUID";

interface IAuth {
  _id: string;
  userId: string;
  email: string;
  password: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IAuth>(
  {
    userId: {
      type: String,
      required: true,
      default: UUID(15),
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("user", userSchema);
export default User;
//#endregion
