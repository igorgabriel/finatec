import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    email:String,
    password: String,
    name: String
}

export const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true}
})

const User = mongoose.model('user', UserSchema)

export default User

