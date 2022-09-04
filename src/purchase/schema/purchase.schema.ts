import * as mongoose from 'mongoose';

export const PurchaseSchema = new mongoose.Schema(
  {
    selectedProduct: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'products',
      required: false,
    },
    amount: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true },
);
