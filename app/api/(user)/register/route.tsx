import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

import { connectToDB } from "@/mongo/db";
import User from "@/mongo/model/user.model";

export async function POST(request: NextRequest, response: NextResponse){
    try
    {
        const {email, password, username} = await request.json();
        
        await connectToDB();

        const exists = await User.findOne({ username });

        // Checking if user exists
        if(exists)
        {
            return new NextResponse(JSON.stringify({
                message: "User already exists",
                status: 500
            })); 
        }

        // Password hashing
        const salt = bcrypt.genSaltSync(16);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            email, 
            username,
            password: hashedPassword
        });

        await user.save();

        return new NextResponse(JSON.stringify({
            message: "Registered successfully",
            status: response.status
        }));
    }
    catch(err)
    {
        return new NextResponse(JSON.stringify({
            message: err,
            status: response.status
        }))
    }

}