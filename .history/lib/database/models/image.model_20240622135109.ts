import { transformationTypes } from "@/constans";
import { Schema } from "mongoose";
import { title } from "process";

const ImageSchema = new Schema({
    title: { type: String, require: true},
    transformationTypes: { type: String, require: true},
    publicId: {type : String, require: true},
    secureUrl: {type: String, require: true},

})