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
import { IProduct } from 'src/common/interfaces/product.interface';
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('api/v1/product')
export class ProductController {
  constructor(private readonly _productSvc: ProductService) {}

  @Post()
  @ApiOperation({ summary: ' Create Product ' })
  create(@Body() productDTO: ProductDTO) {
    return this._productSvc.create(productDTO);
  }

  @Get()
  @ApiOperation({ summary: ' Find All Products ' })
  findAll() {
    return this._productSvc.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: ' Find Product ' })
  findOne(@Param('id') id: string): Promise<IProduct> {
    return this._productSvc.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: ' Update Product ' })
  update(
    @Param('id') id: string,
    @Body() productDTO: ProductDTO,
  ): Promise<IProduct> {
    return this._productSvc.update(id, productDTO);
  }

  @Delete(':id')
  @ApiOperation({ summary: ' Delete Product ' })
  delete(@Param('id') id: string) {
    return this._productSvc.delete(id);
  }
}
