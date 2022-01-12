import { Schema, model, models } from 'mongoose'
/** Model of the user. */
const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
}, {
    timestamps: true
});

export default models.User || model('User', UserSchema);