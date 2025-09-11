import { createContext, ReactNode, useState } from 'react';

interface AuthContextType {
    user: { phone?: string; email?: string } | null;
    login: (phone: string, password: string) => Promise<{ success: boolean }>;
    sendOtp: (phone: string) => Promise<{ success: boolean }>;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => ({ success: false }),
    sendOtp: async () => ({ success: false }),
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<{ phone?: string; email?: string } | null>(null);

    const login = async (phone: string, password: string) => {
        console.log('Login API:', phone, password);
        await new Promise(r => setTimeout(r, 1000));
        setUser({ phone });
        return { success: true };
    };

    const sendOtp = async (phone: string) => {
        console.log('Sending OTP to', phone);
        await new Promise(r => setTimeout(r, 1000));
        return { success: true };
    };

    return (
        <AuthContext.Provider value={{ user, login, sendOtp }}>
            {children}
        </AuthContext.Provider>
    );
};
