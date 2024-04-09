import { createContext } from "react";
import { useState } from "react";


export const AuthContext = createContext<any>(null)

export const AuthContentProvider = ({ children }: {children: React.ReactNode}) => {
    const [auth, setAuth] = useState(false)

    const signIn = (auth: boolean, callback: () => void) => {
        setAuth(auth)
        callback()
    }
    const signOut = (callback: () => void) => {
        setAuth(false)
        callback()
    }
    return (
        <AuthContext.Provider value={{ auth, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}