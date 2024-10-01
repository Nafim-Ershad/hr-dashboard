'use client'

import { createContext, useState } from 'react';

type AppState = {
    navExtended: boolean,
    theme: 'dark' | 'light',
    currentPage: 'dashboard' | 'employees' | 'company' | 'settings'
}

interface ContextType{
    appState: AppState,
    setAppState: (newState: AppState) => void
}

const initialState: AppState = {
    navExtended: false,
    theme: 'dark',
    currentPage: 'dashboard'
}

export const AppContext = createContext<ContextType>({
    appState: 
    {
        ...initialState
    },
    setAppState: () => {}
});

export const AppProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
    const [ appState, setAppState ] = useState<AppState>({
        ...initialState
    })
    return(
        <AppContext.Provider value={{appState, setAppState}}>
            { children }
        </AppContext.Provider>
    )
}