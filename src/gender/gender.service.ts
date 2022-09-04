import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IGender } from 'src/common/interfaces/gender.interface';
import { GENDER } from 'src/common/models/models';
import { GenderDTO } from './dto/gender.dto';

@Injectable()
export class GenderService {
  constructor(
    @InjectModel(GENDER.name) private readonly _model: Model<IGender>,
  ) {}

  async create(genderDTO: GenderDTO): Promise<IGender> {
    const newGender = new this._model({ ...genderDTO });
    return await newGender.save();
  }

  async findAll(): Promise<IGender[]> {
    return await this._model.find();
  }

  async findOne(id: string): Promise<IGender> {
    return await this._model.findById(id);
  }

  async update(id: string, genderDTO: GenderDTO): Promise<IGender> {
    return await this._model.findByIdAndUpdate(id, genderDTO, { new: true });
  }

  async delete(id: string) {
    await this._model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Delete' };
  }
}
