import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);
  const { name, quantity, price, imageUrl } = cartItem;

  const handleClearCart = () => clearItemFromCart(cartItem);
  const handleIncrementQuantity = () => addItemToCart(cartItem);
  const handleDecrementQuantity = () => removeItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrementQuantity}>
          -
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncrementQuantity}>
          +
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
