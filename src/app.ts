import express from 'express';
import route from './routes/products.router';
import routeUser from './routes/user.router';
import routeOrders from './routes/order.router';
import routeLogin from './routes/login.router';

const app = express();

app.use(express.json());

app.use('/products', route);
app.use('/users', routeUser);
app.use('/orders', routeOrders);
app.use('/login', routeLogin);

export default app;
