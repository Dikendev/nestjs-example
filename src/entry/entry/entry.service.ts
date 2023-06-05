import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entry } from './entry.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(Entry) private readonly entry: Repository<Entry>
  ){}
}
