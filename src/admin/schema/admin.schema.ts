import * as mongoose from 'mongoose';

export const AdminSchema = new mongoose.Schema(
  {
    documentType: { type: String, required: true },
    documentNumber: { type: String, required: true },
    // username: { type: String, required: true },
    names: { type: String, required: true },
    surnames: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

AdminSchema.index({ documentNumber: 1 }, { unique: true });
AdminSchema.index({ email: 1 }, { unique: true });
