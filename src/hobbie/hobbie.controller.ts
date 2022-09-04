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
import { IHobbie } from 'src/common/interfaces/hobbie.interface';
import { HobbieDTO } from './dto/hobbie.dto';
import { HobbieService } from './hobbie.service';

@Controller('api/v1/hobbie')
export class HobbieController {
  constructor(private readonly _hobbieSvc: HobbieService) {}

  @Post()
  @ApiOperation({ summary: ' Create Hobbie ' })
  create(@Body() hobbieDTO: HobbieDTO): Promise<IHobbie> {
    return this._hobbieSvc.create(hobbieDTO);
  }

  @Get()
  @ApiOperation({ summary: ' Find All Hobbies ' })
  findAll() {
    return this._hobbieSvc.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: ' Find Hobbie ' })
  findOne(@Param('id') id: string): Promise<IHobbie> {
    return this._hobbieSvc.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: ' Update Hobbie ' })
  update(
    @Param('id') id: string,
    @Body() hobbieDTO: HobbieDTO,
  ): Promise<IHobbie> {
    return this._hobbieSvc.update(id, hobbieDTO);
  }

  @Delete(':id')
  @ApiOperation({ summary: ' Delete Hobbie ' })
  delete(@Param('id') id: string) {
    return this._hobbieSvc.delete(id);
  }
}
