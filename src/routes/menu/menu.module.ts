import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MenuSchema } from 'src/config/schemas/menu.schema'
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
    imports:[
        MongooseModule.forFeature([{
            name:'Menu',
            schema:MenuSchema,
            collection:'Menu'
        }])
    ],
    controllers: [MenuController],
    providers: [MenuService]
})
export class MenuModule {}
