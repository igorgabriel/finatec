import * as mongoose from "mongoose";

export interface IProject extends mongoose.Document {
    initial:String,
    name: String,
    description: String
}

export const ProjectSchema = new mongoose.Schema({
    initial: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true}
})

const Project = mongoose.model('project', ProjectSchema)

export default Project

