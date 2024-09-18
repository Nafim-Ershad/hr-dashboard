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
        required: [ true, "Requires password"],
        select: false // By default doesnot get the password unless called upon
    },
    firstname: 
    {
        type: String,
        default: ""
    },
    lastname:
    {
        type: String,
        default: ""
    },
    email: 
    {
        type: String,
        required: [ true, "Requires email"],
        unique: [true, "Email already exists"]
    },
    phone:
    {
        type: String
    },
    company: 
    {
        type: Schema.Types.ObjectId,
        ref: 'Company'
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
    },
    ID:
    {
        type: String,
        unique: [true, "Employee ID already exists"]
    },
    isAdmin: 
    {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});

export default userSchema;