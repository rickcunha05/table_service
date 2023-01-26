import { Order } from '../../@types/Order';
import closeIcon from '../../assets/images/close-icon.svg'
import { ModalBody, OrderDetails, Overlay } from "./styles";

interface OrderMOdalProps {
  visible: boolean;
  order: Order | null;
}
export function OrderModal({ visible, order }: OrderMOdalProps) {
  if (!visible || !order) {
    return null;
  }
  const price = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>{order.table}</strong>
          <button type='button'>
            <img src={closeIcon} alt="" />
          </button>
        </header>
        <div className="status_container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕒'}
              {order.status === 'IN_PRODUCTION' && '🧑‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img src={`http://localhost:3001/uploads/${product.imagePath}`} alt={product.name}
                  width="56"
                  height="30"
                />
                <span className="quantity">{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  )
}