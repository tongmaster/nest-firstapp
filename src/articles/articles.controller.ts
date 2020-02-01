import { ArticlesService } from './articles.service';
import { Controller, Get, Param, Post, Body, Patch, Delete, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
    
   constructor(private articlesService:ArticlesService){}
    
    @Get('/')
    findAll(){
        return this.articlesService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id){
        return this.articlesService.findOne(id)
    }

    @Post('/')
    create(@Body() input ){
       return this.articlesService.create(input)
    }
    
    @Patch(':id')
    update(@Param('id') id , @Body() body){
      return this.articlesService.update(id,body)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    // @HttpCode(204)
    delete(@Param('id') id){
        this.articlesService.delete(id)
    }
}
