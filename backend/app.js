import express from 'express'
import cors from 'cors'
import productRouter from './routes/productRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.json({ message: 'API is running...' });
// });

// app.get('/api/test', (req, res) => {
//     res.json({ success: true, message: 'Backend working!' });
// });

app.use('/api/product', productRouter)

export default app