import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { EntryService } from './entry.service';

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
  create(@Body() body) {
    return this.entryService.createOrUpdate(body);
  }

  @HttpCode(204)
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.entryService.remove(id);
  }
}
