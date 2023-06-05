import { Global, Module } from '@nestjs/common';
import { EntryService } from './entry/entry.service';
import { EntryModule } from './entry/entry.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Entry } from './entry/entry.entity';
import { EntryController } from './entry/entry.controller';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'nest',
      database: 'nestexample',
      entities: [Entry],
      synchronize: true,
    }),
    EntryModule,
  ],
  controllers: [ EntryController],
  providers: [EntryService,],
  exports: [EntryService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
