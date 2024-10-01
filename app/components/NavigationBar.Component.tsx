'use client'

import React from "react";
import { useContext } from "react";

import SignOutComponent from "./SignOut.Component";

import { AppContext } from "../providers/AppProvider";
import Link from "next/link";

function NavigationBar(): React.ReactNode{
    const { appState, setAppState } = useContext(AppContext);
    const { navExtended } = appState;

    const handleNavExtension = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.preventDefault();

        setAppState({
            ...appState,
            navExtended: !appState.navExtended
        })
    }

    const handleLinkClick = (state: "dashboard" | "employees" | "company" | "settings") => {
        setAppState({
            ...appState,
            currentPage: state
        });
    }   

    return(
        <nav 
        className={`relative transition-all ease-out duration-700 ${navExtended ? 'w-48' : 'w-20'} h-screen py-4 flex flex-col items-center justify-between border-solid border-r border-r-black`}
        >
            <div className="absolute left-full top-1/2 -translate-x-1/3 -translate-y-1/2 w-10 aspect-square flex items-center justify-center border border-solid border-black rounded-xl bg-white hover:cursor-pointer">
                <span 
                className="material-symbols-outlined w-full h-full flex items-center justify-center"
                onClick={handleNavExtension}
                >
                    { navExtended ? 'chevron_left' : 'chevron_right' }
                </span>
            </div>

            {/* Logo */}
            <div className="w-full h-auto flex items-center justify-center ">
                {
                    navExtended ?
                    <img src="" alt="logo" />
                    :
                    <img src="" alt="short-logo" />
                }
            </div>
            <div className="w-[95%] px-2 py-1 flex flex-col items-center justify-between gap-4">
                {
                    appState.navExtended ?
                    <>
                        <Link
                        href={'/dashboard'} 
                        className={`w-full h-12 px-3 py-1 flex items-center justify-between border-2 border-solid border-transparent rounded-xl hover:border-black ${appState.currentPage === 'dashboard' ? "bg-black text-white border-none hover:border-none" : ""}`}
                        onClick={()=>handleLinkClick('dashboard')}
                        >
                            <span className={`material-symbols-outlined h-full aspect-square flex items-center justify-center`}>
                                space_dashboard
                            </span>
                            <span className="w-full h-full flex items-center justify-start text-md font-semibold">Dashbaord</span>
                        
                        </Link>
                        <Link
                        href={'/employees'} 
                        className={`w-full h-12 px-3 py-1 flex items-center justify-between border-2 border-solid border-transparent rounded-xl hover:border-black ${appState.currentPage === 'employees' ? "bg-black text-white border-none hover:border-none" : ""}`}
                        onClick={()=>handleLinkClick('employees')}
                        >
                            <span className={`material-symbols-outlined h-full aspect-square flex items-center justify-center`}>
                                group
                            </span>
                            <span className="w-full h-full flex items-center justify-start text-md font-semibold">Employees</span>
                        </Link>
                        <Link
                        href={'/company'} 
                        className={`w-full h-12 px-3 py-1 flex items-center justify-between border-2 border-solid border-transparent rounded-xl hover:border-black ${appState.currentPage === 'company' ? "bg-black text-white border-none hover:border-none" : ""}`}
                        onClick={()=>handleLinkClick('company')}
                        >
                            <span className={`material-symbols-outlined h-full aspect-square flex items-center justify-center`}>
                                apartment
                            </span>
                            <span className="w-full h-full flex items-center justify-start text-md font-semibold">Company</span>
                        </Link>
                        <Link
                        href={'/settings'} 
                        className={`w-full h-12 px-3 py-1 flex items-center justify-between border-2 border-solid border-transparent rounded-xl hover:border-black ${appState.currentPage === 'settings' ? "bg-black text-white border-none hover:border-none" : ""}`}
                        onClick={()=>handleLinkClick('settings')}
                        >
                            <span className={`material-symbols-outlined h-full aspect-square flex items-center justify-center`}>
                                settings
                            </span>
                            <span className="w-full h-full flex items-center justify-start text-md font-semibold">Settings</span>
                        </Link>
                    </>
                    :
                    <>
                        <Link 
                        className={`material-symbols-outlined w-8 aspect-square flex items-center justify-center border-2 border-solid border-transparent rounded-md hover:border-black ${appState.currentPage === 'dashboard' ? "bg-black text-white border-none hover:border-none" : ""}`}
                        href="/dashboard"
                        onClick={()=>handleLinkClick('dashboard')}
                        >
                            space_dashboard
                        </Link>
                        <Link 
                        className={`material-symbols-outlined w-8 aspect-square flex items-center justify-center border-2 border-solid border-transparent rounded-md hover:border-black ${appState.currentPage === 'employees' ? "bg-black text-white border-none hover:border-none" : ""}`}
                        href="/employees"
                        onClick={()=>handleLinkClick('employees')}
                        >
                            group
                        </Link>
                        <Link 
                        className={`material-symbols-outlined w-8 aspect-square flex items-center justify-center border-2 border-solid border-transparent rounded-md hover:border-black ${appState.currentPage === 'company' ? "bg-black text-white border-none hover:border-none" : ""}`}
                        href="/comapny"
                        onClick={()=>handleLinkClick('company')}
                        >
                            apartment
                        </Link>
                        <Link 
                        className={`material-symbols-outlined w-8 aspect-square flex items-center justify-center border-2 border-solid border-transparent rounded-md hover:border-black ${appState.currentPage === 'settings' ? "bg-black text-white border-none hover:border-none" : ""}`}
                        href="/settings"
                        onClick={()=>handleLinkClick('settings')}
                        >
                            settings
                        </Link>
                    </>
                }
            </div>

            <SignOutComponent/>
        </nav>
    )
}

export default NavigationBar;