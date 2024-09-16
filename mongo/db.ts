import { connect, connection } from 'mongoose';

const URI = process.env.MONGO_URI;

export async function connectToDB(){
    try
    {
        if(connection.readyState === 0)
        {
            await connect(URI!, {
                dbName: "HR"
            });
            console.log("Connected to MongoDB");
        }
        else{
            console.log('Already connected to MongoDB');
        }
    }
    catch(err)
    {
        console.log(err);
    }
}