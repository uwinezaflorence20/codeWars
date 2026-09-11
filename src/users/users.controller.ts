import { Body, Controller, Delete, Get, Param,Patch,Post, Query } from '@nestjs/common';

@Controller('users')// /users
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users/
    PATCH /users/:id
    DELETE /users/:id
    */
   @Get() // GET /users or /users?role=value
   findAll(@Query('role') role?:"INTERN" | "ENGINEER" | "ADMIN"){
    return []
   }
//    @Get('interns') // GET / users/interns
//    findAllInterns(){
//     return []
//    }

   @Get(':id') //  GET /users/:id
   findOne(@Param('id') id: string){
    return {id}
   }
   @Post() // posting or creating the user
   create(@Body() user:{}){
      return user
   }
   @Patch(':id') //  GET /users/:id
   update(@Param('id') id: string, @Body() userUpdate: {}){
    return {id, ...userUpdate}
   }

   @Delete(':id') //  GET /users/:id
   delete(@Param('id') id: string){
    return {id}
   }

   
}
