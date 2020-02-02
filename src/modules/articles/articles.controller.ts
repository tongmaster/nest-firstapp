import { UpdateArticleInput } from "./update-article.input";
import { CreateArticleInput } from "./create-article.input";
import { ArticlesQuery } from "./article.query";
import { ArticlesService } from "./articles.service";
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
  ValidationPipe,
  UsePipes
} from "@nestjs/common";

@Controller("articles")
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get("/")
  findAll() {
    return this.articlesService.findAll();
  }

  @Get("/")
  findAllA(@Query() query: ArticlesQuery) {
    return this.articlesService.findAllWithQuery(query);
  }

  @Get(":id")
  findOne(@Param("id") id) {
    return this.articlesService.findOne(id);
  }

  @Post("/")
  //   @UsePipes(ValidationPipe)
  create(@Body() input: CreateArticleInput) {
    return this.articlesService.create(input);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body: UpdateArticleInput) {
    return this.articlesService.update(id, body);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  // @HttpCode(204)
  delete(@Param("id") id: string) {
    return this.articlesService.delete(id);
  }
}
