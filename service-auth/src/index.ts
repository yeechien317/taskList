import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth';

const app = express();
const PORT = 5000;

app.use(cors()); // ← This allows all origins. For production, restrict it.

app.use(express.json());

app.get('/', (req, res) => {
    res.send('🚀 Backend is working!');
});

app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
