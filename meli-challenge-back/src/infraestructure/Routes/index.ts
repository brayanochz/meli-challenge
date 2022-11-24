import { Express, Router } from 'express';
import { ProductController } from '../Controllers/ProductController';

export const initRoutes= (app: Express) => {

    app.get('/', (req, res) => {
        res.send('Express + TypeScript Server');
    });

    const apiRouter = Router();

    apiRouter.get('/items', ProductController.SearchProducts)
    apiRouter.get('/items/:id', ProductController.GetProductById)

    app.use('/api', apiRouter)
}