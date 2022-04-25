import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as Auth from 'express-basic-auth'
import { Swagger } from './app.swagger'
import * as cors from 'cors'

declare const module: any;



async function bootstrap() {

  const app = await NestFactory.create(AppModule)

  app.use('/api/docs', Auth({
    challenge:true,
    users:{hamburger: `${process.env.SWAGGER_PASS}`}
  }))

  Swagger(app)

  const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

  await app.listen(3000)
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}
bootstrap();
