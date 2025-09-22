import { useAuth } from '../context/AuthContext';
import { useAlert } from '../context/AlertContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const useLogin = () => {
    const { login } = useAuth();
    const { show, error } = useAlert();
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({ phone: '', password: '' });

    const handleLogin = async () => {
        try {
            await login(inputs.phone, inputs.password);
            show('Login successful!');
            navigate('/home');
        } catch {
            show('Login failed!');
        }
    };

    return { inputs, setInputs, handleLogin, error };
};
