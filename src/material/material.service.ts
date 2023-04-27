import { Body, Delete, Injectable, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Material } from './entities/material.entity';
import { CreateMateDto } from './dto/material.dto';

@Injectable()
export class MaterialService {
  constructor(
    @InjectRepository(Material)
    private readonly mateRepository: Repository<Material>,
  ) {}

  //Metodo para crear un producto
  async create(mateDto: CreateMateDto) {
    const mate = this.mateRepository.create(mateDto);
    await this.mateRepository.save(mate);

    return mate;
  }

  //Metodo para visualizar todos los productos
  findAll() {
    return this.mateRepository.find();
  }

  //Metodo para visualizar un producto especifico
  findOne(id: string) {
    return this.mateRepository.findOneBy({ id });
  }

  //Remover un producto especifico
  async remove(id: string) {
    const mate = await this.findOne(id);
    await this.mateRepository.remove(mate);
    return 'Material eliminado correctamente';
  }

  //Actualizar un producto especifico
  async update(id: string, cambios: CreateMateDto) {
    const findMaterial = await this.findOne(id);
    const updatedMaterial = await this.mateRepository.merge(
      findMaterial,
      cambios,
    );

      return this.mateRepository.save(updatedMaterial);
    
  }
}
