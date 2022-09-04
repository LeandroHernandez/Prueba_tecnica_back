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
import { IAdmin } from 'src/common/interfaces/admin.interface';
import { ProductDTO } from 'src/product/dto/product.dto';
import { AdminService } from './admin.service';
import { AdminDTO } from './dto/admin.dto';

@Controller('api/v1/admin')
export class AdminController {
  constructor(private readonly _adminSvc: AdminService) {}

  @Post()
  @ApiOperation({ summary: ' Create Admin ' })
  create(@Body() adminDTO: AdminDTO): Promise<IAdmin> {
    return this._adminSvc.create(adminDTO);
  }

  @Get()
  @ApiOperation({ summary: ' Find All Admins ' })
  findAll() {
    return this._adminSvc.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: ' Find Admin ' })
  findOne(@Param('id') id: string): Promise<IAdmin> {
    return this._adminSvc.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: ' Update Admin ' })
  update(@Param('id') id: string, @Body() adminDTO: AdminDTO): Promise<IAdmin> {
    return this._adminSvc.update(id, adminDTO);
  }

  @Delete(':id')
  @ApiOperation({ summary: ' Delete Admin ' })
  delete(@Param('id') id: string) {
    return this._adminSvc.delete(id);
  }
}
