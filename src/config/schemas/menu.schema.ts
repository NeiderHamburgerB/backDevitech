import { Schema } from "mongoose"

export const MenuSchema = new Schema({

    name:{
        type:String
    },
    price:{
        type:String
    },
    ingredients:[
        {
            type:String
        }
    ]
},
{
    timestamps:true,
    versionKey:false
}
)