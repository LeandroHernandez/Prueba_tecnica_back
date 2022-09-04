import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/common/interfaces/user.interface';
import { USER } from 'src/common/models/models';

import * as bcrypt from 'bcrypt';
import { UserDTO } from './dto/user.dto';
import { IPurchase } from 'src/common/interfaces/purchase.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel(USER.name) private readonly _model: Model<IUser>) {}

  async checkPassword(password: string, passwordDB: string): Promise<boolean> {
    return await bcrypt.compare(password, passwordDB);
  }

  async findByUsername(username: string) {
    // async findByEamil(email: string) {
    return await this._model.findOne({ username });
    // return await this._model.findOne({ email })
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async create(userDTO: UserDTO): Promise<IUser> {
    const hash = await this.hashPassword(userDTO.password);
    const newUser = new this._model({ ...userDTO, password: hash });
    await newUser.save();
    return await this._model
      .findByIdAndUpdate(
        newUser.id,
        {
          $addToSet: {
            documentType: userDTO.documentTypeId,
            gender: userDTO.genderId,
            hobbies: userDTO.hobbies,
          },
        },
        { new: true },
      )
      .populate('documentType')
      .populate('shopping')
      .populate('gender')
      .populate('hobbies');
  }

  async findAll(): Promise<IUser[]> {
    return await this._model
      .find()
      .populate('documentType')
      .populate('shopping')
      .populate('gender')
      .populate('hobbies');
  }

  async findOne(id: string): Promise<IUser> {
    return await this._model
      .findById(id)
      .populate('documentType')
      .populate('shopping')
      .populate('gender')
      .populate('hobbies');
  }

  async update(id: string, userDTO: UserDTO): Promise<IUser> {
    const hash = await this.hashPassword(userDTO.password);
    const user = { ...userDTO, password: hash };
    return await this._model
      .findByIdAndUpdate(id, user, { new: true })
      .populate('documentType')
      .populate('shopping')
      .populate('gender')
      .populate('hobbies');
  }

  async delete(id: string) {
    await this._model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Delete' };
  }

  // async buyAProduct(
  //   userId: IUser,
  //   // purchaseDTOs: Array<PurchaseDTO>,
  //   purchaseDTO: PurchaseDTO,
  // ): Promise<IUser> {
  //   // const purchases = [];
  //   // purchaseDTOs.forEach((purchaseDTO) => {
  //   //   const purchase = this._purchaseSvc.create(purchaseDTO);
  //   //   purchases.push(purchase);
  //   //   console.log({ purchases: purchases });
  //   // });
  //   const purchase = await this._purchaseSvc.create({
  //     ...purchaseDTO,
  //     clientId: userId,
  //   });
  //   console.log({ purchase: purchase, purchaseId: purchase.id });
  //   await this._model.findByIdAndUpdate(
  //     userId,
  //     {
  //       $addToSet: { shopping: purchase.id },
  //     },
  //     { new: true },
  //   );
  //   return await this._model
  //     .findById(userId)
  //     .populate('documentType')
  //     .populate('shopping')
  //     .populate('gender')
  //     .populate('hobbies');
  // }

  // async buyAProduct(buyAProduct: BuyAProductDTO): Promise<IUser> {
  //   // const purchasesIds = [];
  //   buyAProduct.purchases.forEach(async (purchase) => {
  //     const pur = await this._purchaseSvc.create({
  //       ...purchase,
  //       clientId: buyAProduct.clientId,
  //     });
  //     console.log({ purchase: pur.id });
  //     // purchasesIds.push(pur.id);
  //     await this._model.findByIdAndUpdate(
  //       buyAProduct.clientId,
  //       { $addToSet: { shopping: pur.id } },
  //       { new: true },
  //     );
  //   });
  //   // console.log({ purchases: purchasesIds });
  //   return await this._model
  //     .findById(buyAProduct.clientId)
  //     .populate('documentType')
  //     .populate('shopping')
  //     .populate('gender')
  //     .populate('hobbies');
  // }

  async assingPurchaseToClient(clientId: string, purchaseId: IPurchase) {
    return await this._model
      .findByIdAndUpdate(
        clientId,
        { $addToSet: { shopping: purchaseId } },
        { new: true },
      )
      .populate('documentType')
      .populate('shopping')
      .populate('gender')
      .populate('hobbies');
  }
}
