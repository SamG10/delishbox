import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kit } from './entities/kit.entity';
import { KitsController } from './kits.controller';
import { KitsService } from './kits.service';

@Module({
  imports: [TypeOrmModule.forFeature([Kit])],
  controllers: [KitsController],
  providers: [KitsService],
})
export class KitsModule {}
