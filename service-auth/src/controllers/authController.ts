import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// ⚠️ In production, use a DB instead of hardcoding users
const users = [
    { username: '123', passwordHash: bcrypt.hashSync('password123', 10) },
];

const JWT_SECRET = 'supersecret'; // move to env variable in production

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = users.find((u) => u.username === username);
    if (!user) return res.status(401).json({ success: false, message: 'User not found' });

    const validPassword = bcrypt.compareSync(password, user.passwordHash);
    if (!validPassword) return res.status(401).json({ success: false, message: 'Invalid password' });

    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    return res.json({ success: true, token });
};

export const logout = (req: Request, res: Response) => {
    // with JWT, logout is client-side (remove token)
    return res.json({ success: true, message: 'Logged out' });
};
