import mongoose from "mongoose";
const Schema = mongoose.Schema

export const JobsSchema = new Schema(
  {
    title: { type: String, required: true, minLength: 5, maxLength: 30 },
    hourlyPay: { type: Number, required: true, min: 10 },
    weeklyHours: { type: Number, required: true, min: 1, max: 100 },
    temporary: { type: Boolean, required: true, default: false },
    description: { type: String, required: true, maxLength: 100 }
  },
  {
    timestamps: true
  }


)

