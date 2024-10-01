'use client'

import { signOut } from "next-auth/react";
import { useContext } from "react";

import { AppContext } from "../providers/AppProvider";

function SignOutComponent(): React.ReactNode {

  const { appState } = useContext(AppContext);

  return (
    <button 
    className={`${appState.navExtended ? "w-[90%]" : "w-12"} h-12 rounded-md flex items-center justify-center border border-solid border-black hover:bg-red-600 hover:text-white hover:border-white`}
    onClick={() => signOut()}
    >
      {
        appState.navExtended ?
        <div className="w-full h-full px-2 py-1 flex items-center justify-between">
          <span className="material-symbols-outlined w-8 aspect-square flex items-center justify-center text-xl">
            power_settings_new
          </span>
          <span className="w-full h-full flex items-center justify-center font-bold">
            LOGOUT
          </span>
        </div>
        :
        <span className="material-symbols-outlined w-full h-full flex items-center justify-center">
          power_settings_new
        </span>
      }
    </button>
  )
}

export default SignOutComponent;