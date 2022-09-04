import * as mongoose from 'mongoose';

export const GenderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);
