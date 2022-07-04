import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './modules/book/book.module';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [BookModule, PostModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
