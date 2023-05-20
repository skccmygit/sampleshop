import useActions from "../hooks/useActions";
import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";
import { useMemo } from "react";
export default function Orders() {
  const orders = useOrders();
  const prototypes = usePrototypes();
  const { remove, removeAll } = useActions();
  console.log(orders);

  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return quantity * prototype.price;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);
  if (orders.length === 0) {
    return (
      <aside>
        <div className="empty">
          <div className="title">Awesome Prototypes in Shop</div>
          <div className="subtitle">
            {" "}
            Check out what other designers have created using ProtoPie—download
            these examples to learn exactly how they made their interactions.
          </div>
        </div>
        <div className="btn__area">
          <a href="https://www.protopie.io" target="_BLANK" rel="noreferrer">
            <button>Try ProtoPie Yourself</button>
          </a>
        </div>
      </aside>
    );
  } else {
    return (
      <aside>
        <div className="order">
          <div className="body">
            {orders.map((order) => {
              const { id } = order;
              const prototype = prototypes.find((p) => p.id === id);

              const click = () => {
                remove(id);
              };
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
                    <p className="price">
                      $ {prototype.price * order.quantity}
                    </p>
                    <button className="btn btn--link" onClick={click}>
                      <i className="icon icon--cross" />
                    </button>
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
              <button className="btn btn--link" onClick={removeAll}>
                <i className="icon icon--delete" />
              </button>
            </div>
            <button
              className="btn btn--secondary"
              style={{ width: "100%", marginTop: 10 }}>
              Checkout
            </button>
          </div>
        </div>
      </aside>
    );
  }
}
