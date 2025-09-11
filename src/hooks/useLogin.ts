import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { AlertContext } from '../context/AlertContext';

export const useLogin = () => {
    const { login } = useContext(AuthContext);
    const { show, error } = useContext(AlertContext);
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({ phone: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const canSubmit = inputs.phone.length > 6 && inputs.password.length > 0;

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            const result = await login(inputs.phone, inputs.password);
            if (result.success) {
                show('Logged in successfully!');
                navigate('/'); // redirect to homepage
            }
        } catch (err) {
            error('Login failed. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return { inputs, setInputs, handleSubmit, isLoading, canSubmit };
};
