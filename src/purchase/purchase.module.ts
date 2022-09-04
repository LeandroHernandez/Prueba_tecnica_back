import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PURCHASE } from 'src/common/models/models';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { PurchaseSchema } from './schema/purchase.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PURCHASE.name,
        useFactory: () => {
          return PurchaseSchema;
        },
      },
    ]),
  ],
  controllers: [PurchaseController],
  providers: [PurchaseService],
  exports: [PurchaseService],
})
export class PurchaseModule {}
