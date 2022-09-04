import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HOBBIE } from 'src/common/models/models';
import { HobbieController } from './hobbie.controller';
import { HobbieService } from './hobbie.service';
import { HobbieSchema } from './schema/hobbie.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: HOBBIE.name,
        useFactory: () => {
          return HobbieSchema;
        },
      },
    ]),
  ],
  controllers: [HobbieController],
  providers: [HobbieService],
})
export class HobbieModule {}
