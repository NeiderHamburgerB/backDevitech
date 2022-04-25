import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsNumber ,IsArray } from 'class-validator'
export class MenuDto {

    @IsString()
    @ApiProperty({
        type:String
    })
    name:string

    @IsNumber()
    @ApiProperty({
        type:Number
    })
    price:number
    

    @IsArray()
    @ApiProperty({
        type:Array
    })
    ingredients:string[]

}

export class MenuUpdateDto {

    @IsString()
    @ApiPropertyOptional({
        type:String
    })
    name?:string

    @IsNumber()
    @ApiProperty({
        type:Number
    })
    price?:number
    

    @IsArray()
    @ApiPropertyOptional({
        type:Array
    })
    ingredients?:string[]

}