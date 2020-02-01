import { Controller, Get, Param, Post, Body, Patch, Delete, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
    
    artitcles = [
        {id : '1', title : 'Title#1' , body : 'Body#1'},
        {id : '2', title : 'Title#2', body : 'Body#2'},
        {id : '3', title : 'Title#3', body : 'Body#3'},
        {id : '4', title : 'Title#4', body : 'Body#4'}
        
    ]
    
    @Get('/')
    findAll(){
        return this.artitcles
    }

    @Get(':id')
    findOne(@Param('id') id){
        return this.artitcles.find(articles => articles.id === id)
    }

    @Post('/')
    create(@Body() input ){
        const article = {...input , id : +new Date()}
        this.artitcles.push(article)
        return article
    }
    
    @Patch(':id')
    update(@Param('id') id , @Body() body){
        const article = this.artitcles.find(article => article.id ===id)
        // article.body
        for(let key in body){
            article[key] = body[key]
        }
        return article
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    // @HttpCode(204)
    delete(@Param('id') id){
        this.artitcles = this.artitcles.filter(article => article.id !== id)
    }
}
