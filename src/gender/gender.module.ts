import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GENDER } from 'src/common/models/models';
import { GenderController } from './gender.controller';
import { GenderService } from './gender.service';
import { GenderSchema } from './schema/gender.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: GENDER.name,
        useFactory: () => {
          return GenderSchema;
        },
      },
    ]),
  ],
  controllers: [GenderController],
  providers: [GenderService],
})
export class GenderModule {}
