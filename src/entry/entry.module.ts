import { Module } from '@nestjs/common';
import { EntryController } from './entry.controller';
import { Entry } from './entry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryService } from './entry.service';

@Module({
  imports: [TypeOrmModule.forFeature([Entry])],
  providers: [EntryService],
  controllers: [EntryController],
  exports: [TypeOrmModule]
})
export class EntryModule {}
