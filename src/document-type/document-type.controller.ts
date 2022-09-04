import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { IDocumentType } from 'src/common/interfaces/document-type.interface';
import { DocumentTypeService } from './document-type.service';
import { DocumentTypeDTO } from './dto/document-type.dto';

@Controller('api/v1/document-type')
export class DocumentTypeController {
  constructor(private readonly _documentTypeSvc: DocumentTypeService) {}

  @Post()
  @ApiOperation({ summary: ' Create Document Type ' })
  create(@Body() documentTypeDTO: DocumentTypeDTO): Promise<IDocumentType> {
    return this._documentTypeSvc.create(documentTypeDTO);
  }

  @Get()
  @ApiOperation({ summary: ' Find All Document Types ' })
  findAll() {
    return this._documentTypeSvc.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: ' Find Document Type ' })
  findOne(@Param('id') id: string): Promise<IDocumentType> {
    return this._documentTypeSvc.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: ' Update Document Type ' })
  update(
    @Param('id') id: string,
    @Body() documentTypeDTO: DocumentTypeDTO,
  ): Promise<IDocumentType> {
    return this._documentTypeSvc.update(id, documentTypeDTO);
  }

  @Delete(':id')
  @ApiOperation({ summary: ' Delete Document Type ' })
  delete(@Param('id') id: string) {
    return this._documentTypeSvc.delete(id);
  }
}
