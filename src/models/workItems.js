import mongoose from "mongoose";

const workItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Work title is required"],
      trim: true,
      maxlength: [120, "Title cannot exceed 120 characters"],
    },
    description: {
      type: String,
      trim: true,
      default: null,
    },
    userId: {
      type: String,
      required: [true, "Work item must belong to a user"],
      index: true,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

workItemSchema.index({ userId: 1, status: 1 });

export default mongoose.model("WorkItem", workItemSchema);
