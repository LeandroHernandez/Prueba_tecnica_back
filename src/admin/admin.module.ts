import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ADMIN } from 'src/common/models/models';
import { ProductModule } from 'src/product/product.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminSchema } from './schema/admin.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ADMIN.name,
        useFactory: () => {
          return AdminSchema;
        },
      },
    ]),
    ProductModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
