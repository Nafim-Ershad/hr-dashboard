import { ReactNode } from "react";

async function Settings(): Promise<ReactNode>{

    return(
        <ul className="w-[95%] h-fit border border-gray-500 rounded-md flex flex-col itemsstart justify-start">
            <li className="w-full h-12 grid grid-cols-2 grid-rows-1 border-b border-gray-500 hover:bg-gray-500/5">
                <span className="px-8 flex items-center justify-start">
                    Language
                </span>
                <span className="flex items-center justify-start">
                    <select name="language" className="w-32 h-8">
                        <option value="en">English</option>
                        <option value="bn">Bangla</option>
                        <option value="de">German</option>
                    </select>
                </span>
            </li>
            <li className="w-full h-12 grid grid-cols-2 grid-rows-1 border-gray-500 hover:bg-gray-500/5">
                <span className="px-8 flex items-center justify-start">
                    Theme
                </span>
                <span className="flex items-center justify-start">
                    <select name="theme" className="w-32 h-8">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </span>
            </li>
        </ul>
    )
}

export default Settings;