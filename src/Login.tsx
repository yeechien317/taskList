// src/pages/Login.tsx
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { AuthContext } from './context/AuthContext';
import { AlertContext } from './context/AlertContext';
import { PhoneInput } from './components/PhoneInput';
import { SubmitButton } from './components/SubmitButton';

type InputsType = {
    phone: string;
    password: string;
};

export default function Login() {
    const { login } = useContext(AuthContext);
    const { show, error } = useContext(AlertContext);
    const navigate = useNavigate();

    const [inputs, setInputs] = useState<InputsType>({
        phone: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            const result = await login(inputs.phone, inputs.password); // call login
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

    const canSubmit = inputs.phone.length > 0 && inputs.password.length > 0;

    return (
        <div style={{ width: '300px', margin: '100px auto' }}>
            <Typography variant="h5" mb={2}>
                Login
            </Typography>

            <PhoneInput
                value={inputs.phone}
                onChange={(phone: string) => setInputs({ ...inputs, phone })}
            />

            <input
                type="password"
                placeholder="Password"
                value={inputs.password}
                onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                }
                style={{
                    marginTop: '1rem',
                    width: '100%',
                    padding: '0.5rem',
                    fontSize: '1rem',
                }}
            />

            <div style={{ marginTop: '1rem' }}>
                <SubmitButton
                    onClick={handleSubmit}
                    loading={isLoading}
                    disabled={!canSubmit}
                    label="Login"
                />
            </div>
        </div>
    );
}
