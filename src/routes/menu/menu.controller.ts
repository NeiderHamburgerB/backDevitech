import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { MenuDto, MenuUpdateDto } from './dto/menu.dto'
import { MenuService } from './menu.service'

@ApiTags('Menu')
@Controller('menu')
export class MenuController {

    constructor(private menuService:MenuService){}

    @ApiOperation({
        summary:'OBTENER PLATOS DEL MENU'
    }) 
    @Get('all')
    all(){
        return this.menuService.all()
    }

    
    @ApiOperation({
        summary:'CREAR PLATO DEL MENU'
    })
    @Post('create')
    create(@Body() data: MenuDto){
        return this.menuService.create(data)
    }

    @ApiOperation({
        summary:'OBTENER PLATO'
    })
    @Get('one/:id')
    one(@Param('id') _id:string){
        return this.menuService.one({_id})
    }

    @ApiOperation({
        summary:'ACTUALIZAR PLATO'
    })
    @Put('update/:id')
    update(@Param('id') id:string, @Body() data: MenuUpdateDto){
        return this.menuService.update(id,data)
    }

    @ApiOperation({
        summary:'ELIMINAR PLATO'
    })
    @Delete('delete/:id')
    delete(@Param('id') id:string){
        return this.menuService.delete(id)
    }

}
