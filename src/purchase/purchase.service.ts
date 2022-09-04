import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PURCHASE } from 'src/common/models/models';

import { PurchaseDTO } from './dto/purchase.dto';
import { IPurchase } from 'src/common/interfaces/purchase.interface';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectModel(PURCHASE.name) private readonly _model: Model<IPurchase>,
  ) {}

  async create(purchaseDTO: PurchaseDTO): Promise<IPurchase> {
    const newPurchase = new this._model({ ...purchaseDTO });
    await newPurchase.save();
    return await this._model
      .findByIdAndUpdate(
        newPurchase.id,
        {
          $addToSet: {
            selectedProduct: purchaseDTO.selectedProductId,
          },
        },
        { new: true },
      )
      .populate('selectedProduct');
  }

  async findAll(): Promise<IPurchase[]> {
    return await this._model.find().populate('selectedProduct');
  }

  async findOne(id: string): Promise<IPurchase> {
    return await this._model.findById(id).populate('selectedProduct');
  }

  async update(id: string, purchaseDTO: PurchaseDTO): Promise<IPurchase> {
    return await this._model
      .findByIdAndUpdate(id, { ...purchaseDTO }, { new: true })
      .populate('selectedProduct');
  }

  async delete(id: string) {
    await this._model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Delete' };
  }
}
