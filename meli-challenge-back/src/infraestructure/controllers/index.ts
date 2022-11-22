import { Express, Router } from 'express';
import { SearchProducts } from '../../application/searchProducts';

export const initRoutes= (app: Express) => {

    app.get('/', (req, res) => {
        res.send('Express + TypeScript Server');
    });

    const apiRouter = Router();

    apiRouter.get('/items', SearchProducts)

    app.use('/api', apiRouter)
}