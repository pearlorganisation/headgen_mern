import mongoose from "mongoose";

const teamsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
      trim: true,
    },
    headshotType: {
      type: String,
      default: null,
      trim: true,
    },
    customizeData: {
      type: [String],
      default: null,
    },
    promptsData: {
      type: [String],
      default: null,
    },
  },
  { timestamps: true }
);

export const teamsModel = mongoose.model("team", teamsSchema);
