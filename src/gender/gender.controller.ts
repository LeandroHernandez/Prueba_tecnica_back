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
import { IGender } from 'src/common/interfaces/gender.interface';
import { GenderDTO } from './dto/gender.dto';
import { GenderService } from './gender.service';

@Controller('api/v1/gender')
export class GenderController {
  constructor(private readonly _genderSvc: GenderService) {}

  @Post()
  @ApiOperation({ summary: ' Create Gender ' })
  create(@Body() genderDTO: GenderDTO): Promise<IGender> {
    return this._genderSvc.create(genderDTO);
  }

  @Get()
  @ApiOperation({ summary: ' Find All Genders ' })
  findAll() {
    return this._genderSvc.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: ' Find Gender ' })
  findOne(@Param('id') id: string): Promise<IGender> {
    return this._genderSvc.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: ' Update Gender ' })
  update(
    @Param('id') id: string,
    @Body() genderDTO: GenderDTO,
  ): Promise<IGender> {
    return this._genderSvc.update(id, genderDTO);
  }

  @Delete(':id')
  @ApiOperation({ summary: ' Delete Gender ' })
  delete(@Param('id') id: string) {
    return this._genderSvc.delete(id);
  }
}
