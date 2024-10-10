'use client'

import { createContext, useState, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

// Providers
import { UserProvider } from './UserProvider';
import { UserSettingsProvider } from './UserSettingsProvider';

type AppState = {
    navExtended: boolean,
    currentPage: 'dashboard' | 'employees' | 'company' | 'settings'
}

interface ContextType{
    appState: AppState,
    setAppState: (newState: AppState) => void
}

const initialState: AppState = {
    navExtended: false,
    currentPage: 'dashboard'
}

export const AppContext = createContext<ContextType>({
    appState: 
    {
        ...initialState
    },
    setAppState: () => {}
});

export const AppProvider = ({ children }: { children: ReactNode }): ReactNode => {
    const [ appState, setAppState ] = useState<AppState>({
        ...initialState
    })
    return(
        <AppContext.Provider value={{appState, setAppState}}>
            <SessionProvider>
                <UserProvider>
                    <UserSettingsProvider>
                        { children }
                    </UserSettingsProvider>
                </UserProvider>
            </SessionProvider>
        </AppContext.Provider>
    )
}