import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateKitDto } from './dto/create-kit.dto';
import { UpdateKitDto } from './dto/update-kit.dto';
import { KitsService } from './kits.service';

@Controller('kits')
export class KitsController {
  constructor(private readonly kitsService: KitsService) {}

  @Post('/')
  async createKit(@Body() createKitDto: CreateKitDto) {
    return this.kitsService.createKit(createKitDto);
  }

  @Get('/')
  getKits() {
    return this.kitsService.getKits();
  }

  @Get('/:slug')
  getKit(@Param('slug') slug: string) {
    return this.kitsService.getKit(slug);
  }

  @Patch('/:id')
  async updateKit(@Param('id') id: string, @Body() updateKitDto: UpdateKitDto) {
    return this.kitsService.updateKit(id, updateKitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kitsService.remove(id);
  }
}
