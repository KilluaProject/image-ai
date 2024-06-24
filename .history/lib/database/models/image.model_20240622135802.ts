import { transformationTypes } from "@/constans";
import { Schema } from "mongoose";
import { config, title } from "process";

const ImageSchema = new Schema({
    title: { type: String, require: true},
    transformationTypes: { type: String, require: true},
    publicId: {type : String, require: true},
    secureUrl: {type: String, require: true},
    width : {type: Number},
    height : {type: Number},
    config : {type: Object},
    transformationUrl : {type: URL},
    aspectRatio: {type: String},
    color : {type: String},
    prompt : {type: String},
    author: {type: Schema.Types.ObjectId, reff:'user'}


})