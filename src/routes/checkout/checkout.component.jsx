import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

// import './checkout.styles.scss'

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {cartItems.map((cartItem) => {
            const {id, name, quantity} = cartItem;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <span>{quantity}</span>
              <span>decrement</span>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
