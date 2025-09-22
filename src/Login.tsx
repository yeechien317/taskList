import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const res = await axios.post('http://localhost:5000/auth/login', {
                username,
                password,
            });

            console.log('✅ Login success:', res.data);
            alert('Login successful!');
        } catch (err: any) {
            console.error('❌ Login failed:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'Login failed');
        }
    };
    console.log('receiving', username, password);

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit">Login</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}
