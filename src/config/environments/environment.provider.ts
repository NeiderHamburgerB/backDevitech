import { ConfigModule } from "@nestjs/config"
import localEnv from "./env/local.env"

export const EnvironmentProvider = ConfigModule.forRoot({
    isGlobal:true,
    load:[localEnv]
})