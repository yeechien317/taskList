import { Router } from 'express';

const router = Router();

// POST /auth/login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === '123' && password === '66') {
        return res.json({ success: true, user: { username } });
    }

    return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// POST /auth/send-otp
router.post('/send-otp', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ success: false, message: 'Phone is required' });
    }

    console.log(`📲 Sending OTP to ${username}`);
    return res.json({ success: true, message: 'OTP sent!' });
});

export default router; // ✅ ESM export
