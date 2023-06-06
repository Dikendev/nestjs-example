import { Global, Module } from '@nestjs/common';
import { EntryModule } from './modules/entry/entry.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from './modules/entry/entry.entity';
import { CommentService } from './modules/comment/comment.service';
import { CommentModule } from './modules/comment/comment.module';

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
    CommentModule,
  ],
  providers: [CommentService],
})
export class AppModule {}
