import { INestApplication } from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

export const Swagger = (app:INestApplication) => {

    const config = new DocumentBuilder()
        .setTitle('API CRUD')
        .setDescription('PRUEBA DEVITECH')
        .setVersion('0.1')
        .addBearerAuth()
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs',app,document)

}