import express from 'express';
import route from './routes/products.router';
import routeUser from './routes/user.router';

const app = express();

app.use(express.json());

app.use('/products', route);
app.use('/users', routeUser);

export default app;
