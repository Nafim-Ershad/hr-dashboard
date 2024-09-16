import { Schema } from 'mongoose';
const userSchema = new Schema({
    username: 
    {
        type: String,
        required: [true, "Requires username"],
        unique: [true, "Username already taken"]
    },
    password:
    {
        type: String,
        required: [ true, "Requires password"]
    },
    email: 
    {
        type: String,
        required: [ true, "Requires email"]
    },
    company: 
    {
        type: String,
        default: ""
    },
    department: 
    {
        type: String,
        default: ""
    },
    position: 
    {
        type: String,
        default: ""
    },
    dateOfJoin: 
    {
        type: Date
    },
    dateOfLeave:
    {
        type: Date
    }
}, {
    timestamps: true
});

export default userSchema;