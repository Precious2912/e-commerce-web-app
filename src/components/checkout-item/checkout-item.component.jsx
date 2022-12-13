import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  Text,
  Quantity,
  Arrow,
  Value,
  RemoveIcon,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);
  const { name, quantity, price, imageUrl } = cartItem;

  const handleClearCart = () => clearItemFromCart(cartItem);
  const handleIncrementQuantity = () => addItemToCart(cartItem);
  const handleDecrementQuantity = () => removeItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Text>{name}</Text>
      <Quantity>
        <Arrow onClick={handleDecrementQuantity}>-</Arrow>
        <Value>{quantity}</Value>
        <Arrow className="arrow" onClick={handleIncrementQuantity}>
          +
        </Arrow>
      </Quantity>
      <span className="price">{price}</span>
      <RemoveIcon onClick={handleClearCart}>&#10005;</RemoveIcon>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
