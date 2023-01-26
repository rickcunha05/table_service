import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

//Importação das minhas rotas
import { createCategories } from '../app/useCases/categories/createCategory';
import { listCategories } from '../app/useCases/categories/listCategory';
import { createProducts } from '../app/useCases/products/createProducts';
import { listProducts } from '../app/useCases/products/listProducts';
import { listProductsByCategories } from '../app/useCases/categories/listProductsByCategories';
import { listOrders } from '../app/useCases/orders/listOrders';
import { createOrder } from '../app/useCases/orders/createOrder';
import { changeOrderStatus } from '../app/useCases/orders/changeOrderStatus';
import { cancelOrder } from '../app/useCases/orders/cancelOrder';

//lembrar sempre de declarar essa const como router pois é através dela que será feita a ligação com os useCases
export const router = Router();

// diskStorage faz o upload de imagens localmente
const upload = multer({
  storage: multer.diskStorage({
    destination(request, file, callback) {
      callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(request, file, callback) {
      //Tratativa para pegar gerar um hash com a data atual e o nome do arquivo
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

//List Categories aqui estou trazendo todas as minhas categorias de produtos
router.get('/categories', listCategories);

// Create category aqui estou criando todos os meus produtos
router.post('/categories', createCategories);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProducts);

//Get products by category aqui estou pegando todos os produtos de uma mesma categoria baseado no Id da categoria
router.get('/categories/:categoryId/products', listProductsByCategories);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
