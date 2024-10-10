'use client'

import { useState, createContext, ReactNode } from 'react';

import { getUserbyEmail } from '@/mongo/db';

type UserType = {
    username: string
    firstname: string,
    lastname: string,
    email: string,
    phone: string
    company: string,
    department: string,
    position: string,
    dateOfJoin: Date,
    dateOfLeave: Date,
    ID: string,
    isAdmin: boolean,
    verified: boolean
}

type ContextType = {
    user: UserType | null,
    setUser: (newState: UserType | null) => void
}

const initialState: UserType | null = null;

const UserContext = createContext<ContextType>({
    user: initialState,
    setUser: () => {}
})

export function UserProvider({ children }: { children: ReactNode }): ReactNode{
    const [user, setUser] = useState<UserType | null>(initialState)

    getUserbyEmail();  

    return(
        <UserContext.Provider value={{user, setUser}} >
            { children }
        </UserContext.Provider>
    )
}

