import { ArticlesQuery } from './article.query';
import { Injectable } from '@nestjs/common';
import {Article} from './article'
import { UpdateArticleInput } from './update-article.input';

@Injectable()
export class ArticlesService {
    artitcles : Article[] = [
        {id : '1', title : 'Title#1' , body : 'Body#1'},
        {id : '2', title : 'Title#2', body : 'Body#2'},
        {id : '3', title : 'Title#3', body : 'Body#3'},
        {id : '4', title : 'Title#4', body : 'Body#4'},
        {id : '5', title : 'Title5', body : 'Body#5'}
        
    ]
    findAll():Article[]{
        return this.artitcles
    }

    findAllWithQuery(query : ArticlesQuery):Article[]{
        console.log(query.title)
        return this.artitcles.filter(article => article.title === query.title)
    }

    findOne(id : string ):Article{
        return this.artitcles.find(articles => articles.id === id)
    }

    create(input):Article{
        const article = {...input , id : +new Date()}
        this.artitcles.push(article)
        return article
    }

    update(id : string ,body: UpdateArticleInput):Article{
        const article = this.artitcles.find(article => article.id ===id)
        // article.body
        for(let key in body){
            article[key] = body[key]
        }
        return article
    }
    delete(id:string ):void{
        this.artitcles = this.artitcles.filter(article => article.id !== id)
    }
}
 