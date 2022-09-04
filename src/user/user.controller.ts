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
import { IPurchase } from 'src/common/interfaces/purchase.interface';
import { IUser } from 'src/common/interfaces/user.interface';
// import { PurchaseDTO } from 'src/purchase/dto/purchase.dto';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly _userSvc: UserService) {}

  @Post()
  @ApiOperation({ summary: ' Create User ' })
  create(@Body() userDTO: UserDTO): Promise<IUser> {
    return this._userSvc.create(userDTO);
  }

  @Get()
  @ApiOperation({ summary: ' Find All Users ' })
  findAll() {
    return this._userSvc.findAll();
  }

  @Get(':userId')
  @ApiOperation({ summary: ' Find User ' })
  findOne(@Param('userId') userId: string): Promise<IUser> {
    return this._userSvc.findOne(userId);
  }

  @Put(':id')
  @ApiOperation({ summary: ' Update User ' })
  update(@Param('id') id: string, @Body() userDTO: UserDTO): Promise<IUser> {
    return this._userSvc.update(id, userDTO);
  }

  @Delete(':id')
  @ApiOperation({ summary: ' Delete User ' })
  delete(@Param('id') id: string) {
    return this._userSvc.delete(id);
  }

  @Get('assingPurchaseToClient/userId/:userId/purchaseId/:purchaseId')
  @ApiOperation({ summary: ' Assing Purchase To Client ' })
  assingPurchaseToClient(
    @Param('userId') userId: string,
    @Param('purchaseId') purchaseId: IPurchase,
  ): Promise<IUser> {
    return this._userSvc.assingPurchaseToClient(userId, purchaseId);
  }
}
