import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  //Este constructor permite acceder a los metodos desde esta clase
  constructor(
    @InjectRepository(Category) //proviene de la entidad
    private readonly categoryRepository: Repository<Category>,
  ) {}

  

  async findOne(id: number) {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new NotFoundException({ error: 'Categoría no encontrada' });
    }
    return category;
  }

  
}
