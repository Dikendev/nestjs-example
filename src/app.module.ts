import { Global, Module } from '@nestjs/common';
import { EntryModule } from './entry/entry.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from './entry/entry.entity';

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
})
export class AppModule {
}
