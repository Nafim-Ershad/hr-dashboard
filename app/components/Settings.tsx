import { ReactNode } from "react";
import { getServerSession } from "next-auth";

async function Settings(): ReactNode{
    const session = await getServerSession();

    if(!session)
    {
        route
    }

    return(
        <ul className="w-[90%] h-fit flex flex-col items-center justify-start gap-4">
            <li className="w-[50%] h-10 grid grid-cols-3 grid-rows-1 drop-shadow-md border-b-[1px] border-gray-500">
                <span className="flex items-center justify-start">
                    Language
                </span>
                <span className="col-span-2 flex items-center justify-end">
                    <select name="language" className="w-28">
                        <option value="en">English</option>
                        <option value="bn">Bangla</option>
                        <option value="de">German</option>
                    </select>
                </span>
            </li>
            <li className="w-[50%] h-10 grid grid-cols-3 grid-rows-1 drop-shadow-md border-b-[1px] border-gray-500">
                <span className="flex items-center justify-start">
                    Theme
                </span>
                <span className="col-span-2 flex items-center justify-end">
                    <select name="theme" className="w-28">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </span>
            </li>
        </ul>
    )
}

export default Settings;