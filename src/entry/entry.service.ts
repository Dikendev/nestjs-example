import { Injectable } from '@nestjs/common';
import { Entry } from './entry.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(Entry)
    private entryRepository: Repository<Entry>,
  ) {}

  async findAll(): Promise<Entry[]> {
    return this.entryRepository.find();
  }

  async findOneById(id: number): Promise<Entry> {
    const options: FindOneOptions<Entry> = {
      where: { id },
    };
    return this.entryRepository.findOne(options);
  }

  async createOrUpdate(newEntry: Entry): Promise<Entry> {
    return this.entryRepository.save(newEntry);
  }
}
