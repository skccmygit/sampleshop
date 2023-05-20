//import useActions from "../hooks/useActions";
import usePrototypes from "../hooks/usePrototypes";
import useOrders from "../hooks/useOrders";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const orders = useOrders();
  const prototypes = usePrototypes();
  //const { addToOrder, remove, removeAll } = useActions();
  const navigator = useNavigate();
  console.log("Checkout~~~ ");

  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return quantity * prototype.price;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);

  return (
    <div className="order">
      <div className="body">
        {orders.map((order) => {
          const { id } = order;
          const prototype = prototypes.find((p) => p.id === id);

          return (
            <div className="item" key={id}>
              <div className="img">
                <video src={prototype.thumbnail} />
              </div>
              <div className="content">
                <p className="title">
                  {prototype.title} X {order.quantity}
                </p>
              </div>
              <div className="action">
                <p className="price">$ {prototype.price * order.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <hr />
        <div className="item">
          <div className="content">Total</div>
          <div className="action">
            <div className="price">$ {totalPrice}</div>
          </div>
        </div>
        <button
          className="btn btn--secondary"
          style={{ width: "40%", marginTop: 10, marginLeft: 10 }}
          onClick={() => {
            console.log("goto payment link");
          }}>
          Payment
        </button>
        <button
          className="btn btn--secondary"
          style={{ width: "40%", marginTop: 10, marginLeft: 10 }}
          onClick={() => navigator("/")}>
          Checkout
        </button>
      </div>
    </div>
  );
}
