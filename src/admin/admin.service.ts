import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAdmin } from 'src/common/interfaces/admin.interface';
import { ADMIN } from 'src/common/models/models';

import * as bcrypt from 'bcrypt';
import { AdminDTO } from './dto/admin.dto';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(ADMIN.name) private readonly _model: Model<IAdmin>,
    private readonly _productSvc: ProductService,
  ) {}

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
  async create(adminDTO: AdminDTO): Promise<IAdmin> {
    const hash = await this.hashPassword(adminDTO.password);
    const newAdmin = new this._model({ ...adminDTO, password: hash });
    return await newAdmin.save();
  }

  async findAll(): Promise<IAdmin[]> {
    return await this._model.find();
  }

  async findOne(id: string): Promise<IAdmin> {
    return await this._model.findById(id);
  }

  async update(id: string, adminDTO: AdminDTO): Promise<IAdmin> {
    const hash = await this.hashPassword(adminDTO.password);
    const admin = { ...adminDTO, password: hash };
    return await this._model.findByIdAndUpdate(id, admin, { new: true });
  }

  async delete(id: string) {
    await this._model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Delete' };
  }
}
