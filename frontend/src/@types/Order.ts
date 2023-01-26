export interface Order {
    _id: string;
    table: string;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
    //O primeiro products se refere ao pedido
    products: {
        _id: string;
        quantity: number;
        // o segundo products se refere ao conteúdo do pedido
        product: {
            name: string;
            imagePath: string;
            price: number;
        }
    }[]
}