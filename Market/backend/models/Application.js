import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    fullName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("Application", applicationSchema);
export default User;
