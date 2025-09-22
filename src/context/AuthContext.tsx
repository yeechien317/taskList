import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
    login: (phone: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(null);

    const login = async (phone: string, password: string) => {
    // TODO: call backend API with axios
        console.log('Logging in with', phone, password);
        setUser({ phone }); // mock user
    };

    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error('useAuth must be used inside an AuthProvider');
    }
    return ctx;
};
