import { Global, Module } from '@nestjs/common';
import { EntryModule } from './modules/entry/entry.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from './modules/entry/entry.entity';
import { CommentModule } from './modules/comment/comment.module';
import { Comment } from './modules/comment/comment.entity';

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
      entities: [Entry, Comment],
      synchronize: true,
    }),
    EntryModule,
    CommentModule,
  ],
})
export class AppModule {}
