import mongoose from "mongoose";

const Schema = mongoose.Schema

export const HousesSchema = new Schema(
  {
    price: { type: Number, required: true, min: 1, },
    year: { type: Number, required: true, min: 1, },
    description: { type: String, required: true, minLength: 3, maxLength: 200 },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    imgUrl: { type: String, required: true, default: '//placehold.it/300x300' }
  },
  { timestamps: true }
)


