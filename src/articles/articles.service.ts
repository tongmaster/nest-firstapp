import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
    artitcles = [
        {id : '1', title : 'Title#1' , body : 'Body#1'},
        {id : '2', title : 'Title#2', body : 'Body#2'},
        {id : '3', title : 'Title#3', body : 'Body#3'},
        {id : '4', title : 'Title#4', body : 'Body#4'}
        
    ]
    findAll(){
        return this.artitcles
    }

    findOne(id){
        return this.artitcles.find(articles => articles.id === id)
    }

    create(input){
        const article = {...input , id : +new Date()}
        this.artitcles.push(article)
        return article
    }

    update(id,body){
        const article = this.artitcles.find(article => article.id ===id)
        // article.body
        for(let key in body){
            article[key] = body[key]
        }
        return article
    }
    delete(id){
        this.artitcles = this.artitcles.filter(article => article.id !== id)
    }
}
