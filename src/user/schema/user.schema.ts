import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    documentType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'document-types',
      required: false,
    },
    documentNumber: { type: String, required: true },
    names: { type: String, required: true },
    surnames: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    companyWhereWork: { type: String, required: false },
    position: { type: String, required: false },
    community: { type: String, required: false },
    country: { type: String, required: true },
    division: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    gender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'genders',
      required: false,
    },
    hobbies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hobbies',
        required: false,
      },
    ],
    shopping: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'purchases',
        required: false,
      },
    ],
  },
  { timestamps: true },
);

UserSchema.index({ documentNumber: 1 }, { unique: true });
UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ username: 1 }, { unique: true });
