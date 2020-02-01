import { CategoriesModule } from './../categories/categories.module';
import { UsersModule } from './../users/users.module';
import { CommentsModule } from './../comments/comments.module';
import { ArticlesModule } from './../articles/articles.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AddressesModule } from 'src/addresses/addresses.module';
@Module({
  imports: [
    ArticlesModule,
    TypeOrmModule.forRoot(),
    CommentsModule,
    UsersModule,
    CategoriesModule,
    AddressesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
