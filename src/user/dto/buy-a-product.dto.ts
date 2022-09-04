import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { IUser } from 'src/common/interfaces/user.interface';
import { PurchaseDTO } from 'src/purchase/dto/purchase.dto';

export class BuyAProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  clientId?: IUser;
  @ApiProperty()
  @IsNotEmpty()
  purchases: PurchaseDTO[];
}
