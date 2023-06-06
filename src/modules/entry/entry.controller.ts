import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { EntryService } from './entry.service';
import { Entry } from './entry.entity';
import { Comment } from '../comment/comment.entity';

@Controller('/entry')
export class EntryController {
  constructor(private entryService: EntryService) {}

  @Get()
  findAll() {
    return this.entryService.findAll();
  }

  @Get('/:id')
  findOneById(@Param('id') id: string) {
    return this.entryService.findOneById(id);
  }

  @Post()
  async create(@Body() input: { entry: Entry; comments: Comment[] }) {
    const { entry, comments } = input;
    entry.comments = comments;

    return this.entryService.createOrUpdate(entry);
  }

  @HttpCode(204)
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.entryService.remove(id);
  }
}
