import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKitDto } from './dto/create-kit.dto';
import { UpdateKitDto } from './dto/update-kit.dto';
import { Kit } from './entities/kit.entity';

@Injectable()
export class KitsService {
  constructor(
    @InjectRepository(Kit) private readonly kitRepository: Repository<Kit>,
  ) {}

  async createKit(createKitDto: CreateKitDto): Promise<Kit> {
    const kit = this.kitRepository.create({
      ...createKitDto,
      ingredients: JSON.stringify(createKitDto.ingredients),
    });
    return this.kitRepository.save(kit);
  }

  async getKits(): Promise<Kit[]> {
    return this.kitRepository.find();
  }

  async getKit(slug: string): Promise<Kit | null> {
    const kit = await this.kitRepository.findOne({ where: { slug } });

    if (!kit) {
      throw new NotFoundException(`Kit with slug "${slug}" not found`);
    }

    return kit;
  }

  async updateKit(id: string, updateKitDto: UpdateKitDto) {
    const kit = await this.kitRepository.findOne({
      where: { id },
    });

    if (!kit) {
      throw new NotFoundException(`Kit with ID "${id}" not found`);
    }

    Object.assign(kit, updateKitDto);
    return this.kitRepository.save(kit);
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.kitRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Kit with ID "${id}" not found`);
    }

    return { message: 'Kit deleted successfully' };
  }
}
