'use client'

import { createContext, useState, ReactNode } from 'react';

type UserSettingsState = {
    theme: 'dark' | 'light',
    lang: 'en' | 'de' | 'bn'
}

interface UserSettingsContextType{
    appState: UserSettingsState,
    setAppState: (newState: UserSettingsState) => void
}

const initialState: UserSettingsState = {
    theme: 'light',
    lang: 'en'
}

export const UserSettingsContext = createContext<UserSettingsContextType>({
    appState: 
    {
        ...initialState
    },
    setAppState: () => {}
});

export const UserSettingsProvider = ({ children }: { children: ReactNode }): ReactNode => {
    const [ appState, setAppState ] = useState<UserSettingsState>({
        ...initialState
    })
    return(
        <UserSettingsContext.Provider value={{appState, setAppState}}>
            { children }
        </UserSettingsContext.Provider>
    )
}