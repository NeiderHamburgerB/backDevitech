import { Injectable, Param } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { MenuDto, MenuUpdateDto } from './dto/menu.dto'
import { IMenu, ISearch } from './interfaces/menu.interface'


@Injectable()
export class MenuService {

    constructor(@InjectModel('Menu') private menu:Model<IMenu>){}

    async all():Promise<IMenu[]>{
        return await this.menu
                .find()
                .select('-createdAt -updatedAt')
    }

    async create(data:MenuDto):Promise<String>{
        const acknowledged = await this.menu.updateOne(
            {
            name: data.name
            },
            {
                $set:data
            },
            {upsert:true}
        )
        if(acknowledged) return 'operation success'
    }

    async one(data:ISearch): Promise<IMenu> {
        return await this.menu
                    .findById(data)
                    .select('-createdAt -updatedAt')
    }

    async update(id:string, data:MenuUpdateDto):Promise<IMenu>{
        return await this.menu.findByIdAndUpdate({_id:id}, data, {new:true})
    }

    async delete(id:string):Promise<String>{
        await this.menu.findByIdAndDelete(id)
        return 'deleted'
    }


}
