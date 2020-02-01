import { Controller, Get, Param } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
    
    artitcles = [
        {id : '1', title : 'Title' , body : 'Body#1'},
        {id : '2', title : 'Title', body : 'Body#2'}
        
    ]
    
    @Get('/')
    findAll(){
        return [{id : 1, title : 'Title'}]
    }

    @Get(':id')
    findOne(@Param('id') id){
        return this.artitcles.find(articles => articles.id === id)
    }
}
