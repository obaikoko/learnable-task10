import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();
const port = process.env.PORT || 5000;
import roomTypeRoute from './routes/roomTypeRoute.js';
import roomRoute from './routes/roomRoute.js'

import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/room-types', roomTypeRoute);
app.use('/api/v1/rooms', roomRoute);

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on ${port}`));
