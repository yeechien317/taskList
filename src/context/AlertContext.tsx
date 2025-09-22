import React, { createContext, useContext, useState, ReactNode } from 'react';

export type AlertContextType = {
    show: (msg: string) => void;
    error: string | null;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
    const [error, setError] = useState<string | null>(null);

    const show = (msg: string) => {
        setError(msg);
        setTimeout(() => setError(null), 3000); // auto-hide
    };

    return (
        <AlertContext.Provider value={{ show, error }}>
            {children}
        </AlertContext.Provider>
    );
};

// ✅ safe custom hook
export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error('useAlert must be used inside an AlertProvider');
    }
    return context;
};
