import { createContext, ReactNode, useState } from 'react';

interface AlertContextType {
    show: (msg: string) => void;
    error: (msg: string) => void;
}

export const AlertContext = createContext<AlertContextType>({
    show: () => void 0,
    error: () => void 0,
});

export const AlertProvider = ({ children }: { children: ReactNode }) => {
    const [message, setMessage] = useState('');
    const [type, setType] = useState<'success' | 'error'>('success');

    const show = (msg: string) => {
        setType('success');
        setMessage(msg);
        setTimeout(() => setMessage(''), 3000);
    };

    const error = (msg: string) => {
        setType('error');
        setMessage(msg);
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <AlertContext.Provider value={{ show, error }}>
            {children}
            {message && (
                <div style={{
                    position: 'fixed',
                    top: 20,
                    right: 20,
                    padding: 10,
                    backgroundColor: type === 'error' ? 'red' : 'green',
                    color: 'white',
                }}>
                    {message}
                </div>
            )}
        </AlertContext.Provider>
    );
};
