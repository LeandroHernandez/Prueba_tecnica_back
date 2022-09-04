import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ProductModule } from './product/product.module';
import { GenderModule } from './gender/gender.module';
import { DocumentTypeModule } from './document-type/document-type.module';
import { HobbieModule } from './hobbie/hobbie.module';
import { PurchaseModule } from './purchase/purchase.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB, {
      // useCreateIndex: true,
      // useFindAndModify: false,
    }),
    UserModule,
    AdminModule,
    ProductModule,
    GenderModule,
    DocumentTypeModule,
    HobbieModule,
    PurchaseModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
