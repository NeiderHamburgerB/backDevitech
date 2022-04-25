import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './config/database/database.module'
import { EnvironmetModule } from './config/environments/environment.module'
import { MenuModule } from './routes/menu/menu.module'

@Module({
  imports: [
    EnvironmetModule,
    DatabaseModule,
    MenuModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
