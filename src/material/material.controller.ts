import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
  } from '@nestjs/common';
  import { MaterialService } from './material.service';
  import { CreateMaterialDto } from './dto/material.dto';
  
  @Controller('material')
  export class MaterialController {
    constructor(private readonly materialServiceRepo: MaterialService) {}
  
    @Post()
    create(@Body() materialDto: CreateMaterialDto) {
      return this.materialServiceRepo.create(materialDto);
    }
  
  
    @Get()
    findAll() {
      return this.materialServiceRepo.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.materialServiceRepo.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
      return this.materialServiceRepo.remove(id);
    }
  
  
    @Patch(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updatedMaterialDto: CreateMaterialDto,
    ) {
  return this.materialServiceRepo.update(id, updatedMaterialDto);
    }
  }