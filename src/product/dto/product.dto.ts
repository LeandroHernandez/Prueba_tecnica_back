import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsOptional()
  description?: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: string;
  // @ApiProperty()
  // @IsOptional()
  // categories?: IProductCategorie[];
  @ApiProperty()
  @IsOptional()
  categories?: string[];
}
