import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DOCUMENT_TYPE } from 'src/common/models/models';
import { DocumentTypeController } from './document-type.controller';
import { DocumentTypeService } from './document-type.service';
import { DocumentTypeSchema } from './schema/document-type.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: DOCUMENT_TYPE.name,
        useFactory: () => {
          return DocumentTypeSchema;
        },
      },
    ]),
  ],
  controllers: [DocumentTypeController],
  providers: [DocumentTypeService],
})
export class DocumentTypeModule {}
