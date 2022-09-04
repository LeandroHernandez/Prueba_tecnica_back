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
import { PurchaseDTO } from './dto/purchase.dto';
import { PurchaseService } from './purchase.service';

@Controller('api/v1/purchase')
export class PurchaseController {
  constructor(private readonly _purchaseSvc: PurchaseService) {}

  @Post()
  @ApiOperation({ summary: ' Create Purchase ' })
  create(@Body() purchaseDTO: PurchaseDTO): Promise<IPurchase> {
    return this._purchaseSvc.create(purchaseDTO);
  }

  @Get()
  @ApiOperation({ summary: ' Find All Purchases ' })
  findAll() {
    return this._purchaseSvc.findAll();
  }

  @Get(':purchaseId')
  @ApiOperation({ summary: ' Find Purchase ' })
  findOne(@Param('purchaseId') purchaseId: string): Promise<IPurchase> {
    return this._purchaseSvc.findOne(purchaseId);
  }

  @Put(':purchaseId')
  @ApiOperation({ summary: ' Update Purchase ' })
  update(
    @Param('purchaseId') purchaseId: string,
    @Body() purchaseDTO: PurchaseDTO,
  ): Promise<IPurchase> {
    return this._purchaseSvc.update(purchaseId, purchaseDTO);
  }

  @Delete(':purchaseId')
  @ApiOperation({ summary: ' Delete Purchase ' })
  delete(@Param('purchaseId') purchaseId: string) {
    return this._purchaseSvc.delete(purchaseId);
  }
}
