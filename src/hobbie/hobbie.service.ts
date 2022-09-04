import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IHobbie } from 'src/common/interfaces/hobbie.interface';
import { HOBBIE } from 'src/common/models/models';
import { HobbieDTO } from './dto/hobbie.dto';

@Injectable()
export class HobbieService {
  constructor(
    @InjectModel(HOBBIE.name) private readonly _model: Model<IHobbie>,
  ) {}

  async create(hobbieDTO: HobbieDTO): Promise<IHobbie> {
    const newHobbie = new this._model({ ...hobbieDTO });
    return await newHobbie.save();
  }

  async findAll(): Promise<IHobbie[]> {
    return await this._model.find();
  }

  async findOne(id: string): Promise<IHobbie> {
    return await this._model.findById(id);
  }

  async update(id: string, hobbieDTO: HobbieDTO): Promise<IHobbie> {
    return await this._model.findByIdAndUpdate(id, hobbieDTO, { new: true });
  }

  async delete(id: string) {
    await this._model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Delete' };
  }
}
