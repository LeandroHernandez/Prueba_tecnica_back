import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDocumentType } from 'src/common/interfaces/document-type.interface';
import { DOCUMENT_TYPE } from 'src/common/models/models';
import { DocumentTypeDTO } from './dto/document-type.dto';

@Injectable()
export class DocumentTypeService {
  constructor(
    @InjectModel(DOCUMENT_TYPE.name)
    private readonly _model: Model<IDocumentType>,
  ) {}

  async create(documentTypeDTO: DocumentTypeDTO): Promise<IDocumentType> {
    const newDocumentType = new this._model({ ...documentTypeDTO });
    return await newDocumentType.save();
  }

  async findAll(): Promise<IDocumentType[]> {
    return await this._model.find();
  }

  async findOne(id: string): Promise<IDocumentType> {
    return await this._model.findById(id);
  }

  async update(
    id: string,
    documentTypeDTO: DocumentTypeDTO,
  ): Promise<IDocumentType> {
    return await this._model.findByIdAndUpdate(id, documentTypeDTO, {
      new: true,
    });
  }

  async delete(id: string) {
    await this._model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Delete' };
  }
}
