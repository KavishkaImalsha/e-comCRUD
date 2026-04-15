import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});

app.get('/api/test', (req, res) => {
    res.json({ success: true, message: 'Backend working!' });
});

export default app