import { useContext } from "react";
import { MenuContext } from "./Context";

function Basket({ addItems, minusItems, total, clearBasket }) {
  const items = useContext(MenuContext);

  return (
    <div className="d-flex flex-column align-items-center fullmenu p-1 text-center">
      <div className="card row p-2 m-2">
        {total > 1 ? (
          <div className="col-12">
            <span className="h4 mt-1 text-center">
              Total: £{total.toFixed(2)}
            </span>
            <div className="d-flex  p-3">
              <button className="btn btn-danger m-2" onClick={clearBasket}>
                Clear Basket
              </button>
              <button className="btn btn-success m-2">Checkout</button>
            </div>
          </div>
        ) : (
          <span>Basket is empty!</span>
        )}
      </div>
      {items.map((dish) => (
        <div
          key={dish.id}
          className={
            dish.basket > 0
              ? "card d-flex flex-column justify-content-center align-items-center mt-5 m-sm-4  fst-italic basket"
              : undefined
          }
        >
          {dish.basket > 0 ? <h3>{dish.dish}</h3> : undefined}
          {dish.basket > 0 ? <p>£{dish.price}</p> : undefined}

          {dish.basket > 0 ? (
            <div className="d-flex p-2">
              <button
                className="btn btn-danger m-2"
                onClick={() => minusItems(dish.id, dish.price, dish.basket)}
              >
                -
              </button>
              <p className="p-2">{dish.basket}</p>
              <button
                className="btn btn-success  m-2"
                onClick={() => addItems(dish.id, dish.price, dish.basket)}
              >
                +
              </button>
            </div>
          ) : undefined}
        </div>
      ))}
    </div>
  );
}

export default Basket;
