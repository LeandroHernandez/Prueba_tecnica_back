import * as mongoose from 'mongoose';

export const DocumentTypeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true },
);
