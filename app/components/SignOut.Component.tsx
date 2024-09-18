'use client'

import { signOut } from "next-auth/react";

function SignOutComponent(): React.ReactNode {
  return (
    <button 
    className="px-4 py-2"
    onClick={() => signOut()}
    >
        Sign Out
    </button>
  )
}

export default SignOutComponent;