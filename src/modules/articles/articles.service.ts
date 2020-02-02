import { CreateArticleInput } from "./create-article.input";
import { ArticlesQuery } from "./article.query";
import { Injectable } from "@nestjs/common";
import { UpdateArticleInput } from "./update-article.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Article } from "./article.entity";

@Injectable()
export class ArticlesService {
  // artitcles : Article[] = [
  //     {id : '1', title : 'Title#1' , body : 'Body#1'},
  //     {id : '2', title : 'Title#2', body : 'Body#2'},
  //     {id : '3', title : 'Title#3', body : 'Body#3'},
  //     {id : '4', title : 'Title#4', body : 'Body#4'},
  //     {id : '5', title : 'Title5', body : 'Body#5'}

  // ]
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>
  ) {}
  findAll() {
    return this.articlesRepository.find();
  }

  findAllWithQuery(query: ArticlesQuery) {
    console.log(query.title);
    return this.articlesRepository.find({ ...query, relations: ["comments"] });
  }

  findOne(id: string) {
    return this.articlesRepository.findOne(id);
  }

  create(input: CreateArticleInput) {
    // const article = new Article()
    // article.title = input.title
    // article.body = input.body
    const article = this.articlesRepository.create(input);
    return this.articlesRepository.save(article);
  }

  async update(id: string, input: UpdateArticleInput) {
    let article = await this.articlesRepository.findOne(id);
    article = this.articlesRepository.merge(article, input);
    return this.articlesRepository.save(article);
  }
  delete(id: string) {
    // this.artitcles = this.artitcles.filter(article => article.id !== id)
    return this.articlesRepository.delete(id);
  }
}
