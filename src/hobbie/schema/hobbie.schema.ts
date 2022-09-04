import * as mongoose from 'mongoose';

export const HobbieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);
