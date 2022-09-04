import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IProduct } from 'src/common/interfaces/product.interface';

export class PurchaseDTO {
  @ApiProperty()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  selectedProductId: IProduct;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  total: number;
}
