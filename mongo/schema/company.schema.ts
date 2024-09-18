import { Schema } from "mongoose";
import userSchema from "./user.schema";

const companySchema = new Schema({
    name: 
    {
        type: String,
        default: "",
        unique: [true, "Name already exists"]
    },
    industry: 
    {
        type: String,
        default: "",
        unique: [true, "Industry name already exists"]
    },
    employees: 
    [
        userSchema
    ],
    address:
    {
        type: String,
        default: ""
    },
    established: 
    {
        type: Date 
    }
}, 
{
    timestamps: true
});

export default companySchema;